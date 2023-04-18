#!/usr/bin/env ts-node
import fs from 'fs';
import * as Nodes from './codegen/nodes';
import { AddrType, TypeFields, Uint64Type } from './codegen/typesys';
import { rustify } from './codegen/utils';

Error.stackTraceLimit = Infinity;

const { option } = Nodes;

const GetCountResponse = new Nodes.Struct('GetCountResponse', TypeFields.Map({
  count: Uint64Type,
}), true, ['cw_serde']);

const contract = new Nodes.Contract('test');

contract.states = {
  owner: AddrType,
  counter: Uint64Type,
}

contract.errors = {
  Unauthorized: new Nodes.ErrorNode('Unauthorized', {}),
};

contract.instantiate.push(new Nodes.FnNode({
  kind: 'instantiate',
  name: 'instantiate',
  args: [
    ['counter', Uint64Type],
  ],
  body: [
    new Nodes.CWSWriteStateStmt('owner', new Nodes.CWSIdentifierExpr('ctx.info.sender')),
    new Nodes.CWSWriteStateStmt('counter', new Nodes.CWSIdentifierExpr('msg.counter')),
  ],
}));

contract.executions.increment = new Nodes.FnNode({
  kind: 'execution',
  name: 'increment',
  body: [
    new Nodes.CWSWriteStateStmt(
      'counter',
      new Nodes.CWSBinaryExpr('+',
        new Nodes.CWSReadStateExpr('counter'),
        new Nodes.CWSLiteralExpr('1', Uint64Type),
      ),
    ),
  ],
});

contract.executions.reset = new Nodes.FnNode({
  kind: 'execution',
  name: 'reset',
  args: [['value', option(Uint64Type)]],
  body: [
    new Nodes.CWSIfStmt(
      [
        [
          new Nodes.CWSBinaryExpr('!=', new Nodes.CWSIdentifierExpr('$info.sender'), new Nodes.CWSReadStateExpr('owner')),
          new Nodes.CWSBlock([new Nodes.CWSFailStmt('Unauthorized')]),
        ],
      ],
    ),
    new Nodes.CWSWriteStateStmt('counter', new Nodes.CWSIdentifierExpr('value')),
  ],
})

contract.queries.get_count = new Nodes.FnNode({
  kind: 'query',
  name: 'get_count',
  ret: GetCountResponse,
  body: [
    new Nodes.CWSReturnStmt(
      new Nodes.CWSStructExpr(GetCountResponse, {
        counter: new Nodes.CWSReadStateExpr('counter'),
      }),
    ),
  ],
})

fs.writeFileSync('test.rs', rustify(contract));
