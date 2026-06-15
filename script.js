const questions = [

{
question:"What does HTML stand for?",
answers:[
{text:"Hyper Text Markup Language",correct:true},
{text:"High Text Machine Language",correct:false},
{text:"Hyper Transfer Markup Language",correct:false},
{text:"Home Tool Markup Language",correct:false}
]
},

{
question:"Which tag creates a hyperlink?",
answers:[
{text:"<link>",correct:false},
{text:"<a>",correct:true},
{text:"<href>",correct:false},
{text:"<url>",correct:false}
]
},

{
question:"Which language is used for styling web pages?",
answers:[
{text:"HTML",correct:false},
{text:"CSS",correct:true},
{text:"Python",correct:false},
{text:"Java",correct:false}
]
},

{
question:"Which language is used for web interactivity?",
answers:[
{text:"JavaScript",correct:true},
{text:"C",correct:false},
{text:"C++",correct:false},
{text:"SQL",correct:false}
]
},

{
question:"Which company developed JavaScript?",
answers:[
{text:"Google",correct:false},
{text:"Apple",correct:false},
{text:"Netscape",correct:true},
{text:"Microsoft",correct:false}
]
},

{
question:"Which CSS property changes text color?",
answers:[
{text:"font-color",correct:false},
{text:"text-color",correct:false},
{text:"color",correct:true},
{text:"background-color",correct:false}
]
},

{
question:"Which HTML tag inserts an image?",
answers:[
{text:"<img>",correct:true},
{text:"<image>",correct:false},
{text:"<picture>",correct:false},
{text:"<src>",correct:false}
]
},

{
question:"Which keyword declares a variable in JavaScript?",
answers:[
{text:"var",correct:true},
{text:"int",correct:false},
{text:"string",correct:false},
{text:"define",correct:false}
]
},

{
question:"Which property rounds corners?",
answers:[
{text:"radius",correct:false},
{text:"corner-radius",correct:false},
{text:"border-radius",correct:true},
{text:"round",correct:false}
]
},

{
question:"Which method prints in console?",
answers:[
{text:"console.log()",correct:true},
{text:"print()",correct:false},
{text:"echo()",correct:false},
{text:"display()",correct:false}
]
}

];

const questionElement =
document.getElementById("question");

const answerButtons =
document.getElementById("answer-buttons");

const nextButton =
document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

startQuiz();

function startQuiz(){

currentQuestionIndex = 0;
score = 0;

showQuestion();
}

function showQuestion(){

resetState();

let currentQuestion =
questions[currentQuestionIndex];

questionElement.textContent =
(currentQuestionIndex + 1) +
". " +
currentQuestion.question;

currentQuestion.answers.forEach(answer=>{

const button =
document.createElement("button");

button.textContent =
answer.text;

button.classList.add("btn");

if(answer.correct){
button.dataset.correct =
answer.correct;
}

button.addEventListener(
"click",
selectAnswer
);

answerButtons.appendChild(button);

});

}

function resetState(){

nextButton.style.display="none";

while(answerButtons.firstChild){
answerButtons.removeChild(
answerButtons.firstChild
);
}

}

function selectAnswer(e){

const selectedBtn =
e.target;

const correct =
selectedBtn.dataset.correct ===
"true";

if(correct){
selectedBtn.classList.add(
"correct"
);
score++;
}
else{
selectedBtn.classList.add(
"wrong"
);
}

Array.from(
answerButtons.children
).forEach(button=>{

if(
button.dataset.correct==="true"
){
button.classList.add(
"correct"
);
}

button.disabled=true;

});

nextButton.style.display="block";

}

nextButton.addEventListener(
"click",
()=>{

currentQuestionIndex++;

if(
currentQuestionIndex <
questions.length
){
showQuestion();
}
else{
showScore();
}

}
);

function showScore(){

document.getElementById(
"quiz-box"
).classList.add("hide");

document.getElementById(
"result-box"
).classList.remove("hide");

document.getElementById(
"score"
).innerHTML =
"You scored " +
score +
" out of " +
questions.length;

}

function restartQuiz(){

document.getElementById(
"quiz-box"
).classList.remove("hide");

document.getElementById(
"result-box"
).classList.add("hide");

startQuiz();

}