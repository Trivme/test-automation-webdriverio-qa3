import { assert } from 'chai';
import sel from '../../../selectors/forgot-password';
import exp from '../../../expected/forgot-password';
import help from '../../../helpers/helpers'

describe('Error message', function () {

  it('Vertical Location Check', function () {
    browser.url('/');
    $(sel.forgot).click();
    $(sel.remindPass).click();
    assert.isTrue(help.locationCheck3Elemets(sel.email, sel.errorButton, sel.requiredField));
  });

  it('Background Color', function () {
    let backgroundColor = $(sel.errorButton).getCSSProperty('background-color').parsed.hex;
    assert.equal(backgroundColor, exp.errorButtonBackColor);
  });

  it('Border Color', function () {
    let borderColor = $(sel.errorButton).getCSSProperty('border-color').parsed.hex;
    assert.equal(borderColor, exp.errorButtonBordColor);
  });

  it('Font Family', function () {
    let fontFamily = $(sel.errorButton).getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.errorButtonFontFamily);
  });

  it('Font Size', function () {
    let fontSize = $(sel.errorButton).getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.errorButtonFontSize);
  });

  it('Font Weight', function () {
    let fontWeight = $(sel.errorButton).getCSSProperty('font-weight').value;
    assert.equal(fontWeight, exp.errorButtonFontWeight);
  });

  it('Font Color', function () {
    let fontColor = $(sel.errorButton).getCSSProperty('color').parsed.hex;
    assert.equal(fontColor, exp.errorButtonFontColor);
  });

  it('Text Aline', function () {
    let textAline = $(sel.errorButton).getCSSProperty('text-align').value;
    assert.equal(textAline, exp.errorButtonTextAlign);
  });

});
