function countVowelsAndConsonants() {
	let string= document.getElementById('string').value
   	 let vowels = 'aeiouAEIOU';
    	let vowel_count = 0;
    	let consonant_count = 0;

    for (let char of string) {
        if (vowels.includes(char)) {
            vowel_count++;
        } else if (char.match(/[a-zA-Z]/)) {
            consonant_count++;
        }
    }
document.getElementById('ans1').innerHTML="Vowels count is "+vowel_count
document.getElementById('ans2').innerHTML="Consonants count is "+consonant_count
}
