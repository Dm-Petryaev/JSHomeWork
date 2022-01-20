var f = function(a, b, c) {
    var arr = [a, b, c]
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            console.log((a - b) / c)
        }
    else
        throw new Error("all parameters type should be a Number") 
    }
}

console.log(f(9, 3, 2))