import { AST } from '.';

export class State extends AST {
  constructor(public key: string) {
    super();
    this.setParentForChildren();
  }
}

export class SpecialVariable extends AST {
  constructor(public ns: string, public member: string) {
    super();
    this.setParentForChildren();
  }
}
