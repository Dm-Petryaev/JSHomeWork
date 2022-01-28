const arr = [1, 2, 3];
const acc = 0;

let reduce = function(array, f, value) {
    if ((Array.isArray(array) && typeof f === 'function') &&
        (typeof value === 'number' || typeof value === 'string')) {
            let result = value;
            for (i = 0; i < array.length; i++) {
                result = f.call(null, result, arr[i], i, arr);
            }
        return result;
        } else {
            throw new Error("Incorrect argument of expression");        
    }
}

console.log(reduce(arr, function(acc, value, i, array) {
    return acc + value;
}, acc));