import { Rust } from './common';
import { Type } from './type';
import { Expr } from './expr';

export class Path implements Rust {
  public segments: string[];
  constructor(...segments: string[]) {
    this.segments = segments;
  }

  join(...segments: string[]): Path {
    return new Path(...this.segments, ...segments);
  }

  toRustString(): string {
    return this.segments.join('::');
  }

  toType(): Type {
    return new Type(this.toRustString());
  }

  toExpr(): Expr.Path {
    return new Expr.Path(this.toRustString());
  }
}
