'use strict';

function compareArrays( arr1, arr2 ) {
	return arr1.length === arr2.length && arr1.every((element, index) => element == arr2[index]);
}

function memoize(fn, limit) {
	const results = [];

  return function() {
    let newArgs = Array.from(arguments);
    let check = results.fined(result => compareArrays(result.args, newArgs));
    if (check) {
      return (result.result);
    }
  }
}
