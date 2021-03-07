const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

    let result = 1;

    if(Array.isArray(arr)){
      let currentResult = 0;
      for (let item of arr){
        currentResult =this.calculateDepth(item)+1;

        if(currentResult > result){
          result = currentResult;
        }
      }

    }else{
      return 0;
    }

    return result;
  }
}
