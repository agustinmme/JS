function destroyer(arr,...valsToRemove) {
  const result = arguments[0].filter(item =>!valsToRemove.includes(item));
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);