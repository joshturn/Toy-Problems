// Given two strings as inputs, write a function that tests them to see if they are
// isomorphic. Two strings are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. 
// No two characters may map to the same character but a character may map to itself.

var iso = function(str1, str2) {
	var firstChars = [];
	var secondChars = [];
	var temp = {};
	var count = 1;

	for (var i = 0; i < str1.length; i++){
    if (!temp[str1[i]]){
    	temp[str1[i]] = count;
    	count++;
    }
    firstChars.push(temp[str1[i]]);
	}
  
  temp = {};
  count = 1;

	for (var i = 0; i < str2.length; i++){
    if (!temp[str2[i]]){
    	temp[str2[i]] = count;
    	count++;
    }
    secondChars.push(temp[str2[i]]);
	}

	return firstChars.join() === secondChars.join();
};

// Time complexity: O(n);