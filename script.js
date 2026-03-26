const morseCode = {
  A: ".-",    B: "-...",  C: "-.-.",  D: "-..",
  E: ".",     F: "..-.",  G: "--.",   H: "....",
  I: "..",    J: ".---",  K: "-.-",   L: ".-..",
  M: "--",    N: "-.",    O: "---",   P: ".--.",
  Q: "--.-",  R: ".-.",   S: "...",   T: "-",
  U: "..-",   V: "...-",  W: ".--",   X: "-..-",
  Y: "-.--",  Z: "--..",
'.': '.-.-.-',
',': '--..--',
'?': '..--..',
'!': '-.-.--',
':': '---...',
';': '-.-.-.',
"'": '.----.',
'"': '.-..-.',
'(': '-.--.',
')': '-.--.-',
'&': '.-...',
'@': '.--.-.',
'=': '-...-',
'+': '.-.-.',
'-': '-....-',
'_': '..--.-',
'/': '-..-.',
  0: "-----", 1: ".----", 2: "..---", 3: "...--",
  4: "....-", 5: ".....", 6: "-....", 7: "--...",
  8: "---..", 9: "----.",

  " ": "/"   // space
};
let textarea = document.getElementById('input-text')

textarea.addEventListener('input',()=>{
    let final_result=document.getElementById('output')
    let result = ""
    let final_in = textarea.value.toUpperCase()
    for (let value of final_in){
        if (value === " "){
        result +="/ "
        }else{
            result += morseCode[value]+" "
        }
    }
    final_result.textContent=result

})
