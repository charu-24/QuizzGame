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
        question : "  First Indian movie submitted for Oscar",
        choice1 : "The Guide",
        choice2 : "Mother India",
        choice3 : "Madhumati",
        choice4 : "Amrapali",
        answer : "Mother India"
    },
     {
        question : " Satyajit Ray win Oscar in the year",
        choice1 : "1992",
        choice2 : "1994",
        choice3 : "1986",
        choice4 : "1990",
        answer : "1992"
    },
    {
        question : "First Indian sound film was",
        choice1 : "Alam Ara",
        choice2 : "Raja Harishchandra",
        choice3 : "Kishan Kanya",
        choice4 : "None of the Above",
        answer : "Alam Ara"
    },
      {
        question : "  Filmfare awards started from the year",

        
        choice1 : "1952",
        choice2 : "1964",
        choice3 : " 1954",
        choice4 : " 1960",
        answer : "1954"
    },
    {
        question : "From which year Indian Government sponsored National Film Award",
        choice1 : "1972",
        choice2 : "1973",
        choice3 : "1984",
        choice4 : "1980",
        answer : "1973"
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
  