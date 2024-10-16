function qn1 (){

document.getElementById('name').innerHTML="Hello World"

}
function qn11 (){

document.getElementById('name').innerHTML="";

}
function sum(num1,num2){

const a=document.getElementById('num1').value
const b=document.getElementById('num2').value
const c=Number(a)+Number(b)

document.getElementById('sum').innerHTML="the sum is "+c

}
function sumOf3(num1,num2,num3){

const a=document.getElementById('num1').value
const b=document.getElementById('num2').value
const c=document.getElementById('num3').value
const d=Number(a)+Number(b)+Number(c)

document.getElementById('sum').innerHTML="the sum is "+d

}
function avg(num1,num2,num3){

const a=document.getElementById('num1').value
const b=document.getElementById('num2').value
const c=document.getElementById('num3').value
const d=(Number(a)+Number(b)+Number(c))/3

document.getElementById('avg').innerHTML="the avg is "+d

}
function simpleInterest(principal,rate,time){

const p=document.getElementById('principal').value
const r=document.getElementById('rate').value
const t=document.getElementById('time').value
const si=(p*r*t)/100

document.getElementById('ans').innerHTML="Simple Interest is "+si

}
function compoundInterest(principal,rate,time){

const p=document.getElementById('principal').value
const r=document.getElementById('rate').value/100
const t=document.getElementById('time').value
const ci=(p*((1+r)**t)-p)

document.getElementById('ans').innerHTML="Compound Interest is "+ci

}

function areaOfCircle(){
const radius=document.getElementById('radius').value
document.getElementById('ans').innerHTML="Area of Circle is "+(3.14*(radius)**2)

}
function operations(){

const a=parseFloat(document.getElementById('number1').value)
const b=parseFloat(document.getElementById('number2').value)

document.getElementById('ans').innerHTML="Addition is "+(a+b) +" Substraction is "+(a-b)+
" Multiplication is "+(a*b) +" Division is "+(a/b)
}


function cube(){

const number=Number(document.getElementById('number').value)

document.getElementById('ans').innerHTML="Cube is "+(number)**3
}


function oddOrEven(){

const number=Number(document.getElementById('number').value)

if (number%2==0){

document.getElementById('ans').innerHTML="Number is Even"
}

else
document.getElementById('ans').innerHTML="Number is Odd"
}


function leapYear(){

	const year=Number(document.getElementById('number').value)
	if((year % 4 == 0) && (year % 100 != 0) ||(year % 400 == 0))
	{
		document.getElementById('ans').innerHTML="Its a leap year"
	}

	else
	document.getElementById('ans').innerHTML="Its not a leap year"
}

function swap(){

	let a=Number(document.getElementById('number1').value)
	let b=Number(document.getElementById('number2').value)
	a=a+b
	b=a-b
	a=a-b
	document.getElementById('ans').innerHTML="First Number is "+a +"  Second Number is "+b

	
}
function sumOfDigits(){

	let n=Number(document.getElementById('number').value)
	let sum = 0;
   	 while (n != 0) {
        sum = sum + n % 10;
        n = parseInt(n / 10);
    	}
	document.getElementById('ans').innerHTML="The Sum of digits is "+sum
}

function reverse(){
	let n=Number(document.getElementById('number').value)
	let reveresed_numb = 0;
   	 while (n != 0) {
        reveresed_numb = reveresed_numb*10 + n % 10;
        n = parseInt(n / 10);
    	}
	document.getElementById('ans').innerHTML="The Reversed number is "+reveresed_numb
}


function smAndLg(){	
	const a=Number(document.getElementById('number1').value)
	const b=Number(document.getElementById('number2').value)
	const c=Number(document.getElementById('number3').value)
	let sm=0
	let lg=0
	lg = (a > b && a > c) ? a : (b > c) ? b : c;
	sm = (a < b && a < c) ? a : (b < c) ? b : c;
	document.getElementById('ans').innerHTML="The smallest is "+sm+" and Largest is "+lg
}


function prime(){
	let n=Number(document.getElementById('number').value)
	let flag=0
	if (n == 0 || n == 1)
    	flag = 1;
	for (let i = 2; i <= n / 2; ++i) {
             if (n % i == 0) {
             	flag = 1;
      	     	break;
    	     }
  	}

  // flag is 0 for prime numbers
  if (flag == 0)
    document.getElementById('ans').innerHTML="Its a prime number"
  else
   document.getElementById('ans').innerHTML="Its not a prime number"
}


function elligbleForCourse(){
const math=Number(document.getElementById('math').value)
const phy=Number(document.getElementById('phy').value)
const chem=Number(document.getElementById('chem').value)
const total=math+phy+chem
const total_pm=math+phy

if((math>=65 && phy>=55 && chem>=50 && total>=190)||total_pm>=140)
  document.getElementById('ans').innerHTML="Congrats you're Eligible"
else
  document.getElementById('ans').innerHTML="You're not eligible,Better luck next time"
}



function week(){
const n=Number(document.getElementById('number').value)
let day;
switch (n) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
  

    document.getElementById('ans').innerHTML="Today is "+day;


}



function printWithOutLoop(n){
        if(n > 0)
        {
            printWithOutLoop(n - 1);
            document.write(n + " ");
        }
        return;
    }    



function printWithLoop(n){
	for(let i=1;i<=n;i++)
	document.write(i+" ")

}

function factors(){
const num = Number(document.getElementById('number').value)
let factors_arr=[]
	 for (let i = 1; i <= num; ++i) {
        if (num % i == 0) {
		factors_arr.push(i)
        }
    }
	document.getElementById('ans').innerHTML="The factors are "+factors_arr
	
}


function factorial(){
const num = Number(document.getElementById('number').value)
let ans=1
	for(let i=2;i<=num;i++){
	ans*=i
	}
document.getElementById('ans').innerHTML="The factorial is "+ans
}


function digitFind(){
let num = document.getElementById('number').value

let lastDigit=parseInt(num%10)

let firstDigit

while(num>=10){
num/=10
}
firstDigit=parseInt(num)
document.getElementById('ans').innerHTML="The First digit is "+ firstDigit
document.getElementById('ans2').innerHTML="The Last digit is "+ lastDigit
}


function table(){
let num = document.getElementById('number').value
	for(let i=1;i<=10;i++){
	document.getElementById('ans').innerHTML+=i+ " * "+num+" = "+(num*i)+"<br>"
}
}

function natural_num(){

let num = document.getElementById('number').value
for(let i=1;i<=num;i++){
document.getElementById('ans').innerHTML+=i+", "

}
}


function natural_num_rev(){

let num = document.getElementById('number').value
for(let i=num;i>=1;i--){
document.getElementById('ans').innerHTML+=i+", "

}
}



function divisibleBy11and5(){

const num = Number(document.getElementById('number').value)
let multiples_arr=[]
	 for (let i = 1; i <= num; ++i) {
        if (i % 5 == 0 && i % 11 ==0) {
		multiples_arr.push(i)
        }
    }
	document.getElementById('ans').innerHTML="The multiples are "+multiples_arr	
}

function odd(){

const num = Number(document.getElementById('number').value)
let odd_arr=[]
	 for (let i = 1; i <= num; ++i) {
        if (i % 2 != 0 ) {
		odd_arr.push(i)
        }
    }
	document.getElementById('ans').innerHTML="The odd numbers are "+odd_arr
	
}


function even(){

const num = Number(document.getElementById('number').value)
let even_arr=[]
	 for (let i = 1; i <= num; ++i) {
        if (i % 2 == 0 ) {
		even_arr.push(i)
        }
    }
	document.getElementById('ans').innerHTML="The even numbers are "+even_arr
	
}

function productOfDigits(){

	let n=Number(document.getElementById('number').value)
	let product = 1;
   	 while (n != 0) {
        product = product * (n % 10);
        n = parseInt(n / 10);
    	}
	document.getElementById('ans').innerHTML="The Product of digits is "+product
}



function pallindrome(){
let n= Number(document.getElementById('number').value)
let temp=n
let reveresed_numb=0;
while (n != 0) {
reveresed_numb = reveresed_numb*10 + n % 10;
n = parseInt(n / 10);
}
document.getElementById('ans').innerHTML="The Reversed number is "+reveresed_numb

if (temp==reveresed_numb)
document.getElementById('ans2').innerHTML="The number is a pallindrome"
else
document.getElementById('ans2').innerHTML="The number is not a pallindrome"


}


function pallindrome_str(){
let string= document.getElementById('string').value
let temp=string
let reveresed_string="";
for(let i=string.length-1;i>=0;i--){
	reveresed_string+=string[i]
}

document.getElementById('ans').innerHTML="The Reversed string is "+reveresed_string

if (temp==reveresed_string)
document.getElementById('ans2').innerHTML="The string is a pallindrome"
else
document.getElementById('ans2').innerHTML="The string is not a pallindrome"


}

function perfect(){
const num = Number(document.getElementById('number').value)
let factors_arr=[]
	 for (let i = 1; i < num; ++i) {
        if (num % i == 0) {
		factors_arr.push(i)
        }
    }

console.log(factors_arr)
console.log(factors_arr.length)


let sum=0
for (let i=0;i<factors_arr.length;i++){
	sum+=factors_arr[i]
}
console.log(sum)

if (sum==num)
document.getElementById('ans').innerHTML="It is a perfect number"
else
document.getElementById('ans').innerHTML="It is not a perfect number"
	
}


function positiveOrNegative(){
const num = Number(document.getElementById('number').value)

if (num>0)
document.getElementById('ans').innerHTML="The number is positive"
else if(num==0)
document.getElementById('ans').innerHTML="The number is zero"
else
document.getElementById('ans').innerHTML="The number is negative"
	
}

function sumOfOddAndEven(){

let num = Number(document.getElementById('number').value)
let sum_even=0
let sum_odd=0
for(let i=0;i<=num;i++){
if(i % 2==0)
sum_even+=i
else
sum_odd+=i

}
document.getElementById('ans').innerHTML="the even sum is "+sum_even
document.getElementById('ans2').innerHTML="the odd sum is "+sum_odd
}

function e_bill(){
let units = Number(document.getElementById('number').value)
let charges
if(units<=200){
	let x,y
	x=units-50
	y=units-100

	if(units<=50){
	charges=units*2.60	
	}

	else if(50<units<=100){
	charges=(x*3.25)+(50*2.60)
	}
	else if(100<units<=200){
	charges=(y*5.60)+(50*3.25)+(50*2.60)
	}
}
else if(200<units){
	let z=units-200
	charges=(z*7.25)+857.5
}
if(700<units)
{
charges+=charges/200;
}
document.getElementById('ans').innerHTML="the Total electricity charges is "+charges
}

function emp_salary(){

let basic_salary = Number(document.getElementById('number').value)
let gross_salary
if(basic_salary<=10000){
gross_salary = basic_salary + 0.08*(basic_salary)+ 0.1*(basic_salary) 
document.getElementById('ans').innerHTML="Gross salary is "+gross_salary
}

else if(basic_salary <= 20000){
gross_salary = basic_salary + 0.16*(basic_salary)+ 0.2*(basic_salary) 

document.getElementById('ans').innerHTML="Gross salary is "+gross_salary
}
else{
gross_salary = (basic_salary) + (0.24*(basic_salary))+ (0.30*(basic_salary)) 

document.getElementById('ans').innerHTML="Gross salary is "+gross_salary
}
}

function countOfDigits(){
let n=Number(document.getElementById('number').value)
	let count = 0;
	while(n!=0){
	count+=1
	n = parseInt(n / 10);
	}
document.getElementById('ans').innerHTML="The Count of digits is "+count

}


function fibonacci(){

let num = document.getElementById('number').value
let first_term , second_term, third_term;
first_term = 0
second_term = 1
third_term = first_term + second_term
document.getElementById('ans1').innerHTML=first_term+", "
document.getElementById('ans2').innerHTML=second_term+", "


for(let i=3;i<=num;++i){
document.getElementById('ans3').innerHTML+=third_term+", "
first_term = second_term
second_term = third_term
third_term = first_term + second_term

}
}

function menu_qn(){
const n1=Number(document.getElementById('number1').value)
const n2=Number(document.getElementById('number2').value)
const menu=Number(document.getElementById('menu').value)

switch (menu) {
  case 1:
    document.getElementById('ans').innerHTML=n1+n2
    break;
  case 2:
    document.getElementById('ans').innerHTML=n1-n2
    break;
  case 3:
    document.getElementById('ans').innerHTML=n1*n2
    break;
  case 4:
    document.getElementById('ans').innerHTML=n1/n2
    break;
  case 5:
    document.write("Code exited");
    break;
}
}


function cone(){

const l=Number(document.getElementById('length').value)
const h=Number(document.getElementById('height').value)
const r=Number(document.getElementById('radius').value)
let pi=22/7
document.getElementById('ans1').innerHTML="Cone Surface Area "+( (pi*r*l) + (pi * (r*r)) )

document.getElementById('ans2').innerHTML=" Volume of a Cone "+( (1/3) * (pi*(r*r)) * h)

document.getElementById('ans3').innerHTML=" Lateral Surface Area of a Cone "+( pi * r * l)

}


function cube(){

const l=Number(document.getElementById('length').value)
document.getElementById('ans1').innerHTML="Surface Area of a Cube "+( 6*l*l )

document.getElementById('ans2').innerHTML=" Cube Volume "+( l*l*l )

document.getElementById('ans3').innerHTML=" The Lateral Surface Area of a Cube "+(4*l*l)

}



function cuboid(){

const l=Number(document.getElementById('length').value)
const h=Number(document.getElementById('height').value)
const w=Number(document.getElementById('width').value)

document.getElementById('ans1').innerHTML="Total Surface Area of a Cuboid "+( (2*l*w) + (2*l*h) + (2*h*w))

document.getElementById('ans2').innerHTML=" Volume of a Cuboid "+(l*w*h)

document.getElementById('ans3').innerHTML="The Lateral Surface Area of a Cuboid "+( 2*h * (l+w))

}


function cylinder(){

const h=Number(document.getElementById('height').value)
const r=Number(document.getElementById('radius').value)
let pi=22/7
document.getElementById('ans1').innerHTML="Surface Area of a Cylinder"+( (2*pi*r*r) + (2*pi*r*h) )

document.getElementById('ans2').innerHTML=" Cylinder Volume "+( pi * r * r * h)

document.getElementById('ans3').innerHTML=" Lateral Surface Area of a Cylinder "+( 2* pi * r * h)

document.getElementById('ans4').innerHTML=" Cylinder Top Or Bottom Surface Area "+( pi * r * r)

}



function sphere(){
let pi=22/7
const r=Number(document.getElementById('radius').value)
document.getElementById('ans1').innerHTML="Sphere Surface Area "+( 4*pi*r*r )

document.getElementById('ans2').innerHTML=" Sphere Volume "+( 4*pi*r*r*r )

}


function concatinate(){
let string_1= document.getElementById('string1').value
let string_2= document.getElementById('string2').value

document.getElementById('ans').innerHTML="The concatinated string is "+string_1 + " " +string_2

}

function ascii(){
let char= document.getElementById('char').value
for (let i=0; i< char.length ; i++){
let ascii_value=char.charCodeAt(i)
document.getElementById('ans').innerHTML+="The ASCII value of character "+ i +" is "+ascii_value+"<br>"
}
}


function byte(){
let string=""
let bytes=[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
for (let i=0; i< bytes.length ; i++){
let temp=bytes[i]
temp=String.fromCharCode(temp)
string+=temp
}
document.getElementById('ans').innerHTML+="The string is "+string
}


function firstChar(){

let string= document.getElementById('string').value

document.getElementById('ans').innerHTML+="The first char is "+string.charAt(0)

}


function lastChar(){

let string= document.getElementById('string').value
let num=string.length-1

document.getElementById('ans').innerHTML+="The last char is "+string.charAt(num)

}



function middleChar(){

let string= document.getElementById('string').value
let num=string.length
let mid=string.length/2
if(num%2 == 0)
document.getElementById('ans').innerHTML+="The string doesnot have a perfect middle character "
else
document.getElementById('ans').innerHTML+="The middle char is "+string.charAt(mid)

}




function stringChar(){

let string= document.getElementById('string').value
for (let i=0; i< string.length ; i++)

document.getElementById('ans').innerHTML+=string[i]+", "

}


function stringWithLen(){
let string= document.getElementById('string').value
let num=string.length
document.getElementById('ans1').innerHTML=num
}


function stringWithoutLen(){
let string= document.getElementById('string').value
let count=0;
for(let i in string){
	count ++;
}
document.getElementById('ans2').innerHTML= count;
}




function stringIndex(){
let string= document.getElementById('string').value

let char= document.getElementById('string2').value
let index
for(let i=0;i<string.length;i++){
if(char==string[i])
index=i
}
document.getElementById('ans').innerHTML= index;

}




function stringOccur(){
let string= document.getElementById('string').value

let gn_char= document.getElementById('string2').value
let result={}
for(let char of string){
if(char==gn_char){
 
    if (char in result)
         result[char]++
    else
         result[char]=1
}
}
if(Object.keys(result).length==0){
         console.log(result);
		document.getElementById('ans').innerHTML= "No occurence";
           }
else{
	for (let key in result){
	          console.log(result);
                  document.getElementById('ans').innerHTML= key+" : "+result[key];	

         
       }


}
}





function isSubstringPrefix(){

let string= document.getElementById('string').value

let substring_temp= document.getElementById('substring').value
console.log(string.substring(0,substring_temp.length))
if(substring_temp==string.substring(0,substring_temp.length)){

document.getElementById('ans').innerHTML="substring is prefix"
}
else

document.getElementById('ans').innerHTML="substring is not prefix"

}




function reverse_case(){

let string= document.getElementById('string').value
let u_case=string.toUpperCase()
let l_case=string.toLowerCase()
let result = "";
if (string==u_case)
result=l_case

else
result=u_case


document.getElementById('ans').innerHTML= "The reversed case is "+result;


}


function substringReplace(){

let string= document.getElementById('string').value
let substring= document.getElementById('substring').value
let substring_new= document.getElementById('substring_new').value
alert(substring_new)
string=string.replace(substring,substring_new);

document.getElementById('ans').innerHTML= string
}


function vowelReplace(){
let string= document.getElementById('string').value
let vowels_string="aeiou"                                        
let vowels_arr=[]
let new_string="";
for(let i=0;i<string.length;i++){
if( vowels_string.includes(string[i]))
vowels_arr.unshift(string[i])

}
for(let i=0;i<string.length;i++){
	if (vowels_string.includes(string[i])){
	      new_string+=vowels_arr[0];
		vowels_arr.shift();

		}
		else{
			new_string+=string[i];
		}
}
document.getElementById('ans').innerHTML= new_string
}


function countAtoZ(){

let string= document.getElementById('string').value

let abc=0,num=0,spChar=0
let pattern_abc=/[a-zA-Z]/
let pattern_num =/[0-9]/;
let pattern_spChar=/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/


for(let i=0;i<string.length;i++){
if(pattern_abc.test(string[i])){

abc++

}
else if(pattern_spChar.test(string[i])){

spChar++

}
else if(pattern_num.test(string[i])){

num++

}
}


document.getElementById('ans1').innerHTML= "Count of alphabets ="+abc

document.getElementById('ans2').innerHTML= "Count of numbers ="+num

document.getElementById('ans3').innerHTML= "Count of special characters ="+spChar
}




















































