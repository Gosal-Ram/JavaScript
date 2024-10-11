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






