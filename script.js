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






	
	




