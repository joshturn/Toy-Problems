var password = function(str){
	var longest = 0;
	var temp = 0;

	for (var i = 0; i < str.length; i++){
	debugger;
	  if (str[i] === str[i].toUpperCase() && temp === 0){
	    temp = 1;
	  } else if (str[i] * 1 !== str[i] * 1 && temp !== 0){
	    temp++;
	  } else {
	    if (temp > longest){
	      longest = temp;
	    }
	    temp = 0;
	  }
	}

	if (temp > longest){
	  longest = temp;
	}

	return longest > 0 ? longest : -1;
};