//Given two arrays of integers as inputs, return an array 
//containing all the integers from both without duplicates

arrayMerge = function(arr1, arr2){
	var nums = {};
	var mergedArray = [];

	for (var i = 0; i < arr1.length; i++){
		nums[arr1[i]] = true;
	}
	for(var j = 0; j < arr2.length; j++){
		nums[arr2[j]] = true;
	}
	for (var key in nums){
		mergedArray.push(parseInt(key));
	}
	return mergedArray;
};