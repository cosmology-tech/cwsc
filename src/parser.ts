import {
  ContractBlockContext,
  ContractDefnContext,
  CWScriptParser,
  IdentContext,
  InterfaceDefnContext,
  SourceFileContext,
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
    return new AST.ContractDefn(name, body, base, interfaces).$();
  }

  visitTypePath(ctx: TypePathContext): AST.TypePath {
    return new AST.TypePath(ctx._segments.map((x) => this.visitIdent(x))).$();
  }

  visitInterfaceDefn(ctx: InterfaceDefnContext): AST.InterfaceDefn {
    let name = this.visitIdent(ctx._name);
    let body = this.visitContractBlock(ctx._body);
    let base = ctx._base ? this.visitTypePath(ctx._base) : null;
    return new AST.InterfaceDefn(name, body, base).$();
  }

  visitContractBlock(ctx: ContractBlockContext): AST.ContractBlock {
    return new AST.ContractBlock(ctx._body.map((x) => this.visit(x))).$();
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

let parser = Parser.fromString(
  readFileSync('./examples/terraswap/TerraswapToken.cws', 'utf8')
);
let ast = parser.buildAST();
console.log(ast.$children);
