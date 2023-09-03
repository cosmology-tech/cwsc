import {
  Token,
  TokenSeq,
  Text,
  Sym,
  Keyword,
  T,
  Whitespace,
  Space,
  Tab,
  Newline,
  Indent,
} from './code-tokens';

// a CodeWriter turns a TokenSeq into a code string
export class CodeWriter {
  public indentLevel: number = 0;

  write(seq: TokenSeq): string {
    let lines: string[][] = [];
    let currLine: string[] = [];
    for (const token of seq.tokens) {
      if (token instanceof Text) {
        currLine.push(token.text);
      } else if (token instanceof Space) {
        currLine.push(token.text);
      } else if (token instanceof Newline) {
        lines.push(currLine);
        currLine = ['\t'.repeat(this.indentLevel)];
      } else if (token instanceof Indent) {
        this.indentLevel += token.level;
      }
    }
    lines.push(currLine);
    return lines.map((line) => line.join('')).join('\n');
  }
}
