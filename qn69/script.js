function isValidParentheses() {
let string= document.getElementById('string').value
let str=[];
for(let i=0;i<string.length;i++){
 	if(string[i]=='{'){
	str.push('}');
			
	}
	else if(string[i]=='['){
	str.push(']');
	
	}
	else if(string[i]=='('){
	str.push(')');
						
	}
	else if(str.pop()!==string[i]){
	return str;
	
	}
console.log(str);
	if(str.length==0){
	document.getElementById('ans').innerHTML='valid';
	}
	else{
	document.getElementById('ans').innerHTML='not valid';
	}
	}
}
   

