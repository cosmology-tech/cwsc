import { Source } from '../codegen/codegen';
import * as AST from '../ast/nodes';

export class ASTValidationPass {
  constructor(public ctx: SourceValidationContext) {}

  analyze(ast: AST.AST): ValidationFinding[] {
    if (`validate${ast.constructor.name}` in this) {
      return (this as any)[`validate${ast.constructor.name}`](ast);
    } else {
      console.warn(
        `Ignored ${this.constructor.name} validation on ${ast.constructor.name}`
      );
    }
    return [];
  }
}

export class ValidateStateUsages extends ASTValidationPass {
  analyze(ast: AST.AST): ValidationFinding[] {
    let findings = [];
    let itemUsages = [
      ...ast.descendantsOfType(AST.StateItemAccessExpr),
      ...ast.descendantsOfType(AST.StateItemAssignLHS),
    ];

    let mapUsages = ast.descendantsOfType(AST.StateMapAssignLHS);
    for (let iu of itemUsages) {
      let contract = iu.nearestAncestorOfType(AST.ContractDefn)!;
      if (!this.stateItemDefinedInContract(iu.key, contract)) {
        findings.push(
          new ValidationFinding(
            Finding.Error,
            `State item (${iu.key.text}) is not defined in contract ${contract.name.text}.`,
            iu
          )
        );
      }
    }

    for (let mu of mapUsages) {
      let contract = mu.nearestAncestorOfType(AST.ContractDefn)!;
      if (!this.stateMapDefinedInContract(mu.key, contract)) {
        findings.push(
          new ValidationFinding(
            Finding.Error,
            `State map (${mu.key.text}) is not defined in the contract ${contract.name.text}.`,
            mu
          )
        );
      }
    }

    return findings;
  }

  stateItemDefinedInContract(
    key: AST.Ident,
    contract: AST.ContractDefn
  ): boolean {
    for (let defn of contract.descendantsOfType(AST.ItemDefn)) {
      if (defn.key.text === key.text) {
        return true;
      }
    }

    return false;
  }

  stateMapDefinedInContract(
    key: AST.Ident,
    contract: AST.ContractDefn
  ): boolean {
    for (let defn of contract.descendantsOfType(AST.MapDefn)) {
      if (defn.key.text === key.text) {
        return true;
      }
    }

    return false;
  }
}

export const STD_AST_VALIDATIONS: Array<typeof ASTValidationPass> = [
  ValidateStateUsages,
];

export enum Finding {
  Error = 'error',
  Warning = 'warning',
}

export class ValidationFinding {
  constructor(
    public severity: Finding,
    public message: string,
    public node: AST.AST
  ) {}
}

export interface ValidationReport {
  [file: string]: Array<ValidationFinding>;
}

export class SourceValidationContext {
  public validations = STD_AST_VALIDATIONS;

  constructor(public sources: Source[]) {}

  runValidations(): ValidationReport {
    // build validators
    let report: ValidationReport = {};
    let ast_validators = this.validations.map((x) => new x(this));
    for (const source of this.sources) {
      const ast = source.ast;
      for (const v of ast_validators) {
        let findings = v.analyze(ast);
        if (findings.length > 0) {
          report[source.file] = findings;
        }
      }
    }
    return report;
  }
}
