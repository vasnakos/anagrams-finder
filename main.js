/**
 * Sort a string alphabetically.
 *  @param {String} str: The string to be sorted alhpabetically 
 *  @returns {String} The sorted string
 */
function sortString (str) {
    let tempStr = str.split("");
    tempStr = tempStr.sort();
    str = tempStr.join("");
    return str;
}


/**
 * Find if an array has any anagramed strings
 * 
 * @param {Array} array: The array that we want to search for anagrams
 * @returns {Boolean}: return true or false based on anagrams found
 * 
 */
function hasAnagrams (array) {
    let foundAnagrams = false;     // Boolean to make true if we find any anagrams
    let hashArr = [];              // Hash table that we will use to compare array's items for anagrams
    let i = 0;                     // i will be the iterator inside the for loop
    let len = array.length;        // array's length to be stored

    // We'll use a for loop to iterater through the array, in order to break whenever we find one anagram.
    for (i; i < len; i += 1) {
        let item = array[i];
        let sortedItem = sortString(item);
        if (!hashArr[sortedItem]) {
            hashArr[sortedItem] = item;
        } else {
            foundAnagrams = true;
            break; // Found 
        }
    }
    return foundAnagrams;
}

console.log(hasAnagrams(["abba", "anna", "nana", "dorothy"]));
console.log(hasAnagrams(['cat', 'dog', 'sheep', 'parrot']));

/**
 * Firstly we sort the characters in the string ( O(n log n) ) and then put each string in a hash table ( O(n) ). 
 * If the spot in the hash table is already taken, then that is an anagram. 
 * The order for this solution is ( O(n^2 log n (sorting n strings with n characters each) + n^2 (hashing n strings)
 * + n (n insertions into hash table) = O(n^2 log n) assuming hashing each string is O(n) ).
 */