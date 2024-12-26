let b1 = document.getElementsByClassName("b")[0];
let b2 = document.getElementsByClassName("b")[1];
let b3 = document.getElementsByClassName("b")[2];
let b4=document.getElementsByClassName("re")[0];
let card = document.getElementsByClassName("card")[0];

let sc=document.getElementsByClassName("score")[0];
// Initialize the scard object with defaults
let scard = {
    wins: 0,
    lost: 0,
    tie: 0,
    score: 0
};

// Try to load from localStorage if available
let obj = JSON.parse(localStorage.getItem('score'));
if (obj && obj.wins !== undefined && obj.lost !== undefined && obj.tie !== undefined && obj.score !== undefined) {
    scard = obj;
}

// Now scard contains all values (wins, lost, tie, score) either from localStorage or defaults
sc.innerHTML = `Your Score is : ${scard.score}`;
card.innerHTML = `
    <p>WINS: ${scard.wins}</p>
    <p>LOST: ${scard.lost}</p>
    <p>TIES: ${scard.tie}</p>
`;



sc.style.color = "red" 
sc.style.fontSize = "42px" 
sc.style.textAlign = "center"

     b1.addEventListener("click", () => {
    let r = Math.floor(1 + 3 * Math.random());
    if(r == 1){
        alert("Computer selected Rock. It's a tie.");
        scard.tie++;
    }
    if(r == 2){
        alert("Computer selected Paper. You lost.");
        scard.lost++;
        scard.score--;

    }
    if(r == 3){
        alert("Computer selected Scissors. You won.");
        scard.score++;
        scard.wins++;
    }
    sc.innerHTML = `Your Score is : ${scard.score}`;
    card.innerHTML=
    

    `
    <p> WINS:${scard.wins}</p>
    
    <p>LOST:${scard.lost}</p>
    <p>TIES:${scard.tie}</p>
    
    `
    
    
    localStorage.setItem('score',JSON.stringify(scard));
});

b2.addEventListener("click", () => {
    let r = Math.floor(1 + 3 * Math.random());
    if(r == 1){
        alert("Computer selected Rock. You won.");
        scard.score++;
        scard.wins++;
    }
    if(r == 2){
        alert("Computer selected Paper. It's a tie.");
        scard.tie++;
    }
    if(r == 3){
        alert("Computer selected Scissors. You lost.");
        scard.lost++;
        scard.score--;
    }
    sc.innerHTML = `Your Score is : ${scard.score}`;
    card.innerHTML=
  
`
<p> WINS:${scard.wins}</p>

<p>LOST:${scard.lost}</p>
<p>TIES:${scard.tie}</p>

`

    localStorage.setItem('score',JSON.stringify(scard));
});

b3.addEventListener("click", () => {
    let r = Math.floor(1 + 3 * Math.random());
    if(r == 1){
        alert("Computer selected Rock. You lost.");
        scard.lost++;
        scard.score--;
    }
    if(r == 2){
        alert("Computer selected Paper. You won.");
        scard.score++;
        scard.wins++;
    }
    if(r == 3){
        alert("Computer selected Scissors. It's a tie.");
        scard.tie++;
    }
    sc.innerHTML = `Your Score is : ${scard.score}`;
    card.innerHTML=
   
`
<p> WINS:${scard.wins}</p>

<p>LOST:${scard.lost}</p>
<p>TIES:${scard.tie}</p>

`

    
    localStorage.setItem('score',JSON.stringify(scard));
});
b4.addEventListener("click", () => {
    // Reset the score data
    scard.score = 0;
    scard.lost = 0;
    scard.wins = 0;
    scard.tie = 0;
    
    // Immediately update the UI
    sc.innerHTML = `Your Score is : ${scard.score}`;
    card.innerHTML = `
        <p> WINS: ${scard.wins}</p>
        <p> LOST: ${scard.lost}</p>
        <p> TIES: ${scard.tie}</p>
    `;
    
    // Update the localStorage to reflect the reset
    localStorage.setItem('score', JSON.stringify(scard));
});
