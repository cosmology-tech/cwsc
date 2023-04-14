import { CWScriptParser, SourceFileContext } from './grammar/CWScriptParser';
import { CWScriptLexer } from './grammar/CWScriptLexer';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as AST from './ast/nodes';
import { CWScriptASTVisitor } from './ast/ast-builder';

export class Parser {
  public antlrLexer: CWScriptLexer;
  public antlrParser: CWScriptParser;

  constructor(public sourceInput: string) {
    this.antlrLexer = new CWScriptLexer(CharStreams.fromString(sourceInput));
    this.antlrParser = new CWScriptParser(
      new CommonTokenStream(this.antlrLexer)
    );
  }

  public buildAST(): AST.SourceFile {
    let tree = this.antlrParser.sourceFile();
    let visitor = new CWScriptASTVisitor();
    return visitor.visitSourceFile(tree);
  }

  public static fromString(sourceInput: string): Parser {
    return new Parser(sourceInput);
  }
}
