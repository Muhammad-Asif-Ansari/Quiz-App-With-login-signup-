var questions = [
  {
    question: "1.What does CSS stand for?",
    option1: "Cascading Style Sheets",
    option2: "Creative Style Sheets",
    option3: "Colorful Style Sheets",
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "2.Which CSS property is used to change the background color?",
    option1: "color",
    option2: "background-color",
    option3: "bgcolor",
    correctAnswer: "background-color",
  },
  {
    question: "3.What is the correct syntax for applying a font size in CSS?",
    option1: "font-size: 16px;",
    option2: "font: size 16px;",
    option3: "size-font: 16px;",
    correctAnswer: "font-size: 16px;",
  },
  {
    question: "4.Which CSS property controls the text color?",
    option1: "font-color",
    option2: "color",
    option3: "text-color",
    correctAnswer: "color",
  },
  {
    question: "5.How do you add a border to an element in CSS?",
    option1: "border: 1px solid black;",
    option2: "border: black 1px solid;",
    option3: "border: solid 1px black;",
    correctAnswer: "border: 1px solid black;",
  },
  {
    question: "6.Which property is used to change the font of an element?",
    option1: "font-family",
    option2: "font-style",
    option3: "font-type",
    correctAnswer: "font-family",
  },
  {
    question: "7.What is the default value of the position property in CSS?",
    option1: "absolute",
    option2: "fixed",
    option3: "static",
    correctAnswer: "static",
  },
  {
    question: "8.How do you make text italic in CSS?",
    option1: "font-style: italic;",
    option2: "text-italic: true;",
    option3: "style: italic;",
    correctAnswer: "font-style: italic;",
  },
  {
    question: "9.Which property is used to create space between elements?",
    option1: "padding",
    option2: "margin",
    option3: "spacing",
    correctAnswer: "margin",
  },
  {
    question: "10.How do you set the width of an element to 100% of its container?",
    option1: "width: 100%;",
    option2: "max-width: 100%;",
    option3: "size: full;",
    correctAnswer: "width: 100%;",
  },
];

  
function startQuiz1(topic) {
  window.location.href = `css.html?topic=${topic}`;
}

  var ques = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var button = document.getElementById("btn");
var index = 0;
var score = 0;
// ques.innerHTML = questions[index].question;
// option1.innerHTML = questions[index].option1;
// option2.innerHTML = questions[index].option2;
// option3.innerHTML = questions[index].option3;

function nextQuestion() {
  var options = document.getElementsByName("answer");
  //   console.log(options);
  for (var i = 0; i < options.length; i++) {
    // console.log(options[i].checked);
    if (options[i].checked) {
      var selected = options[i].value;
      var userAnswer = questions[index - 1][`option${selected}`];
      var correctAns = questions[index - 1].correctAnswer;
      if (userAnswer === correctAns) {
        score++;
      }
      options[i].checked = false;
    }
  }

  if (index > questions.length - 1) {
    let percentage = (score / questions.length) * 100; // Calculate percentage
  
    // Display the result using SweetAlert with vibrant styling
    Swal.fire({
      title: `<span style="color: #FFD700; font-size: 2rem; text-shadow: 0 0 10px rgba(255, 223, 0, 0.7);">Quiz Finished!</span>`,
      html: `<p style="color: #1c1c1c; font-size: 1.5rem;">You scored <strong>${score}</strong> out of <strong>${questions.length}</strong> (<strong>${percentage.toFixed(2)}%</strong>)</p>`,
      icon: "success",
      confirmButtonText: `<span style="color: #1c1c1c; font-weight: bold;">Restart Quiz</span>`,
      background: "linear-gradient(135deg, #FFD700, #FFA500)", // Gradient background
      backdrop: `
        rgba(0, 0, 0, 0.8) 
        url("https://media.giphy.com/media/26gshCZpPolPr3sBy/giphy.gif") 
        center center 
        no-repeat
      `, // Optional animated backdrop
      confirmButtonColor: "#FFD700", // Button color matching the theme
    }).then(function () {
      window.location.reload(); // Restart the quiz
    });
  }
  
   
  else {
    ques.innerText = questions[index].question;
    option1.innerText = questions[index].option1;
    option2.innerText = questions[index].option2;
    option3.innerText = questions[index].option3;
    index++;
    button.disabled = true;
    min = 0;
    sec = 10;
  }
}

nextQuestion();

function enableBtn() {
  button.disabled = false;
}

var min = 0;
var sec = 10;

var timer = document.getElementById("timer");
var interval = setInterval(function () {
  timer.innerHTML = `${min} : ${sec}`;
  sec--;

  if (sec < 0) {
    if (min < 1) {
      nextQuestion();
      min = 0;
      sec = 10;
    } else {
      min--;
      sec = 10;
    }
  }
}, 1000);