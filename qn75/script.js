function pallindromeCheck(){
	
let str= document.getElementById('string').value

let str_arr=str.split(" ");
for(let i=0;i<str_arr.length;i++){
	
if (str_arr[i] == str_arr[i].split('').reverse().join(''))
	str_arr[i]=str_arr[i].replace(/[a-zA-Z]/g,"*");



}
for(i=0;i<str_arr.length;i++){

document.getElementById('ans').innerHTML+=str_arr[i]+" "


}
}
