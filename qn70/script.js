function findLargestAndSmallestWord(){
	
let string= document.getElementById('string').value

    let words = string.split(' ');
    let largest = words[0];
    let smallest = words[0];

    for (let word of words) {
        if (word.length > largest.length) {
            largest = word;
        }
        if (word.length < smallest.length) {
            smallest = word;
        }
    }
console.log(largest)
console.log(smallest)
	
document.getElementById('ans1').innerHTML="The largest word is "+largest;
document.getElementById('ans2').innerHTML="The smallest word is "+smallest;
}

