import { Block } from "../../src/codegen/block";
import { Contract, Event } from "../../src/codegen/contract"
import { AssignExpr, BinaryExpr, CallExpr, EndValueExpr, ForExpr, IfExpr, IndexExpr, MethodCallExpr, ReturnExpr, StructExpr, StructPattern, TryExpr, TupleExpr, UnaryExpr } from "../../src/codegen/expression";
import { ExprStatement, LocalBinding } from "../../src/codegen/statement";
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
            new ExprStatement(new ReturnExpr(new BinaryExpr(new EndValueExpr('local1'), '&&', new EndValueExpr('true')))),
        ]
        );

        contract.execute(
        'MyExecute',
        [
            new Field('arg1', 'bool'), 
            new Field('arg2', 'String')
        ], 'bool', [
            new ExprStatement(new IfExpr(
            new EndValueExpr('true'),
            new EndValueExpr('arg1'),
            new EndValueExpr('arg2'),
            ))
        ] 
        );

        contract.query(
        'MyQuery',
        [
            new Field('arg1', 'bool'), 
            new Field('arg2', 'String')
        ], 'bool', [
            new ExprStatement(new ForExpr(
                new StructPattern('MyStruct', 'field1', 'field2'),
                new EndValueExpr('arg1'),
                new Block(
                    new ExprStatement(new UnaryExpr('!', new EndValueExpr('arg2'))),
                    new ExprStatement(new TryExpr(new EndValueExpr('arg2'))),
                    new ExprStatement(new IndexExpr(new EndValueExpr('arg2'), [new EndValueExpr('arg1')])),
                    new ExprStatement(new TupleExpr(new EndValueExpr('arg1'), new EndValueExpr('arg2'))),
                    new ExprStatement(new StructExpr('MyStruct', 
                        new Field('field1', new EndValueExpr('arg1')),
                        new Field('field2', new EndValueExpr('arg2')),
                    )),
                    new ExprStatement(new CallExpr(new EndValueExpr('callee'), new EndValueExpr('arg1'), new EndValueExpr('arg2'))),
                    new ExprStatement(new MethodCallExpr(new EndValueExpr('arg1'), 'callee', new EndValueExpr('arg2'))),
                    new ExprStatement(new AssignExpr(new EndValueExpr('arg1'), '+=', new EndValueExpr('arg2'))),
                )
            ))
        ]
        );

        console.log(contract.render())
    })
})

/*

result:
        pub mod SimpleContract {
      
        pub enum Event {
          TestEvent1,
          TestEvent2,
        }
      
      
        
        pub struct State {
          address: String,
          flag: bool,
          amount: u64,
          custom: MyStruct,
          }
      
      
        pub enum Error {
          TestError1,
          TestError2,
        }
      
      
        #[derive(Debug, Clone)]
        pub struct MyStruct {
          SomeField: String,
          AnotherField: Vec<usize>,
          }
      
        pub fn instantiate(arg1: bool, arg2: String) -> bool {
          let local1: bool = true;
          return (local1 && true)
        }
      
        mod Execute {
          pub fn MyExecute(arg1: bool, arg2: String) -> bool {
            if true arg1 else arg2
          }
        }
      
        mod Query {
          pub fn MyQuery(arg1: bool, arg2: String) -> bool {
            for MyStruct{ field1, field2, .. } in arg1 
              {
                (!arg2);
                (arg2?);
                (arg2[arg1]);
                (arg1, arg2);
                MyStruct{ field1: arg1, field2: arg2 };
                callee();
                arg1 += arg2
              }
      
          }
        }
      }

*/