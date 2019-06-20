import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/bug-form';
import exp from '../../../expected/bug-form';

describe('Expected result field', function () {

    it('Font Family', function () {
        help.login();
        $(sel.newBug).click();
        let actual = $(sel.expectedResult).getCSSProperty('font-family').value;
        console.log(actual);
        assert.equal(actual, exp.fontFamily);
    });

    it('Font Size', function () {
        let element = $(sel.expectedResult);
        let fontSize = element.getCSSProperty('font-size').value;
        assert.equal(fontSize, exp.fontSize);
    });

    it('Font Weight', function () {
        let actual = $(sel.expectedResult).getCSSProperty('font-weight').value;
        assert.equal(actual, exp.fontWeight);
    });

    it('Font Color', function () {
        let actual = $(sel.expectedResult).getCSSProperty('color').parsed.hex;
        assert.equal(actual, exp.fieldFontColor);
    });

    it('Text align', function () {
        let actual = $(sel.expectedResult).getCSSProperty('text-align').value;
        assert.equal(actual, exp.fieldTextAlign);
    });

});
