import * as tm from 'tmlanguage-generator';
import path from 'path';
import plist from 'plist';

export const grammarPath = path.resolve(__dirname, '../cwscript.tmlanguage');

type Rule = tm.Rule<CWScriptScope>;
type IncludeRule = tm.IncludeRule<CWScriptScope>;
type BeginEndRule = tm.BeginEndRule<CWScriptScope>;
type MatchRule = tm.MatchRule<CWScriptScope>;
type Grammar = tm.Grammar<CWScriptScope>;

export type CWScriptScope =
  | 'comment.block.cwscript'
  | 'comment.line.double-slash.cwscript'
  | 'constant.character.escape.cwscript'
  | 'constant.numeric.cwscript'
  | 'constant.language.cwscript'
  | 'entity.name.function.cwscript'
  | 'keyword.control.declaration.cwscript'
  | 'string.quoted.single.cwscript'
  | 'string.quoted.multi.cwscript'
  | 'variable.other.readwrite.cwscript'
  | 'variable.other.property.cwscript'
  | 'punctuation.definition.template-expression.begin.cwscript'
  | 'punctuation.definition.template-expression.end.cwscript';

const bounded = (text: string) => `\\b${text}\\b`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const after = (regex: string) => `(?<=${regex})`;
const notAfter = (regex: string) => `(?<!${regex})`;
const before = (regex: string) => `(?=${regex})`;
const notBefore = (regex: string) => `(?!${regex})`;

const meta: typeof tm.meta = tm.meta;
const identifierStart = '[_$[:alpha:]]';
const identifierContinue = '[_$[:alnum:]]';
const identifier = bounded(`${identifierStart}${identifierContinue}*`);
const directive = bounded(`[_a-zA-Z-0-9]+`);

// whitespace. ideally we'd tokenize in-line block comments, but that's a lot of work. For now, ignore them.
const ws = `(?:[ \\t\\r\\n]|\\/\\*(?:\\*(?!\\/)|[^*])*\\*\\/)*`;

const keywords = [
  'metadata',
  'targetScope',
  'resource',
  'module',
  'param',
  'var',
  'output',
  'for',
  'in',
  'if',
  'existing',
  'import',
  'as',
  'type',
  'with',
  'using',
];

const keywordExpression: MatchRule = {
  key: 'keyword',
  scope: 'keyword.control.declaration.cwscript',
  match: bounded(`(${keywords.join('|')})`),
};

const lineComment: MatchRule = {
  key: 'line-comment',
  scope: 'comment.line.double-slash.cwscript',
  match: `//.*${before(`$`)}`,
};

const blockComment: BeginEndRule = {
  key: 'block-comment',
  scope: 'comment.block.cwscript',
  begin: `/\\*`,
  end: `\\*/`,
};

const comments: IncludeRule = {
  key: 'comments',
  patterns: [lineComment, blockComment],
};

function withComments(input: Rule[]): Rule[] {
  return [...input, comments];
}

const expression: IncludeRule = {
  key: 'expression',
  patterns: [
    /* placeholder filled later due to cycle*/
  ],
};

const escapeChar: MatchRule = {
  key: 'escape-character',
  scope: 'constant.character.escape.cwscript',
  match: `\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|'|\\\${)`,
};

const stringVerbatim: BeginEndRule = {
  key: 'string-verbatim',
  scope: 'string.quoted.multi.cwscript',
  begin: `'''`,
  end: `'''`,
  patterns: [],
};

const stringSubstitution: BeginEndRule = {
  key: 'string-literal-subst',
  scope: meta,
  begin: `${notAfter(`\\\\`)}(\\\${)`,
  beginCaptures: {
    '1': { scope: 'punctuation.definition.template-expression.begin.cwscript' },
  },
  end: `(})`,
  endCaptures: {
    '1': { scope: 'punctuation.definition.template-expression.end.cwscript' },
  },
  patterns: withComments([expression]),
};

const stringLiteral: BeginEndRule = {
  key: 'string-literal',
  scope: 'string.quoted.single.cwscript',
  begin: `'${notBefore(`''`)}`,
  end: `'`,
  patterns: [escapeChar, stringSubstitution],
};

const numericLiteral: MatchRule = {
  key: 'numeric-literal',
  scope: 'constant.numeric.cwscript',
  match: `[0-9]+`,
};

const namedLiteral: MatchRule = {
  key: 'named-literal',
  scope: 'constant.language.cwscript',
  match: bounded(`(true|false|null)`),
};

const identifierExpression: MatchRule = {
  key: 'identifier',
  scope: 'variable.other.readwrite.cwscript',
  match: `${identifier}${notBefore(`${ws}\\(`)}`,
};

const objectLiteral: BeginEndRule = {
  key: 'object-literal',
  scope: meta,
  begin: `{`,
  end: `}`,
  patterns: withComments([
    {
      key: 'object-property-key',
      scope: 'variable.other.property.cwscript',
      match: `${identifier}${before(`${ws}:`)}`,
    },
    expression,
  ]),
};

const arrayLiteral: BeginEndRule = {
  key: 'array-literal',
  scope: meta,
  begin: `\\[${notBefore(`${ws}${bounded(`for`)}`)}`,
  end: `]`,
  patterns: withComments([expression]),
};

const functionCall: BeginEndRule = {
  key: 'function-call',
  scope: meta,
  begin: `(${identifier})${ws}\\(`,
  beginCaptures: {
    '1': { scope: 'entity.name.function.cwscript' },
  },
  end: `\\)`,
  patterns: withComments([expression]),
};

const decorator: BeginEndRule = {
  key: 'decorator',
  scope: meta,
  begin: `@${ws}${before(identifier)}`,
  end: ``,
  patterns: withComments([expression]),
};

const lambdaStart =
  `(` +
  `\\(${ws}${identifier}${ws}(,${ws}${identifier}${ws})*\\)|` +
  `\\(${ws}\\)|` +
  `${ws}${identifier}${ws}` +
  `)${before(`${ws}=>`)}`;

const lambda: BeginEndRule = {
  key: 'lambda-start',
  scope: meta,
  begin: lambdaStart,
  beginCaptures: {
    '1': {
      scope: meta,
      patterns: withComments([identifierExpression]),
    },
  },
  end: `${ws}=>`,
};

const directiveStatement: BeginEndRule = {
  key: 'directive',
  scope: meta,
  begin: `#${directive}`,
  end: `$`,
  patterns: withComments([
    {
      key: 'directive-variable',
      scope: 'keyword.control.declaration.cwscript',
      match: directive,
    },
  ]),
};

expression.patterns = [
  stringLiteral,
  stringVerbatim,
  numericLiteral,
  namedLiteral,
  objectLiteral,
  arrayLiteral,
  keywordExpression,
  identifierExpression,
  functionCall,
  decorator,
  lambda,
  directiveStatement,
];

const grammar: Grammar = {
  $schema: tm.schema,
  name: 'Bicep',
  scopeName: 'source.cwscript',
  fileTypes: ['.cwscript'],
  patterns: withComments([expression]),
};

export async function generateGrammar(): Promise<string> {
  const json = await tm.emitJSON(grammar);

  return plist.build(JSON.parse(json));
}
