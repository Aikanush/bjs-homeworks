'use strict';

function compareArrays( arr1, arr2 ) {
	return arr1.length === arr2.length && arr1.every((element, index) => element == arr2[index]);
}

function memoize(fn, limit) {
	const results = [];

  return function() {
    let newArgs = Array.from(arguments);
    let check = results.find(result => compareArrays(result.args, newArgs));
    if (check) {
      return check.result;
    }

    results.push({ 
      args: newArgs,
      result: fn(...newArgs),
    });

    if (results.length > limit) {
      results.shift();
    }
    return results[results.length - 1].result;
  }
}