
const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const inputField = document.querySelector(".input");
const refreshbtn = document.querySelector(".refresh-word");
const checkbtn = document.querySelector(".check-word");


let correctWord , timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer= setInterval(() =>{
        if(maxTime > 0 ){
        maxTime--;
        return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();

    }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");// spliting words 
    console.log(wordArray);
    for(let i=wordArray.length - 1; i>0;i--){ // shuffling and swaping 
        let j =Math.floor(Math.random()* (i+1));
        [wordArray[i],wordArray[j]] =[wordArray[j],wordArray[i]]
    }
    wordText.innerText = wordArray.join(""); // taking word
    hintText.innerText = randomObj.hint; // hint 
    correctWord = randomObj.word.toLocaleLowerCase();
    inputField.value= "";
    inputField.setAttribute("maxlength", correctWord.length);
    }
 initGame();

 const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();// taking user input
    if(!userWord) return alert("Please enter a valid Word");
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${userWord.toUpperCase()} is a correct word`);
    initGame();

 }
  refreshbtn.addEventListener("click", initGame);
  checkbtn.addEventListener("click", checkWord);