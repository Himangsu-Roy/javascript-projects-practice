const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const word = document.querySelector(".input-text");


btn.addEventListener("click", vowelCounter);

function vowelCounter() {
    let countVowel = 0;
    let wordValue = word.value.toLowerCase();
    let vowel = ["a", "e", "i", "o", "u"];

    for(let i =  0; i < wordValue.length; i++) {
        if(vowel.includes(wordValue[i])) {
            countVowel++
        }
    }


    // for(let i = 0; i < wordValue.length; i++) {
    //     if(wordValue[i].match(/([a,e,i,o,u])/)) {
    //         countVowel++
    //     }
    // }
    // alert(wordValue)

    result.innerHTML = `   
    ${word.value} has ${countVowel} vowels
 
 `;
 word.value = ""

}