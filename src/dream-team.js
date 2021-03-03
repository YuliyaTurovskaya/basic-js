const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
let arrayLetter =[];

if (Array.isArray(members) == false){
  return false;
}

for(i=0; i<members.length; i++){
  if(typeof(members[i]) == 'string'){
    arrayLetter.push(members[i].trim()[0].toUpperCase());
  }
}

return arrayLetter.sort().join('');
};
