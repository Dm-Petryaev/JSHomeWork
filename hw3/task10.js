const arr = [3, 2, 1];
let reverse = function(array) {
    if (Array.isArray(array)) {
        if (array.length == 0) {
            throw new Error("Передай пустой массив")
        } else {
            let arr = new Array();
            while (array.length > 0) {
                arr.push(array.pop());
            }
            return arr;
        }
    } else {
        throw new Error("Incorrect argument in expression!");
    }
}

console.log(reverse(arr));