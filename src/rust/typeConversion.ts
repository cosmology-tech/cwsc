import { Rust } from "./common";
import { Expr } from "./expr";
import { Path } from "./path";

export class TypeConversion extends Expr {
  expr: Rust;

  constructor(
    public rhs: string,
    public type: string
  ) {
    super();

    // ToDo: implement the rest of this
    // Do we need another visitor?
    switch (this.type) {
      case 'String':
        this.expr =  new Expr.FnCall("String::from", [new Path(rhs)]);
        break;
      default:
        this.expr = new Path(rhs);
        break;
    }
  }

  toRustString(): string {
    return this.expr.toRustString();
  }
}