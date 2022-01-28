let filter = function(array, func, value) {
    if (Array.isArray(array) && typeof func === 'function') {
        result = [];
        for (let i = 0; i < array.length; i++) {
            if (func.call(value, array[i], i, array)) {
                result.push(array[i]);
            }
        }
    return result;
    } else {
        throw new Error("Incorrect argument of expression!");
    }
};

const arr = [1, 2, 3];
console.log(filter(arr, function(x) {
    return x > 2;
}));