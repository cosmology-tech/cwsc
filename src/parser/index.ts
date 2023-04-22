import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CWScriptLexer as ANTLRCWScriptLexer } from '../grammar/CWScriptLexer';
import {
  CWScriptParser as ANTLRCWScriptParser,
  SourceFileContext,
} from '../grammar/CWScriptParser';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { CWScriptASTBuilderVisitor } from '../parser/visitor';
import {
  CheckSymbolsDeclaredBeforeUse,
  CWScriptParseTreeValidator,
} from '../parser/listener';
import * as AST from '../ast';
import { TextView } from '../util/position';
import { Diagnostic } from 'vscode-languageserver';

export interface ParseResult {
  ast: AST.SourceFile | null;
  diagnostics: Diagnostic[];
}

export class CWScriptParser {
  static parse(sourceInput: string): ParseResult {
    let sourceText = new TextView(sourceInput);
    let tree = CWScriptParser.antlrParse(sourceInput);
    let validator = new CWScriptParseTreeValidator(tree, sourceText, [
      CheckSymbolsDeclaredBeforeUse,
    ]);
    validator.validate();
    if (!validator.hasErrors()) {
      return {
        ast: new CWScriptASTBuilderVisitor().visitSourceFile(tree),
        diagnostics: validator.diagnostics,
      };
    } else {
      return {
        ast: null,
        diagnostics: validator.diagnostics,
      };
    }
  }

  static antlrParse(sourceInput: string): SourceFileContext {
    let antlrLexer = new ANTLRCWScriptLexer(
      CharStreams.fromString(sourceInput)
    );
    let antlrParser = new ANTLRCWScriptParser(
      new CommonTokenStream(antlrLexer)
    );
    let tree = antlrParser.sourceFile();
    return tree;
  }
}
