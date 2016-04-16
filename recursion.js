function reduce(arr, fn, initial) {       
      
      //base condition
      if (arr.length === 0) return initial;

      //recursive calls
      var nextArray = arr.slice(1);
      initial = fn(initial, arr[0]);
      return reduce(nextArray, fn, initial);
}
    
    
   
    module.exports = reduce