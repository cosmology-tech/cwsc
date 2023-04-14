import * as AST from '../ast/nodes';
import { ExecDefn } from '../ast/nodes';

type Type = { name: string, types: string[] };
type Arg = { name: string, type: Type };
type Exec = { name: string, args: Arg[] };

export type Interface = { name: string, execs: Exec[] };
export type Contract = { name: string, execs: Exec[] };

export class AST2Intermediate {
    public interfaces = new Map<string, Interface>();
    public contracts = new Map<string, Contract>();

    translateInterface(iface: AST.InterfaceDefn) {
        this.interfaces.set(iface.name.text as string, {
            name: iface.name.text,
            execs: iface.body.elements.filter(x => x.constructor.name == 'ExecDecl').map(x => this.translate(x))
        } as Interface);
    }

    translateExecDecl(exec: AST.ExecDecl): any {
        return { name: exec.name!.text, args: exec.args.elements.map(x => this.translate(x)) };
    }

    translateExecDefn(exec: AST.ExecDefn): any {
        return { name: exec.name!.text, args: exec.args.elements.map(x => this.translate(x)) };
    }
    
    translateFnArg(arg: AST.FnArg): any {
        return { name: arg.name.text, option: arg.option, type: this.translate(arg.type) };
    }

    translateTypePath(type: AST.TypePath) {
        return { name: type.toString() }
    }

    translateContractDefn(contract: AST.ContractDefn) {
        this.contracts.set(contract.name.text, {
            name: contract.name.text, execs: contract.body.descendantsOfType(ExecDefn).map(x => this.translate(x) as Exec)
        });
    }

    translateParamzdTypeExpr(pte: AST.ParamzdTypeExpr) {
        return { name: pte.type.toString(), types: pte.params.map(x => x.toString()) };
    }

    translate(ast: AST.AST) {
        let astType = ast.constructor.name;
        if (`translate${astType}` in this) {
            return (this as any)[`translate${astType}`](ast);
        } else {
            throw new Error(`Could not translate AST type: ${astType}`);
        }
    }
}
