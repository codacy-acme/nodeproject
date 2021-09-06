function foo1(a, b, c) {
    typeof a === undefined
    console.log("value of the second a:", a);
}

var bar = function (a, b, c) {
    console.log("value of the second a:", a);
};

var car = function (a, b, c) {
    console.log("value of the second c:", c);
};
