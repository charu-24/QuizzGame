
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
        question : " Which of the following countries has agreed to accept the payment of export of oil and petroleum products to India, in rupee terms instead of dollar or any other currency?",
        choice1 : "Kuwait",
        choice2 : "UAE",
        choice3 : "Iran",
        choice4 : "Iraq",
        answer : "Iran"
    },
     {
        question : "As per the newspaper reports Government of India has finally agreed to purchase advanced MRMRs for its naval forces. What are these MRMRs?  ",
        choice1 : "Aircrafts",
        choice2 : "Warships",
        choice3 : "Submaries",
        choice4 : "Radar Systems",
        answer : "Aircrafts"
    },
    {
        question : "Which of the following agencies/organizations decided to cancel 122 Licenses of 2G Spectrum issued by the Government of India to various companies and asked the Government to do the process afresh?   ",
        choice1 : "Supreme Court of India",
        choice2 : "Telecom Regulatory Authority",
        choice3 : "Reserve bank of India",
        choice4 : "Computer and auditor general of India",
        answer : "Telecom Regulatory Authority"
    },
      {
        question : "Who among the following is the Prime Minister of a country at present and has also won the Presidential Elections held in March 2012? (He had been President of the country twice in the past. This will be his third term as President. He will join office in July 2012)",
        choice1 : "Mohameed Waheed Hassan",
        choice2 : "Abd. Rabbo Mansour Hadi",
        choice3 : "Daniel Ortega",
        choice4 : "Vladimir Puttin",
        answer : "Vladimir Puttin"
    },
    {
        question : "Which of the following countries has signed a 'Non-Aggression Pact' with Sudan?",
        choice1 : "Uganda",
        choice2 : "Kenya",
        choice3 : "Ethiopia",
        choice4 : "South Sudan",
        answer : "South Sudan"
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
  