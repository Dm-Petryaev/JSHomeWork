function arrayFill(val, amnt) {
    if ((typeof amnt === 'number') && 
        (typeof val === 'number' || typeof val == 'object' || 
        typeof val === 'string' || Array.isArray(val))) {
            let arr = new Array();
            for (i = 0; i < amnt; i++) {
                arr[i] = val;
            }
            return arr;
        } else {
            throw new Error("Incorrect argument of expression!");
        }
}

for (i of arrayFill('22', 2)) {
    console.log(i);
}