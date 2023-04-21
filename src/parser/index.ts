import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CWScriptLexer as ANTLRCWScriptLexer } from '@/grammar/CWScriptLexer';
import {
  CWScriptParser as ANTLRCWScriptParser,
  SourceFileContext,
} from '../grammar/CWScriptParser';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { CWScriptASTBuilderVisitor } from '@/parser/visitor';
import { CWScriptScopeListener } from '@/parser/listener';
import * as AST from '@/ast';

export class CWScriptParser {
  public static parseAndValidate(sourceInput: string): AST.SourceFile {
    let tree = CWScriptParser.antlrParse(sourceInput);
    const listener: CWScriptScopeListener = new CWScriptScopeListener();
    ParseTreeWalker.DEFAULT.walk(listener, tree);
    let visitor = new CWScriptASTBuilderVisitor();
    return visitor.visitSourceFile(tree);
  }

  public static antlrParse(sourceInput: string): SourceFileContext {
    let antlrLexer = new ANTLRCWScriptLexer(
      CharStreams.fromString(sourceInput)
    );
    let antlrParser = new ANTLRCWScriptParser(
      new CommonTokenStream(antlrLexer)
    );
    let tree = antlrParser.sourceFile();
    return tree;
  }

  public static validateParseTree(tree: SourceFileContext) {
    const listener: CWScriptScopeListener = new CWScriptScopeListener();
    ParseTreeWalker.DEFAULT.walk(listener, tree);
  }
}
