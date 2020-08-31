const repeatNumbers = function(data) {
  // completed with the following tutorial: https://www.youtube.com/watch?v=S9fMTM4m17s

  let result = "";
  for ( let d = 0; d < data.length; d++) {
    for (let i = 0; i < data[d][1]; i++) {
      result += data[d][0]
    }
    if (d < data.length -1) {
      result += ", "
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]])); // ======> Expected output: 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // ========> Expected output: 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); //=======> Expected output: 10101010, 343434343434, 9292
