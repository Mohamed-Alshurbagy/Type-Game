// Collecting Document Data

let one = document.querySelector(".one");

let select = document.getElementById("select");

let details = document.querySelector('.details');

let two = document.querySelector(".two");

let title = document.getElementById('title');

let bicon = document.querySelector('.burger-icon');

let wordToWrite = document.getElementById("word");

let input = document.querySelector("input");

let final = document.querySelector(".final");

let time = document.getElementById("time");

let score = document.getElementById("score");

let gameMood = document.getElementById("game-mood");

let start = document.getElementById("start-btn");

let from = document.getElementById("from");

let msg = document.querySelector('.one h3');

let playAgain = document.querySelector('.two p');

let nav = document.querySelector('nav');

let close = document.querySelector('nav div');

//Reset Past Event To False
input.onpaste = function() {
   return false;
 };

// Define The Main Words Array 
let words = [
    'Hi',
    'We',
    'Now',
    'YouTube',
    'Facebook',
    'Twitter',
    'Messenger',
    'Google',
    'Yahoo',
    'Linkedin',
    'Egypt',
    'Qatar',
    'Algeria',
    'Islam',
    'Download',
    'App',
    'Mac',
    'Hacker',
    'Black Hat',
    'White Hat',
    'Bash',
    'PHP',
    'F Sharp',
    'Where',
    'Hat',
    'C++',
    'Python',
    'Javascript',
    'C Sharp',
    'Operating',
    'System',
    'Admin',
    'Function',
    'Arabic',
    'Chat',
    'USA',
    'Developer',
    'Linux',
    'Windows',
    'Back',
    'Android',
    'KFC',
    'See',
    'So',
    'Romantic',
    'Fight',
    'Tiktok',
    'Red',
    'Black',
    'Will'
];

// Define Game Levels;

let lvl = {
    Easy: 6,
    Normal: 4,
    Hard: 3,
};

// Closeing Navbar On Media < 767px;

close.onclick = function(){
  nav.classList.remove('open')
};

// Coding Start Game Button;

start.onclick = function(){
  if(select.value === 'Game Mood'){
    msg.innerHTML = 'Select Mood First!';
    setInterval(()=> {
      msg.innerHTML = 'Select Game Mood and Click Start Play ..!';
    }, 2000);
  }
  
  else {
    details.remove();
    one.style.display = 'none'
    two.style.display = 'flex'
    input.focus();
    gameMood.innerHTML = select.value;
    from.innerHTML = words.length;
    creatWords();
    title.innerHTML = 'Word To Write: ';
  };
};

// Using The Location Object To Reload The Game While Clicking in Play Again Button;

playAgain.onclick = ()=>location.reload();

// Coding Burger-Icon Button

bicon.onclick = function(){
  nav.style.display = 'block'
  nav.classList.add('open');
};

// Creat Random Word To The End User;

function creatWords (){
  let rnd = words[Math.floor(Math.random() * words.length)];
  wordToWrite.innerHTML = rnd;
  let index = words.indexOf(rnd);
  words.splice(index, 1);
  if(score.innerHTML === from.innerHTML){
    time.innerHTML = "0";
    wordToWrite.innerHTML = '(You Win )';
    title.innerHTML = 'Congratulations ..';
    input.remove()
    playAgain.style.display = 'block'
  }else
  Play();
}

// Function To Start Play;

function Play(){
  time.innerHTML = lvl[select.value];
  let second = setInterval(() => {
    time.innerHTML --;
    if(input.value ===
    wordToWrite.innerHTML){
      score.innerHTML ++;
      input.value = '';
      wordToWrite.innerHTML = '';
      clearInterval(second);
      creatWords();
    }
    else if (time.innerHTML
    === "0" & input.value !== wordToWrite.innerHTML){
      wordToWrite.innerHTML = 'Game Over !';
      input.remove();
      wordToWrite.classList.add('game-over');
      title.innerHTML = 'Sorry !!';
      playAgain.style.display = 'block';
      clearInterval(second);
    };
  }, 1000);
};

// End Of The Code;

// To Contact On Whatsapp 01558656682;

// I Just Learn & I Will Keep Learning
