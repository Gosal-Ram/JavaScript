function missingLetter(){
	
let str= document.getElementById('string').value
let first=str.charCodeAt(0)+1;
let next='';
console.log(str.length)
for(let i=1;i<str.length;i++){
	if(str.charCodeAt(i)!==first){
	next+=String.fromCharCode(first)
	i--
	}
	first++
	console.log(next)

}
document.getElementById('ans').innerHTML+=next




}



