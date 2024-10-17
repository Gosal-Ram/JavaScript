function strAllOccurance(){
	
let str= document.getElementById('string').value

let result={};

for(let char of str){

result[char]=(result[char] || 0 )+1;
}
console.log(result)

let max_char=''
let max_count=0
for(let char in result){
   if(result[char] > max_count ){  
	 max_count=result[char]
	 max_char=char
       }  
}
for(let key in result){
document.getElementById('ans1').innerHTML+=key+" : "+result[key]+" "
}

document.getElementById('ans2').innerHTML="The max occuranced char is "+max_char

}
