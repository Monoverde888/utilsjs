/** 
 * This generates a random number with math floor and math random
 * @param {number} min - The minimum number to generate
 * @param {number} max - The maximum number to generate
 */
exports.randomNumber = function(min, max) {
    if(!min) throw new TypeError("You havent put the minimum number to generate!");
    if(!max) throw new TypeError("You havent put the maximum number to generate!");
    return Math.floor(Math.random() * (max - min) + min) 
  }
  
/**
 * This generates a random number or letter 
 * Usage: util.randomLetter("ABCDEFGHIJKLMNOPQRSTUVWQYZ")
 * @param {string} letters 
 */
exports.randomLetter = function(letters) {
    var result           = '';
    var characters       = letters;
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
