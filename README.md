This project is used to check whether, given an array of strings, any word in the array is an anagram of another string in the array.

### Algorithm
As you may see in the `main.js`, firstly we sort alphabeticaly each string in the array and then put each string in a hash table. 
If the spot in the hash table is already taken, then that is an anagram.


### Time Complexity
Firstly we sort the characters in the string ( O(n log n) ) and then put each string in a hash table ( O(n) ). If the spot in the hash table is already taken, then that is an anagram. 
The order for this solution is ( O(n^2 log n (sorting n strings with n characters each) + n^2 (hashing n strings) + n (n insertions into hash table) = O(n^2 log n) assuming hashing each string is O(n) ).
