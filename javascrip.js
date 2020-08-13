var questions = [
  {
      question: 'artist of the year',
      answerChoices: ['Billie Ellish', 'Ariana Grande', 'Drake', 'Elton John'],
      correctAnswer: 'Billie Ellish',
  },

  {
     question: 'What is the biggest shark in the world? ',
     answerChoices:['Whale Shark', 'Great White', 'Bullshark'],
     correctAnswer: 'Whale Shark',

  },

]
//this array will keep th
var questionArray = [ questions, questions2, questions3];

var win = 0;
var losses = 0;
 
function buttonStart(){

  //start the timer

};


var mainEl = document.getElementById("main");
var questionEl = document.createElement("div");
var increment = 0;

questionEl.textContent = questions[increment].question;
mainEl.append(questionEl);


for(var i =0; i < questions[increment].answerChoices.length; i++){
 // questionEl.textContent = questions[increment].question;
  //mainEl.append(questionEl);
  
  var answerChoiceEl =document.createElement("div");
  answerChoiceEl.addEventListener('click', function(){
     var answerSelected = this.textContent;
     if(answerSelected === questions[increment].correctAnswer){
        console.log("Congradulations you are Correct!!!!");
       }else{
         console.log("Sorry you are incorrect");
     }
    
     

  });

  answerChoiceEl.textContent = questions[increment].answerChoices[i];
  mainEl.append(answerChoiceEl);

}



function endGame(){
  clearInterval(countdown);
   // display score


}
