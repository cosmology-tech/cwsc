import { Rust } from './common';
import { Type } from './type';
import { Expr } from './expr';

export namespace Stmt {
  export class Let implements Rust {
    constructor(
      public mut: boolean,
      public ident: string,
      public type?: Type,
      public rhs?: Expr
    ) {}

    toRustString(): string {
      let m = '';
      if (this.mut) {
        m = ' mut ';
      }
      let t = '';
      if (this.type !== undefined) {
        t = `: ${this.type.toRustString()}`;
      }
      let r = '';
      if (this.rhs !== undefined) {
        r = ` = ${this.rhs.toRustString()}`;
      }
      return `let ${m} ${this.ident}${t}${r};`;
    }
  }

  export class Return implements Rust {
    constructor(public expr?: Expr) {}

    toRustString(): string {
      return `return ${this.expr ? this.expr.toRustString() : ''};`;
    }
  }

  export class Assign implements Rust {
    constructor(public lhs: Expr, public rhs: Expr) {}

    toRustString(): string {
      return `${this.lhs.toRustString()} = ${this.rhs.toRustString()};`;
    }
  }

  export class Expression implements Rust {
    constructor(public expr: Expr) {}

    toRustString(): string {
      return `${this.expr.toRustString()};`;
    }
  }
}
