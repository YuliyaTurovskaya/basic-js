const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let numberEars = [];

  for(i=0; i<matrix.length; i++){
    for(j=0; j<matrix[i].length; j++){
      if(matrix[i][j] === '^^'){
        numberEars.push(matrix[i][j]);
      }
    }
  }

  return numberEars.length == 0 ? 0 : numberEars.length;
};
