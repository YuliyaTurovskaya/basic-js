const CustomError = require("../extensions/custom-error");

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
class VigenereCipheringMachine {
  constructor(condition) {
    if (condition === undefined) {
      this.condition = true;
    } else {
      this.condition = condition;
    }
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error('Error');
    }

    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');

    let encryptWord = [];

    if(key.length < message.length){
      for(i=0; key.length < message.length; i++){
        key.push(key[i]);
      }
    }

    for(i=0; i<message.length; i++){
      if(alphabet.indexOf(message[i]) >= 0){
        encryptWord.push(alphabet[(alphabet.indexOf(message[i])+alphabet.indexOf(key[i])) % 26]);
      } else{
        encryptWord.push(message[i]);
        key.splice(i, 0, ' ');
      }
    }

    return this.condition ? encryptWord.join('') : encryptWord.reverse().join('')
  }

  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error('Error');
    }

    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');

    let decryptWord = [];
      if(key.length < message.length){
        for(i=0; key.length < message.length; i++){
          key.push(key[i]);
        }
      }

    for(i=0; i<message.length; i++){

      if(alphabet.indexOf(message[i]) >= 0){
        if((alphabet.indexOf(message[i])-alphabet.indexOf(key[i])) < 0){
          decryptWord.push(alphabet[(alphabet.indexOf(message[i])-alphabet.indexOf(key[i])+26) % 26])
        } else{
          decryptWord.push(alphabet[(alphabet.indexOf(message[i])-alphabet.indexOf(key[i])) % 26]);
        }

      } else{
        decryptWord.push(message[i]);
        key.splice(i, 0, ' ');
      }
    }

    return this.condition ? decryptWord.join('') : decryptWord.reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;