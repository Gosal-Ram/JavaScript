function rightNextLetter(){
	
let str= document.getElementById('string').value
let newString
let testcase1=/[a-zA-Z]/
let temp
for(let i=0;i<str.length;i++){

	if (testcase1.test(str[i])){
 		if(str[i]=="z"||str[i]=="Z")
	      		document.getElementById('ans').innerHTML+="a"
			
	        else
	                document.getElementById('ans').innerHTML+=String.fromCharCode(str[i].charCodeAt()+1)
	}

}

}

