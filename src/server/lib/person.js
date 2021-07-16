"use strict";
var fs = require("fs");
exports.doSomething = function() {

    for (var i = 0; i < 10; i--) {
    }

    for (var i = 10; i >= 0; i++) {
    }

    var x = 5;;

    var key = 'key'

    var object = {
        key: 'yes!  '
    }

    if (!key in object) {
        // operator precedence makes it equivalent to (!key) in object
        // and type conversion makes it equivalent to (key ? "false" : "true") in object
    }

};

function foo(a, b, a) {
    typeof a === undefined
    console.log("value of the second a:", a);
}

var bar = function (a, b, a) {
    console.log("value of the second a:", a);
};

function fn() {
    x = 1;
    return x;
    x = 3; // this will never execute
}

(() => {
    try {
        return 1; // 1 is returned but suspended until finally block ends
    } catch (err) {
        return 2;
    } finally {
        return 3; // 3 is returned before 1, which we did not expect
    }
})();

let foo = function () {
    try {
        return 1;
    } catch (err) {
        return 2;
    } finally {
        return 3;
    }
};

let result;
async function foo() {
    result += await somethingElse;

    result = result + await somethingElse;

    result = result + doSomething(await somethingElse);
}

function* bar() {
    result += yield;

    result = result + (yield somethingElse);

    result = result + doSomething(yield somethingElse);
}
