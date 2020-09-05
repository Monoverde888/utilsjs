
/** 
 * This generates a random number with math floor and math random
 * @param {number} min - The minimum number to generate
 * @param {number} max - The maximum number to generate
 */
exports.randomNumber = function (min, max) {
  if (!min) throw new TypeError("You havent put the minimum number to generate!");
  if (!max) throw new TypeError("You havent put the maximum number to generate!");
  return Math.floor(Math.random() * (max - min) + min)
}

/**
 * This reads a file with fs 
 * 
 * 
 * Needs to be used with utils.logFile()
 * @param {string} file - The file to read with fs
 */
exports.readFile = function (file) {
    const fs = require('fs');
    if (!file) throw new TypeError("You havent put the file to read!");
    fs.readFile(file, function read(err, data) {
      if (err) {
        throw err;
      }
        const content = data;
        processFile(content);
      })};
      
      
 /**
  * Is used with utils.readFile()
  * @param {content} content 
  */     
exports.logFile = function processFile(content) {
        console.log(content);
    }