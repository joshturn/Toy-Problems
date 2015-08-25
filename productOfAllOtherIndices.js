//Given an array of integers, return an array containing the product of the integers at all
//indices except the current one.
//
//Ex. [1,2,3,4,] ---> [24, 12, 8, 6]
//
//Time Complexity: O(n)

var productOfAllOtherIndices = function(arr){
  var result = [];
  var currentProduct = arr[0];

  for (var i = 0; i < arr.length; i++){
  	result.push(currentProduct);
  	currentProduct *= arr[i + 1];
  }
  
  currentProduct = arr[arr.length-1];

  for (var j = arr.length-1; j >= 0; j--){
    result[j] = result[j] * currentProduct;
    currentProduct *= arr[j - 1];
  }

  return result;

};