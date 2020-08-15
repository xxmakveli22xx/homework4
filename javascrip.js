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

startEl.addEventListener('click', startGame);
  
  
function startGame(){
  console.log("inside the start button");
  startEl.classList.add("hide");
  startQuestions(); 
  

};

function startQuestions(){
   questionEl.textContent.questionArray;
   console.log("inside questions");

};
