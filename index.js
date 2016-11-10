'use strict';
function generateData(noOfDigits, charSet){
  let code = '';

  for (let i = 0; i < noOfDigits; i++) 
    code += charSet.charAt(Math.floor(Math.random() * charSet.length));

  return code.trim();
}

function generate(noOfDigits) {
  const charSet = '01234567899876543210';

  if (noOfDigits === undefined) 
    noOfDigits = 8;

  if (noOfDigits < 6) 
    noOfDigits = 6;

  return generateData(noOfDigits, charSet);
}

function generateCode(noOfDigits) {
  const charSet = '0123456789ABCDEFGHJKMNPQRSTUVWXYabcdefghjkmnpqrstuvwxy-';

  if (noOfDigits === undefined)
    noOfDigits = 8;

  if (noOfDigits < 6) 
    noOfDigits = 6;

  return generateData(noOfDigits, charSet);
}

module.exports = {
  generate: generate,
  generateCode: generateCode,

  format: (pattern, item) => {
    let result = '';
    let parts = item.split('');

    let idx = 0;
    for (let i = 0; i < pattern.length; i++) {
      let p = pattern[i];

      switch (p) {
        case '#':
          result += parts[idx++];
          break;
      
        default:
          result += p;
          break;
      }
    }
    
    return result;
  }
};