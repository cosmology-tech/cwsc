import * as AST from '../../ast/nodes';
import * as Rust from '../../rust';
import { snakeToPascal } from '../../util/strings';
import { AST2Rust } from '../ast2rust';
import { CW_STD, C_MSG, C_ERROR } from '../helpers';

export function buildModContract(
  ast2rust: AST2Rust,
  i: AST.InstantiateDefn,
  e: AST.ExecDefn[],
  q: AST.QueryDefn[]
): Rust.Defn.Module {
  let module = new Rust.Defn.Module('contract');
  module.addItem(
    new Rust.Defn.Use(
      [new Rust.Annotation(`cfg(not(feature = "library"))`)],
      'cosmwasm_std::entry_point'
    )
  );
  module.addItem(
    new Rust.Defn.Use(
      [],
      'cosmwasm_std::{to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult}'
    )
  );
  module.addItem(new Rust.Defn.Use([], 'crate::error::ContractError'));

  // build instantiate
  let instantiate = new Rust.Defn.Function(
    [new Rust.Annotation(`cfg_attr(not(feature = "library"), entry_point)`)],
    'instantiate',
    [
      new Rust.FunctionArg([], '__deps', CW_STD.join('DepsMut').toType()),
      new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
      new Rust.FunctionArg([], '__info', CW_STD.join('MessageInfo').toType()),
      new Rust.FunctionArg([], '__msg', C_MSG.join('InstantiateMsg').toType()),
    ],
    new Rust.Type.Result(
      CW_STD.join('Response').toType(),
      C_ERROR.join('ContractError').toType()
    )
  );

  // redirect to our instantiate implementationj
  instantiate.addBody(
    new Rust.Expr.FnCall('instantiate_impl', [
      new Rust.Expr.Path('__deps'),
      new Rust.Expr.Path('__env'),
      new Rust.Expr.Path('__info'),
      ...i.args.map(x => new Rust.Expr.Path(`__msg`).dot(x.name.text)),
    ])
  );

  module.addItem(instantiate);
  module.addItem(ast2rust.translateInstantiateDefn(i));

  // build execute (demux)
  let execute = new Rust.Defn.Function(
    [new Rust.Annotation(`cfg_attr(not(feature = "library"), entry_point)`)],
    'execute',
    [
      new Rust.FunctionArg([], '__deps', CW_STD.join('DepsMut').toType()),
      new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
      new Rust.FunctionArg([], '__info', CW_STD.join('MessageInfo').toType()),
      new Rust.FunctionArg([], '__msg', C_MSG.join('ExecuteMsg').toType()),
    ],
    new Rust.Type.Result(
      CW_STD.join('Response').toType(),
      C_ERROR.join('ContractError').toType()
    )
  );

  let match = new Rust.Expr.Match(new Rust.Expr.Path('__msg'));
  e.forEach(x => {
    let argList = x.args.map(a => a.name.text);
    match.addPattern(
      `crate::msg::ExecuteMsg::${snakeToPascal(x.name!.text)} {${argList.join(
        ','
      )}}`,
      new Rust.Expr.FnCall(`exec_${x.name!.text}`, [
        new Rust.Expr.Path('__deps'),
        new Rust.Expr.Path('__env'),
        new Rust.Expr.Path('__info'),
        ...argList.map(a => new Rust.Expr.Path(a)),
      ])
    );
  });
  execute.addBody(match);
  module.addItem(execute);

  e.forEach(x => {
    module.addItem(ast2rust.translateExecDefn(x));
  });

  let query = new Rust.Defn.Function(
    [new Rust.Annotation(`cfg_attr(not(feature = "library"), entry_point)`)],
    'query',
    [
      new Rust.FunctionArg([], '__deps', CW_STD.join('Deps').toType()),
      new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
      new Rust.FunctionArg([], '__msg', C_MSG.join('QueryMsg').toType()),
    ],
    CW_STD.join('StdResult')
      .toType()
      .withTypeParams([CW_STD.join('Binary').toType()])
  );

  match = new Rust.Expr.Match(new Rust.Expr.Path('__msg'));
  q.forEach(x => {
    let argList = x.args.map(a => a.name.text);
    match.addPattern(
      `crate::msg::QueryMsg::${snakeToPascal(x.name!.text)} {${argList.join(
        ','
      )}}`,
      new Rust.Expr.FnCall(CW_STD.join('to_binary').toRustString(), [
        new Rust.Expr.FnCall(`query_${x.name!.text}`, [
          new Rust.Expr.Path('__deps'),
          new Rust.Expr.Path('__env'),
          ...argList.map(x => new Rust.Expr.Path(x)),
        ])
          .q()
          .ref(),
      ])
    );
  });
  query.addBody(match);
  module.addItem(query);

  q.forEach(x => {
    module.addItem(ast2rust.translateQueryDefn(x));
  });

  return module;
}
