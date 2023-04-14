import { AST } from '..';

export function toData(
  x: any,
  dunders?: { [key: string]: (x: any) => any }
): any {
  if (x instanceof Tree) {
    let obj: any = {
      $type: x.constructor.name,
    };
    for (let key in x) {
      if (key.startsWith('__')) {
        let dunder_key = key.substring(2);
        if (dunders && dunders[dunder_key]) {
          obj[`$${dunder_key}`] = dunders[dunder_key]((x as any)[key]);
        }
      } else {
        obj[key] = toData((x as any)[key], dunders);
      }
    }
    return obj;
  } else if (x instanceof Array) {
    return x.map((x) => toData(x, dunders));
  } else {
    return x;
  }
}

export class Tree<T extends Tree<any>> {
  constructor(private __parent?: T) {}

  public get parent(): T | undefined {
    return this.__parent;
  }

  public set parent(p: T | undefined) {
    this.__parent = p;
  }

  public get children(): T[] {
    let { __parent, ...rest } = this;
    return Object.values(rest)
      .filter((x) => x instanceof Tree)
      .map((x) => x as T);
  }

  public *walkAncestors(includeSelf: boolean = false): IterableIterator<T> {
    let parent = this.parent;
    while (parent) {
      yield parent;
      parent = parent.parent;
    }
  }

  public get ancestors(): T[] {
    return Array.from(this.walkAncestors());
  }

  public nearestAncestorWhere(predicate: (x: T) => boolean): T | undefined {
    for (const ancestor of this.walkAncestors()) {
      if (predicate(ancestor)) {
        return ancestor;
      }
    }
    return undefined;
  }

  public nearestAncestorOfType<X extends T>(
    astType: new (...args: any) => X
  ): X | undefined {
    return this.nearestAncestorWhere(
      (x) => x.constructor.name === astType.name
    ) as X | undefined;
  }

  /// Breadth-first traversal of descendant nodes.
  public *walkDescendantsBFS(): IterableIterator<T> {
    yield* this.children;
    for (const child of this.children) {
      yield* child.walkDescendantsBFS();
    }
  }

  /// Depth-first traversal of descendant nodes.
  public *walkDescendants(): IterableIterator<T> {
    for (const child of this.children) {
      yield child;
      yield* child.walkDescendants();
    }
  }

  // Leaves-first traversal of descendant nodes.
  public *walkDescendantsLF(): IterableIterator<T> {
    for (const child of this.children) {
      yield* child.walkDescendantsLF();
    }
    yield* this.children;
  }

  public get descendants(): T[] {
    return Array.from(this.walkDescendants());
  }

  public descendantsOfType<X extends T>(astType: new (...args: any) => X): X[] {
    return this.descendants
      .filter((x) => x.constructor.name === astType.name)
      .map((x) => x as X);
  }

  public setParentForChildren() {
    let { __parent, ...rest } = this;
    Object.values(this.children).forEach((child) => (child.parent = this));
  }

  public toData(): any {
    return toData(this);
  }
}

export interface TreeList<T extends Tree<T>> {
  elements: T[];
}
