let forEach = function(array, func) {
    if (Array.isArray(array) && typeof func === 'function') {
        for (let i = 0; i < array.length; i++) {
            func(array[i]);
        }
    }
    else {
        throw new Error("Incorrent argument of expression");
    }
}

let test = function(x) {
    console.log(x * 10);
}

let arr = [1, 2, 3, 4, 5];

forEach(arr, test);