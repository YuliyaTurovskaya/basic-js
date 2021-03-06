const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let array = [];

  if(options.repeatTimes === undefined){
    options.repeatTimes = 1;
  }

  if(options.additionRepeatTimes === undefined){
    options.additionRepeatTimes = 1;
  }

  if(options.separator === undefined){
    options.separator = '+';
  }

  if(options.additionSeparator === undefined){
    options.additionSeparator = '|';
  }

  if(options.addition === undefined){
    options.addition = '';
  }

  for (i=0; i<options.repeatTimes; i++){

    if(options.repeatTimes > 1 || options.repeatTimes === 1){
      array.push(String(str));

      for(j=0; j<options.additionRepeatTimes; j++){
      (options.additionRepeatTimes > 1 && j != options.additionRepeatTimes-1) ?
      array.push(String(options.addition), options.additionSeparator) :
      array.push( String(options.addition));
      }
    }

    if(options.repeatTimes > 1 && i != options.repeatTimes-1){
      array.push(options.separator);
    }
  }

  return array.join('');
};
