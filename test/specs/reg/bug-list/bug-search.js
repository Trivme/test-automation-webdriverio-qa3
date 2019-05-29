import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/bug-list';
import exp from '../../../expected/bug-list';
import loginData from "../../../data/login";

describe('bug search', function () {

    describe('layout', function () {

        it('search font size', function () {
            help.login();
            let fontsize = $(sel.searchField).getCSSProperty('font-size').value;
            assert.equal(fontsize, exp.fontSizeXL);
        });

        it('placeholder text', function () {
            let plhldr_text = $(sel.searchField).getAttribute('placeholder');
            assert.equal(plhldr_text, exp.placeholder_text);
        });

        it('font color', function () {
            let fontsize = $(sel.searchField).getCSSProperty('color').parsed.hex;
            assert.equal(fontsize, exp.placeholder_color);
        });

        it('font family', function () {
            let fontfamily = $(sel.searchField).getCSSProperty('font-family').value;
            assert.equal(fontfamily, exp.fontFamily);
        });

        it('text align', function () {
            let textAling = $(sel.searchField).getCSSProperty('text-align').value;
            assert.equal(textAling, exp.textAlign);
        });

        it('font Weight', function () {
            let fontWeight = $(sel.searchField).getCSSProperty('font-weight').value;
            assert.equal(fontWeight, exp.fontWeight);
        });

    });

    describe('search functionality', function () {

        it('correct search result', function () {
            help.login();
            let rowsArr = $$(sel.allColumnRows);
            let arr = [];

            for ( let el of rowsArr ){
                arr.push( el.getAttribute('title') );
            }
            let arrLength = arr.length-2;

            let checkStr = arr[help.randomInteger(0,arrLength)];
            let foo = $(sel.searchField);
            foo.setValue(checkStr);

            let searchResult = $$(sel.allColumnRows);

            let flag = true;
            for(let el of searchResult){
                if( !el.getAttribute('title').includes(checkStr) ){
                    flag = false;
                    break;
                }
            }
            assert.isTrue(flag);
        });

        it('correct search result when search field is empty', function () {
            $(sel.newBugBtn).click();
            $(sel.allIssuesBtn).click();
            let allSearchResultLength = $$(sel.allColumnRows).length;
            let foo = $(sel.searchField);
            foo.setValue('test');

            let SearchResultLength = $$(sel.allColumnRows).length;

            if(allSearchResultLength !== SearchResultLength){
                $(sel.newBugBtn).click();
                $(sel.allIssuesBtn).click();
                let newResult = $$(sel.allColumnRows).length;
                assert.equal(allSearchResultLength, newResult);
            }
            else assert.equal(false);
        });

        it('filtering works when user adds/removes single letter', function () {
            let allSearchResultLength = $$(sel.allColumnRows).length;

            let flagA = true, flagB = true, flagC = true, flagD = true;

            if(allSearchResultLength > 1) {
                let foo = $(sel.searchField);

                foo.setValue("t");
                let SearchResultLength = $$(sel.allColumnRows).length;

                foo.addValue("e");
                let newSearchResultLength = $$(sel.allColumnRows).length;

                foo.addValue("%!@#");
                let wrongSearchResult = $$(sel.allColumnRows).length;

                foo.setValue("te");
                let returnSearch = $$(sel.allColumnRows).length;

                if (allSearchResultLength < SearchResultLength) flagA = false;
                if (SearchResultLength < newSearchResultLength) flagB = false;
                if (wrongSearchResult !== 0) flagC = false;
                if (returnSearch !== newSearchResultLength) flagD = false;
            }
            assert.isTrue(flagA && flagB && flagC && flagD);

        });

    });

});
