// Simple unit tests to check that the generated code.

import { LiteralStructure, ExpressionStructure, IdentifierStructure, BinaryStructure, UnaryStructure, TryStructure, IndexStructure, TupleStructure, StructStructure, CallStructure, MethodCallStructure, IfStructure } from '../../src/codegen/ExpressionStructure';
import { LiteralNode, ExpressionNode, IdentifierNode, MethodCallNode } from '../../src/codegen/ExpressionNode';
import { prepareHandlebar } from '../../src/codegen/Template';

describe('Codegen: simple templating test', () => {
    prepareHandlebar();

    const literalStructure = LiteralStructure('"testliteral"');
    const literalNode = ExpressionNode.from(literalStructure);

    it('should generate a literal expression', () => {
        console.log(literalNode.renderHash());
        expect(literalNode.render()).toEqual('"testliteral"');
    });

    const identifierStructure = IdentifierStructure('testidentifier');
    const identifierNode = ExpressionNode.from(identifierStructure);

    it('should generate an identifier expression', () => {
        console.log(identifierNode.renderHash());
        expect(identifierNode.render()).toEqual('testidentifier');
    });

    const binaryStructure = BinaryStructure(literalStructure, '+', identifierStructure);
    const binaryNode = ExpressionNode.from(binaryStructure);

    it('should generate a binary expression', () => {
        console.log(binaryNode.renderHash());
        expect(binaryNode.render()).toEqual('("testliteral"+testidentifier)');
    });
    
    const unaryStructure = UnaryStructure('-', binaryStructure);
    const unaryNode = ExpressionNode.from(unaryStructure);

    it('should generate a unary expression', () => {
        console.log(unaryNode.renderHash());
        expect(unaryNode.render()).toEqual('-("testliteral"+testidentifier)');
    });

    const tryStructure = TryStructure(unaryStructure);
    const tryNode = ExpressionNode.from(tryStructure);

    it('should generate a try expression', () => {
        console.log(tryNode.renderHash());
        expect(tryNode.render()).toEqual('-("testliteral"+testidentifier)?');
    });

    const indexStructure = IndexStructure(identifierStructure, literalStructure);
    const indexNode = ExpressionNode.from(indexStructure);

    it('should generate an index expression', () => {
        console.log(indexNode.renderHash());
        expect(indexNode.render()).toEqual('testidentifier["testliteral"]');
    });

    const tupleStructure = TupleStructure(tryStructure, indexStructure);
    const tupleNode = ExpressionNode.from(tupleStructure);

    it('should generate a tuple expression', () => {
        console.log(tupleNode.renderHash());
        expect(tupleNode.render()).toEqual('(-("testliteral"+testidentifier)?,testidentifier["testliteral"])');
    });

    const structStructure = StructStructure('TestStruct', 
        ['key1', tupleStructure],
        ['key2', indexStructure],
    );
    const structNode = ExpressionNode.from(structStructure);

    it('should generate a struct expression', () => {
        console.log(structNode.renderHash());
        expect(structNode.render()).toEqual('TestStruct{ key1:(-("testliteral"+testidentifier)?,testidentifier["testliteral"]),key2:testidentifier["testliteral"] }');
    });

    const callStructure = CallStructure(tryStructure, structStructure, tupleStructure)
    const callNode = ExpressionNode.from(callStructure)

    it('should generate a call expression', () => {
        console.log(callNode.renderHash());
        expect(callNode.render()).toEqual('(-("testliteral"+testidentifier)?)(TestStruct{ key1:(-("testliteral"+testidentifier)?,testidentifier["testliteral"]),key2:testidentifier["testliteral"] },(-("testliteral"+testidentifier)?,testidentifier["testliteral"]))');
    });

    const methodCallStructure = MethodCallStructure(tryStructure, "method", structStructure, tupleStructure)
    const methodCallNode = ExpressionNode.from(methodCallStructure)

    it('should generate a method call expression', () => {
        console.log(methodCallNode.renderHash());
        expect(methodCallNode.render()).toEqual('(-("testliteral"+testidentifier)?).method(TestStruct{ key1:(-("testliteral"+testidentifier)?,testidentifier["testliteral"]),key2:testidentifier["testliteral"] },(-("testliteral"+testidentifier)?,testidentifier["testliteral"]))');
    })
})
