const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },

  addLink(value) {
    (arguments.length == 0) ? this.array.push('( )') : this.array.push('(' + ' ' + String(value) + ' ' + ')');
    return this;
  },

  removeLink(position) {
    if(typeof(position) != 'number'){
      this.array.splice(0, this.getLength());
      throw Error('Error');
    }

   this.array.splice(position-1, 1);
   return this;
  },

  reverseChain() {
    this.array.reverse();
    return this;
  },

  finishChain() {
    let result = this.array.join("~~");
    this.array.splice(0, this.getLength())
    return result;
  }
};

module.exports = chainMaker;
