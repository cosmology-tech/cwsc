import { AST, Expr, TypeExpr, Ident, List, Msg } from './';

//TODO: change
export type Stmt = any;

//@Node()
export class LetStmt extends AST {
  constructor(public ctx: any, public lhs: LetLHS, public rhs: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

export type LetLHS = IdentLHS | StructUnpackLHS;

//@Node()
export class IdentLHS extends AST {
  constructor(public ctx: any, public name: Ident, public type?: TypeExpr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class StructUnpackLHS extends AST {
  constructor(public ctx: any, public names: List<Ident>) {
    super(ctx);
    this.setParentForChildren();
  }
}

export type AssignLHS =
  | IdentAssignLHS
  | MemberAssignLHS
  | TableAssignLHS
  | StateItemAssignLHS
  | StateMapAssignLHS;

//@Node()
export class AssignStmt extends AST {
  constructor(
    public ctx: any,
    public lhs: AssignLHS,
    public assignOp: string,
    public rhs: Expr
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class IdentAssignLHS extends AST {
  constructor(public ctx: any, public ident: Ident) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class MemberAssignLHS extends AST {
  constructor(public ctx: any, public obj: Expr, public member: Ident) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class TableAssignLHS extends AST {
  constructor(public ctx: any, public table: Expr, public key: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class InnerPath extends AST {
  constructor(public ctx: any, public name: Ident, public tableKey?: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class StateItemAssignLHS extends AST {
  constructor(
    public ctx: any,
    public key: Ident,
    public inner?: List<InnerPath>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class StateMapAssignLHS extends AST {
  constructor(
    public ctx: any,
    public key: Ident,
    public mapKeys: List<Expr>,
    public inner?: List<InnerPath>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class IfExpr extends AST {
  constructor(
    public ctx: any,
    public ifClause: IfClauseVariant,
    public elseIfClauses: List<IfClauseVariant>,
    public elseClause: List<Stmt>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export type IfClauseVariant = IfClause | IfLetClause;

//@Node()
export class IfClause extends AST {
  constructor(
    public ctx: any,
    public predicate: Expr,
    public body: List<Stmt>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class IfLetClause extends AST {
  constructor(
    public ctx: any,
    public letStmt: LetStmt,
    public body: List<Stmt>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class ForInStmt extends AST {
  constructor(
    public ctx: any,
    public bindings: LetLHS,
    public iterable: Expr,
    public body: List<Stmt>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class ForTimesStmt extends AST {
  constructor(public ctx: any, public expr: Expr, public body: List<Stmt>) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class ExecStmt extends AST {
  constructor(public ctx: any, public expr: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class ExecuteNowStmt extends AST {
  constructor(public ctx: any, public msg: Msg) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class EmitStmt extends AST {
  constructor(public ctx: any, public expr: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class ReturnStmt extends AST {
  constructor(public ctx: any, public expr: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class FailStmt extends AST {
  constructor(public ctx: any, public expr: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}
