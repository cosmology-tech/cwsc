import { Contract, Event } from "../../src/codegen/contract"
import { BinaryExpr, EndValueExpr, ReturnExpr } from "../../src/codegen/expression";
import { LocalBinding } from "../../src/codegen/statement";
import { Field, StructTypeDecl } from "../../src/codegen/types";

describe('Codegen: simple test codegen', () => {
    it('should generate some code', () => {
        const contract = new Contract('SimpleContract');

        contract.event(new Event('TestEvent1'));
        contract.event(new Event('TestEvent2'));

        contract.error('TestError1');
        contract.error('TestError2');

        contract.state(
            new Field('address', 'String'),
            new Field('flag', 'bool'),
            new Field('amount', 'u64'),
            new Field('custom', 'MyStruct'),
        );

        const mystruct = new StructTypeDecl(
            'MyStruct',
            ['Debug', 'Clone'],
            new Field('SomeField', 'String'),
            new Field('AnotherField', 'Vec<usize>'),
        );

        contract.struct(mystruct);

        contract.instantiate(
        [
            new Field('arg1', 'bool'), 
            new Field('arg2', 'String')
        ], 'bool', [
            new LocalBinding('local1', 'bool', false, new EndValueExpr('true')),
            new ReturnExpr(new BinaryExpr(new EndValueExpr('local1'), '&&', new EndValueExpr('true'))),
        ]
        );

        contract.execute(
        'MyExecute',
        [
            new Field('arg1', 'bool'), 
            new Field('arg2', 'String')
        ], 'bool', [
            new LocalBinding('local1', 'bool', false, new EndValueExpr('true')),
            new ReturnExpr(new BinaryExpr(new EndValueExpr('local1'), '&&', new EndValueExpr('true'))),
        ] 
        );

        contract.query(
        'MyQuery',
        [
            new Field('arg1', 'bool'), 
            new Field('arg2', 'String')
        ], 'bool', [
            new LocalBinding('local1', 'bool', false, new EndValueExpr('true')),
            new ReturnExpr(new BinaryExpr(new EndValueExpr('local1'), '&&', new EndValueExpr('true'))),
        ]
        );

        console.log(contract.render())
    })
})