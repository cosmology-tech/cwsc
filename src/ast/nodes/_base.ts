import { ParserRuleContext } from 'antlr4ts';
import { Tree, toData, TreeList } from '../../util/tree';

export interface Position {
  a?: number;
  b?: number;
  length?: number;
  line?: number;
  column?: number;
}

export abstract class AST extends Tree<AST> {
  private __position?: Position;

  constructor(ctx?: ParserRuleContext, parent?: AST, position?: Position) {
    super(parent);
    if (position === undefined) {
      let a = ctx?.start?.startIndex;
      let b = ctx?.stop?.stopIndex;
      let length = !!a && !!b ? b - a + 1 : undefined;
      position = {
        a,
        b,
        length,
        line: ctx?.start?.line,
        column: ctx?.start?.charPositionInLine,
      };
    }
    this.__position = position || undefined;
  }

  public get position(): Position | undefined {
    return this.__position;
  }

  public toData(): any {
    return toData(this, { position: (p: any) => p });
  }

  public validate(): boolean {
    return true;
  }
}

export class List<T extends AST> extends AST implements TreeList<AST> {
  constructor(public ctx: any, public elements: T[]) {
    super(ctx);
    this.setParentForChildren();
  }

  public setParentForChildren(): void {
    this.elements.forEach((x) => (x.parent = this));
  }

  public get children(): T[] {
    return Object.values(this.elements);
  }

  public map<U>(f: (x: T) => U): U[] {
    return this.elements.map(f);
  }
}
