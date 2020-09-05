/** 
 * This generates a random number with math floor and math random
 * @param {number} min - The minimum number to generate
 * @param {number} max - The maximum number to generate
 */
exports.randomNumber = function(min, max) {
    if(!min) throw new TypeError("You havent put the minimum number to generate!")
    if(!max) throw new TypeError("You havent put the maximum number to generate!")
    return Math.floor(Math.random() * (max - min) + min) 
  }
  