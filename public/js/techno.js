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
        question : " In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
        choice1 : "1880s",
        choice2 : "1850s",
        choice3 : "1930s",
        choice4 : "1950s",
        answer : "1880s"
    },
     {
        question : "What is part of a database that holds only one type of information?",
        choice1 : "Report",
        choice2 : "Field",
        choice3 : "Record",
        choice4 : "File",
        answer : "Field"
    },
    {
        question : "'OS' computer abbreviation usually means ?",
        choice1 : "Order of Significance",
        choice2 : "Open Software",
        choice3 : "Operating System",
        choice4 : "Optical Sensor",
        answer : "Operating System"
    },
      {
        question : " In which decade with the first transatlantic radio broadcast occur?",

        
        choice1 : "1850s",
        choice2 : "1860s",
        choice3 : " 1870s",
        choice4 : " 1900s",
        answer : "1900s"
    },
    {
        question : "'.MOV' extension refers usually to what kind of file?",
        choice1 : "Image File",
        choice2 : "Animation File",
        choice3 : "Audio File",
        choice4 : "MS Office document",
        answer : "Animation File"
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
  