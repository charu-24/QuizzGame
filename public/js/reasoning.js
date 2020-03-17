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
        question : " Which number should come next in the series, 48, 24, 12, ......?",
        choice1 : "8",
        choice2 : "6",
        choice3 : "4",
        choice4 : "2",
        answer : "6"
    },
     {
        question : "RQP, ONM, _, IHG, FED, find the missing letters.",
        choice1 : "CDE",
        choice2 : "LKI",
        choice3 : "LKJ",
        choice4 : "BAC",
        answer : "LKJ"
    },
    {
        question : "PETAL: FLOWER ",
        choice1 : "Pen: Paper",
        choice2 : "Engine: Car",
        choice3 : "Cat: Dog",
        choice4 : "Ball: Game",
        answer : "Engine: Car"
    },
      {
        question : " I. All the colleges in the city had to keep closed for three days a week II.  Many students have left the local colleges.",

        
        choice1 : "Statement II is the cause and statement I is its effect",
        choice2 : "Statement I is the cause and statement II is its effect",
        choice3 : " Both the statements are effects of independent causes",
        choice4 : " Both the statements are independent causes",
        answer : "Both the statements are effects of independent causes"
    },
    {
        question : "Which word does not belong to others?",
        choice1 : "Inch",
        choice2 : "Kilogram",
        choice3 : "Centimeter",
        choice4 : "Yard",
        answer : "Kilogram"
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
  