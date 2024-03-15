/**
 * Returns a string of all the set values that start with a specific string.
 * @param {Set} set The Set to clean
 * @param {String} startString The string to check for at the beginning of values
 * @returns {String} String containing all values of the set that start with startString,
 * separated by '-'
 */
function cleanSet(set, startString) {
  let result = Array.from(set)
    .filter(value => value.startsWith(startString))
    .map(value => value.substring(startString.length))
    .join('-');
  
  return result;
}

export default cleanSet;
