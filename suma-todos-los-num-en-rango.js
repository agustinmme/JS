function range(start, end) {
    var foo = [];
    for (var i = start; i <= end; i++) {
        foo.push(i);
    }
    return foo;
};
function sumAll(arr) {
  let numeros = range(Math.min(...arr), Math.max(...arr));
  let total = numeros.reduce((a, b) => a + b, 0);
  return total;
}

sumAll([5, 10]);