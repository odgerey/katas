const repeatNumbers = function(data) {
  let repeatedNum = data[0];
  let value = data[1];
  
  let result = [];
  for (let i = 0; i < value; i++) {
    result.push(repeatedNum);
  }
  return result;
};

console.log(repeatNumbers([[1, 10]])); // ======> Expected output: 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // ========> Expected output: 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); //=======> Expected output: 10101010, 343434343434, 9292
