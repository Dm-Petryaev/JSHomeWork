let some = function(array, func, value) {
   if (Array.isArray(array) && typeof value === 'function') {
    for (let i = 0; i < array.length; i++) {
        if (callback.call(value, array[i], i, array)) {
          return true;
        }
      }
      return false;
   } else {
       throw new Error("Incorrect argument of expression!");
   }
};