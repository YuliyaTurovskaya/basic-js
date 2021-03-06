const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
if(date == undefined || date == null){
  return 'Unable to determine the time of year!';
}

if(!date instanceof Date || !date.getTime()){
  throw new Error('Error');
}

let season = date.getMonth();

if(season<2 || season == 11){
  return 'winter';
} else if(season>1 && season<5){
  return 'spring';
}else if(season>4 && season<8){
  return 'summer';
}else{
  return 'autumn';
}
};
