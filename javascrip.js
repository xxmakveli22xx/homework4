var questions = [
  {
      question: 'Who was the artist of the year in 2019? ',
      answerChoices: ['Billie Ellish', 'Ariana Grande', 'Drake', 'Elton John'],
      correctAnswer: 'Billie Ellish',
  },

  {
     question: 'What is the biggest shark in the world? ',
     answerChoices:['Whale Shark', 'Great White', 'Bullshark'],
     correctAnswer: 'Whale Shark',

  },
  {
    question: "How many gills does a Great White Shark have? ",
    answerChoices:["8", "4", "7", "5"],
    correctAnswer: "5",

  },
    
]
//this array will keep th
//var questionArray = [ questions, questions2, questions3];
var questionArray = Object.values(questions);
var questionKey = Object.keys(questions);

var startEl = document.getElementById("start-btn");
var questionEl = document.getElementById("questions");
var questionConEl = document.getElementById("questions-contanier");

//this will track which question the game is on
var questionTracker = 0;

startEl.addEventListener('click', startGame);
  
  //this function will start the game
function startGame(){
  console.log("inside the start button");
  startEl.classList.add("hide");
  startQuestions(); 
  printAnswers();

};

//this function will print the questions to the screen

function startQuestions(){
   questionConEl.classList.remove("hide");
   questionEl.innerHTML = questions[questionTracker].question;
   append
   console.log("inside questions");

};

function printAnswers(){
console.log("starting the array ");
for(var i =0;i < questionArray.length; i++){
  console.log(questionKey[i]);
  console.log("in the loop");
}
 

 /* for (var i = 0; i < .length; i++) {
    var btn = document.createElement("answer-buttons");
    var t = document.textcontent(listBrand[i]);
    btn.appendChild(t);
    document.body.appendChild(btn);
*/
}
