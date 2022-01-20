var f = function(...arguments) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++)
        if (typeof arguments[i] === "number") {
            sum += arguments[i]
        }
        else {
            throw new Error("all parameters type should be a Number")
        }
        console.log(sum)
}

f(2, 5, 9)