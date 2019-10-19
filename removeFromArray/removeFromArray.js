const removeFromArray = function(arr, args) {
    return arr.filter(filterer(arguments)); // Pass arguments
  }
  
  function filterer(args) {
    return function(value) { // Actual filter function
      for (var i = 1; i < args.length; i++) {
        if (value === args[i]) // find
          return false; // remove
      }
      return true; // Otherwise keep
    };
  }

//   or 

//   const removeFromArray = (arr, ...args) => arr.filter(i => !args.includes(i));


module.exports = removeFromArray
