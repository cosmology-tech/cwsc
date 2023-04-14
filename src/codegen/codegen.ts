import { AST2Intermediate } from '../intermediate/ast2intermediate';
import * as AST from '../ast/nodes';
import * as Rust from '../rust';

import { CWScriptEnv } from '../symbol-table/env';
import { AST2Rust } from './ast2rust';

export interface FileSource {
  file: string;
  ast: AST.SourceFile;
}

export type Source = FileSource;
export class CWScriptCodegen {
  public envs: { [filePath: string]: CWScriptEnv } = {};

  constructor(public sources: Source[]) {
    sources.forEach((source) => {
      this.envs[source.file] = new CWScriptEnv();
    });
  }

  generateContract(name: string, file?: string): Rust.CodeGroup {
    let sourceFiles = this.sources.filter(
      (source) =>
        source.ast
          .descendantsOfType(AST.ContractDefn)
          .find((contract) => contract.name.text === name) !== undefined
    );

    if (sourceFiles.length > 1) {
      throw new Error(
        `Multiple source files found for contract ${name}.` +
          ` Please disambiguate which file to use.`
      );
    }

    if (sourceFiles.length === 0) {
      throw new Error(`No source file found for contract ${name}.`);
    }

    let sourceFile = sourceFiles[0];
    let contractDefn = sourceFile.ast
      .descendantsOfType(AST.ContractDefn)
      .find((x) => x.name.text === name)!;

    let env = this.envs[sourceFile.file];
    let inter = new AST2Intermediate();
    sourceFile.ast.descendantsOfType(AST.InterfaceDefn).map(i => inter.translateInterface(i));
    sourceFile.ast.descendantsOfType(AST.ContractDefn).map(i => inter.translateContractDefn(i));

    return new AST2Rust(env, inter).translateContractDefn(contractDefn);
  }
}
