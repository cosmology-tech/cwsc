lexer grammar CWScriptLexer;

// KEYWORDS
DEBUG: 'debug!';
CONTRACT: 'contract';
INTERFACE: 'interface';
IMPORT: 'import';
IMPLEMENTS: 'implements';
EXTENDS: 'extends';
ERROR: 'error';
EVENT: 'event';
INSTANTIATE_NOW: 'instantiate!';
EXEC_NOW: 'exec!';
QUERY_NOW: 'query!';
DELEGATE_EXEC: 'delegate_exec!';
INSTANTIATE: 'instantiate';
EXEC: 'exec';
QUERY: 'query';
REPLY: 'reply';
FOR: 'for';
IN: 'in';
FROM: 'from';
STATE: 'state';
IF: 'if';
IS: 'is';
TRY: 'try';
CATCH: 'catch';
ELSE: 'else';
NOT: 'not';
NONE: 'None';
MUT: 'mut';
AND: 'and';
OR: 'or';
TRUE: 'true';
FALSE: 'false';
FN: 'fn';
LET: 'let';
CONST: 'const';
FAIL: 'fail!';
RETURN: 'return';
STRUCT: 'struct';
ENUM: 'enum';
TYPE: 'type';
EMIT: 'emit';
AS: 'as';


// PUNCTUATION
TILDE: '~';
LPAREN: '(';
RPAREN: ')';
LBRACK: '[';
RBRACK: ']';
LBRACE: '{';
RBRACE: '}';
DOT: '.';
COMMA: ',';
D_QUEST: '??';
QUEST: '?';
BANG: '!';
SEMI: ';';
COLON: ':';
D_COLON: '::';
HASH: '#';
AT: '@';
AMP: '&';
ARROW: '->';
FAT_ARROW: '=>';
BAR: '|';
S_QUOTE: '\'';
D_QUOTE: '"';
EQ: '='; // OPS
EQ_EQ: '==';
NEQ: '!=';
PLUS: '+';
PLUS_EQ: '+=';
MINUS: '-';
MINUS_EQ: '-=';
MUL: '*';
MUL_EQ: '*=';
DIV: '/';
DIV_EQ: '/=';
MOD: '%';
MOD_EQ: '%=';
LT: '<';
LT_EQ: '<=';
GT: '>';
GT_EQ: '>=';
POW: '**';

// Identifiers
Ident: [_a-zA-Z$][_a-zA-Z0-9]*;

// Strings
StringLiteral: D_QUOTE DoubleQuotedStringCharacter* D_QUOTE;
fragment DoubleQuotedStringCharacter: ~["\r\n\\] | ('\\' .);

// Numbers
IntLiteral: DecimalDigits;
DecLiteral: (DecimalDigits? DOT DecimalDigits);
fragment DecimalDigits: [0-9] ( '_'? [0-9])*;

// Bool
BoolLiteral: TRUE | FALSE;

// Comments
CWSPEC_LINE_COMMENT: ('///' .*? [\r\n])+;
CWSPEC_BLOCK_COMMENT: '/**' .*? '*/';

LINE_COMMENT: '//' ~[\r\n]* -> channel(HIDDEN);
BLOCK_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

// Whitespace
WS: [\r\n\t ] -> channel(HIDDEN);
