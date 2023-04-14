import {
	ContractBlockContext,
	ContractDefnContext,
	CWScriptParser, ExecDefnContext, FnDefnContext,
	IdentContext,
	ImportAllStmtContext,
	ImportItemsStmtContext, InstantiateDefnContext,
	InterfaceDefnContext, MapKeyDefnContext,
	ParamContext, PureParamsContext, QueryDefnContext,
	SourceFileContext,
	StateDefn_itemContext,
	StateDefnBlockContext,
	StateItemDefnContext,
	StateMapDefnContext, StateParamsContext,
	StringLitContext,
	TopLevelStmtContext,
	TypePathContext,
} from './grammar/CWScriptParser';
import { CWScriptLexer } from './grammar/CWScriptLexer';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { CWScriptParserVisitor } from 'grammar/CWScriptParserVisitor';
import * as AST from './ast';

export class CWScriptASTVisitor
  extends AbstractParseTreeVisitor<AST.AST>
  implements CWScriptParserVisitor<AST.AST>
{
  protected defaultResult(): AST.AST {
    return new AST.AST();
  }

	visitSourceFile(ctx: SourceFileContext): AST.SourceFile {
    let body = ctx.topLevelStmt().map((x) => this.visit(x));
    return new AST.SourceFile(body).$();
  }

  visitContractDefn(ctx: ContractDefnContext): AST.ContractDefn {
    let name = this.visitIdent(ctx._name);
    let body = this.visitContractBlock(ctx._body);
    let base = ctx._base ? this.visitTypePath(ctx._base) : null;
    let interfaces = ctx._interfaces.map((x) => this.visitTypePath(x));
    return new AST.ContractDefn(name, body, base, new AST.List(interfaces)).$();
  }

  visitTypePath(ctx: TypePathContext): AST.TypePath {
    return new AST.TypePath(ctx._segments.map((x) => this.visitIdent(x))).$();
  }

  visitInterfaceDefn(ctx: InterfaceDefnContext): AST.InterfaceDefn {
    let name = this.visitIdent(ctx._name);
		console.log(Object.keys(ctx));
    let body = this.visitContractBlock(ctx._body);
    let base = ctx._base ? this.visitTypePath(ctx._base) : null;
    return new AST.InterfaceDefn(name, body, base).$();
  }

	visitImportAllStmt(ctx: ImportAllStmtContext): AST.ImportAllStmt {
		let src = ctx._src.text!;
		return new AST.ImportAllStmt(src).$();
	}

	visitImportItemsStmt(ctx: ImportItemsStmtContext): AST.ImportItemsStmt {
		let items = ctx._items.map((x) => this.visitIdent(x));
		let src = ctx._src.text!;
		return new AST.ImportItemsStmt(items, src).$();
	}

	visitParam(ctx: ParamContext): AST.Param {
		let name = this.visitIdent(ctx._name);
		let ty = this.visit(ctx._ty);
		let optional = !!ctx._optional;
		let default_ = ctx._default ? this.visit(ctx._default) : null;
		return new AST.Param(name, ty as AST.TypeExpr, optional, default_ as AST.Expr).$();
	}

	visitStringLit(ctx: StringLitContext): AST.StringLit {
		return new AST.StringLit(ctx.text).$();
	}

  visitContractBlock(ctx: ContractBlockContext): AST.ContractBlock {
    return new AST.ContractBlock(ctx._body.map((x) => this.visit(x))).$();
  }

	visitStateDefnBlock(ctx: StateDefnBlockContext): AST.StateDefnBlock {
		// @ts-ignore
		return new AST.StateDefnBlock(ctx.stateDefn_item().map((x) => this.visit(x))).$();
	}

	visitStateItemDefn(ctx: StateItemDefnContext): AST.StateItemDefn {
		let name = this.visitIdent(ctx._name);
		let ty = this.visit(ctx._ty);
		let default_ = ctx._default ? this.visit(ctx._default) as AST.Expr : null;
		return new AST.StateItemDefn(name, ty as AST.TypeExpr, default_).$();
	}

	visitStateMapDefn(ctx: StateMapDefnContext): AST.StateMapDefn {
		let name = this.visitIdent(ctx._name);
		let mapKeys = ctx._mapKeys.map(x => this.visitMapKeyDefn(x));
		let ty = this.visit(ctx._ty) as AST.TypeExpr;
		let default_ = ctx._default ? this.visit(ctx._default) as AST.Expr : null;
		return new AST.StateMapDefn(name, mapKeys, ty, default_).$();
	}

	visitFnDefn(ctx: FnDefnContext): AST.FnDefn {
		let name = this.visitIdent(ctx._name);
		let params = this.visit(ctx._params) as AST.List<AST.Param>;
		let retTy = ctx._retTy ? this.visit(ctx._retTy) as AST.TypeExpr : null
		let body = this.visit(ctx._body);
		return new AST.FnDefn(name, params, retTy, body as AST.Block).$();
	}
	visitPureParams(ctx: PureParamsContext): AST.List<Param> {
		return new AST.List<Param>(ctx._params.map((x) => this.visitParam(x))).$();
	}

	visitStateParams(ctx: StateParamsContext): AST.List<Param> {
		// TODO: add state params
		return new AST.List<Param>(ctx._params.map((x) => this.visitParam(x))).$();
	}

	visitMapKeyDefn(ctx: MapKeyDefnContext): AST.MapKeyDefn {
		let name = ctx._name ? this.visitIdent(ctx._name) : null;
		let ty = this.visit(ctx._ty);
		return new AST.MapKeyDefn(name, ty as AST.TypeExpr).$();
	}

	visitInstantiateDefn(ctx: InstantiateDefnContext): AST.InstantiateDefn {
		let params = this.visit(ctx._params) as AST.List<AST.Param>;
		let body = this.visit(ctx._body) as AST.ContractBlock;
		return new AST.InstantiateDefn(params, body).$();
	}

	visitExecDefn(ctx: ExecDefnContext): AST.ExecDefn {
		let name = this.visitIdent(ctx._name);
		let params = this.visit(ctx._params) as AST.List<AST.Param>;
		let body = this.visit(ctx._body) as AST.Block;
		return new AST.ExecDefn(name, params, body).$();
	}

	visitQueryDefn(ctx: QueryDefnContext): AST.QueryDefn {
		let name = this.visitIdent(ctx._name);
		let params = this.visit(ctx._params) as AST.List<AST.Param>;
		let retTy = ctx._retTy ? this.visit(ctx._retTy) as AST.TypeExpr : null;
		let body = this.visit(ctx._body) as AST.Block;
		return new AST.QueryDefn(name, params, retTy, body).$();
	}

  visitIdent(ctx: IdentContext): AST.Ident {
    return new AST.Ident(ctx.text).$();
	}
}

export class Parser {
  public antlrLexer: CWScriptLexer;
  public antlrParser: CWScriptParser;

  constructor(public sourceInput: string) {
    this.antlrLexer = new CWScriptLexer(CharStreams.fromString(sourceInput));
    this.antlrParser = new CWScriptParser(
      new CommonTokenStream(this.antlrLexer)
    );
  }

  public buildAST(): any {
    let tree = this.antlrParser.sourceFile();
    let visitor = new CWScriptASTVisitor();
    return visitor.visitSourceFile(tree);
  }

  public static fromString(sourceInput: string): Parser {
    return new Parser(sourceInput);
  }
}
import { readFileSync } from 'fs';
import { Param } from './ast';

let parser = Parser.fromString(
  readFileSync('./examples/terraswap/TerraswapToken.cws', 'utf8')
);
let ast = parser.buildAST();
console.log(JSON.stringify(ast.toJSON(), null, 2));
