var counter = 59;
setInterval( function(){
    counter= counter-1;
    if (counter>=0){
        id = document.getElementById("count")
        id.innerHTML = counter;
        
    }
    if(counter == 0 ){
         document.querySelector(".popup").style.display = "flex";
document.getElementById("content").innerText = "Times Up"
    }
    else if(document.querySelector(".popup").style.display == "flex"){
      counter = 0
    }
    
},1000)


const question = document.getElementById("question")
const choices = Array.from( document.getElementsByClassName("choice-text"))
console.log(choices)
let currentQuestion = {}
let acceptingAnswers = false;
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question : "The tree sends down roots from its branches to the soil is known as: ",
        choice1 : "Oak",
        choice2 : "Pine",
        choice3 : "Banyan",
        choice4 : "Palm",
        answer : "Banyan"
    },
     {
        question : "Electric bulb filament is made of",
        choice1 : "Copper",
        choice2 : "Aluminium",
        choice3 : "Lead",
        choice4 : "Tungsten",
        answer : "Tungsten"
    },
    {
        question : "Brass gets discoloured in air because of the presence of which of the following gases in air?",
        choice1 : "Oxygen",
        choice2 : "Hydrozen Sulphide",
        choice3 : "Carbon dioxide",
        choice4 : "Nitrozen",
        answer : "Hydrozen Sulphide"
    },
      {
        question : "Which of the following is a non-metal that remains liquid at room temprature? ",

        
        choice1 : "Phosphorous",
        choice2 : "Bromine",
        choice3 : " Chlorine",
        choice4 : " Helium",
        answer : "Bromine"
    },
    {
        question : "Chlorophyll is a naturally occuring chelate compound in which central metal is ",
        choice1 : "Copper",
        choice2 : "Magnesium",
        choice3 : "Iron",
        choice4 : "Calcium",
        answer : "Magnesium"
    }
    
    
];


const CORRECT_ANS = 10
const MAX_QUES = 5
startQuiz = () => {
    questionCounter = 0
    score= 0
    availableQuestions = [...questions]
    console.log(availableQuestions)
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUES){
        document.querySelector(".popup").style.display = "flex";
        document.getElementById("content").innerText="Your Score is " + " " + score;
    }
    questionCounter++
    const Index = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[Index]
    question.innerText = currentQuestion.question;
    document.getElementById("choice1").innerHTML = currentQuestion.choice1;
    document.getElementById("choice2").innerHTML = currentQuestion.choice2;
    document.getElementById("choice3").innerHTML = currentQuestion.choice3;
    document.getElementById("choice4").innerHTML = currentQuestion.choice4;

  availableQuestions.splice(Index, 1);
  
  acceptingAnswers = true;
}
choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.innerText
    console.log(currentQuestion.answer)
      console.log(selectedAnswer)
    if(selectedAnswer == currentQuestion.answer){
        console.log("correct")
        score++;
    }
      else{
          console.log("incorrect")
      }
      getNewQuestion();
  });
});

startQuiz()
  