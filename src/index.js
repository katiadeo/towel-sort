module.exports = function towelSort (matrix) {
  let result = [];

  if (matrix || arguments.length > 0) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix.indexOf(matrix[i]) % 2 == 0) {
        result.push(matrix[i]);    
      } else {
        result.push(matrix[i].reverse(''));
      }
    }
    return result.flat();
  }
  return [];
}
