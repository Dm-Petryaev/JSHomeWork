const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];

let f = function(array) {
    if (Array.isArray(array)) {
        let result = 0;
        for (i of array) {
            if (Array.isArray(i)) {
                result += f(i)
            } else if (typeof i === 'number') {
                result += i;
            } else {
                throw new Error("Incorrect value in array!");
            }
        }
        return result;
    } else {
        throw new Error("Incorrect argument of expression!");
    }
}

console.log(f(arr));