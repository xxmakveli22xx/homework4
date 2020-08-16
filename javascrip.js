var questions = [
  {
      question: 'How long have sharks been alive? ',
      answerChoices: ['30 years', '100 years', '500 years', 'Since Before Dinosaurs'],
      correctAnswer: 'Since Before Dinosaurs',
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


var startEl = document.getElementById("start-btn");
var mainEl = document.getElementById("main");
var questEl = document.createElement("h1");
var questionConEl = document.getElementById("questions");




//this will track which question the game is on
var questionTracker = 0;

startEl.addEventListener('click', startGame);
  
  //this function will start the game
function startGame(){
  
  startEl.classList.add("hide");
 // startQuestions(); 
  printAnswers();

};
  
//this function will print the questions to the screen

function startQuestions(){

   console.log("inside questions");

};

function printAnswers(){
  questionConEl.classList.remove("hide");
  questionConEl.innerText= questions[questionTracker].question;
  questEl.append(questionConEl);

  for(var i =0; i < questions[questionTracker].answerChoices.length; i++){
    var choiceEl =document.createElement("button");
    choiceEl.classList.add('btn')
   
    console.log("in the loop");
    choiceEl.addEventListener('click', function(){
    var answerSelected = this.textContent;
       
    if(answerSelected === questions[questionTracker].correctAnswer){
          console.log("Congradulations you are Correct!!!!");
           questionTracker++;
         }else{
           console.log("Sorry you are incorrect");
       }
      
      
    });
    

    choiceEl.textContent = questions[questionTracker].answerChoices[i];
    questEl.append(choiceEl);
  
  }
  






 

}

