"use strict";

const assert = require("assert");

const test = require("./project.js");

describe("sum to target", function() {

    it("Index of the numbers whose sum is 9 is [0,1]", function() {

        assert.deepStrictEqual(test.addToTarget([2, 7, 11, 15], 9), [0, 1]);

    });

    it("Index of the numbers whose sum is 6 is [0,2]", function() {

        assert.deepStrictEqual(test.addToTarget([2, 3, 4], 6), [0, 2]);

    });



    it("Index of the numbers whose sum is 6 is [0,1]", function() {

        assert.deepStrictEqual(test.addToTarget([3, 3], 6), [0, 1]);

    });

});