var matchingTags = function(str){
	var tags = {'{': 0, '[': 0, '(': 0, '|': 0};
		debugger;

		for (var i = 0; i < str.length; i++){
			if (str[i] === '{' | '[' | '('){
				tags[str[i]]++;
			} 
			if (str[i] === '}' | ']' | ')'){
				if (tags[[str][i]] === 0){
					return false;
				} else {
					tags[[str][i]]--;
				}
			}
			if(str[i] === '|'){
				tags['|']++;
			}
		}
		for (var key in tags){
			if (tags[key] !== 0){
				return false;
			}
		}
		return true;
};