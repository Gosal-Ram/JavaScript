function delConsonants(){
	
let str= document.getElementById('string').value
let new_str=""
let vowels="aeiouAEIOU"

for (let char of str) {
        if (vowels.includes(char)) 
            new_str+=char
}
document.getElementById('ans').innerHTML=new_str




}



