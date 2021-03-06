const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr) != true){
    throw Error('Error');
  }
  let result = [];

  for(i=0; i< arr.length; i++){
    if(arr[i] == '--discard-next'){
      if(i == arr.length-1){
        continue;
      }else{
        i++;
      }

    }else if(arr[i] == '--discard-prev'){
      if(i == 0 || arr[i-2] == '--double-next' || arr[i-2] == '--discard-next'){
        continue;
      }else{
        result.pop();
      }

    }else if(arr[i] == '--double-next'){
      if(i == arr.length-1 || arr[i+2] == '--discard-prev'){
        continue;
      }else{
        result.push(arr[i+1]);
      }

    }else if(arr[i] == '--double-prev'){
      if(i == 0 || arr[i-2] == '--discard-next'){
        continue;
      }else{
        result.push(arr[i-1]);
      }
      
    }else{
      result.push(arr[i]);
    }
  }

return result;
};
