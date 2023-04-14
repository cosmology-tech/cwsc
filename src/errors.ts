import * as AST from './ast/nodes';
export class ASTValidationError extends Error {
  constructor(
    public message: string,
    public astNode: AST.AST,
    public childNode?: AST.AST
  ) {
    super(message);
  }
}

export class SourceValidationError extends Error {
  constructor(
    public message: string,
    public file: string,
    public position: any
  ) {
    super(message);
  }
}
