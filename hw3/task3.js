 let every = function(array, func, value) {
    if (Array.isArray(array) && typeof func === 'function') {
        for (i = 0; i < array.length; i++) {
            if (!func.call(value, array[i], i, array)) {
              return false;
            }
          }
        return true;
    } else {
        throw new Error("Incorrect argument of expression!");
    }
};

const arr = [1, 2, 3];
console.log(every(arr, function(x) {
    return x > 0;
}));