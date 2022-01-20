var f = function(x) {
    if (typeof x === "number") {
    console.log(x * x * x)
    }
    else throw new Error("parameter type is not a Number")
}
f(25)
f('s')