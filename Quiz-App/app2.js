var questions = [
  {
    question: "1.What does JavaScript primarily do?",
    option1: "Adds styling to web pages",
    option2: "Handles interactivity and logic",
    option3: "Defines the structure of web pages",
    correctAnswer: "Handles interactivity and logic",
  },
  {
    question: "2.Which keyword is used to declare a variable in JavaScript?",
    option1: "var",
    option2: "let",
    option3: "Both var and let",
    correctAnswer: "Both var and let",
  },
  {
    question: "3.Which symbol is used for single-line comments in JavaScript?",
    option1: "//",
    option2: "/* */",
    option3: "<!-- -->",
    correctAnswer: "//",
  },
  {
    question: "4.How do you write 'Hello World' in an alert box?",
    option1: "alertBox('Hello World');",
    option2: "msg('Hello World');",
    option3: "alert('Hello World');",
    correctAnswer: "alert('Hello World');",
  },
  {
    question: "5.What is the correct syntax to declare a function in JavaScript?",
    option1: "function myFunction()",
    option2: "def myFunction()",
    option3: "function = myFunction()",
    correctAnswer: "function myFunction()",
  },
  {
    question: "6.Which operator is used for strict equality in JavaScript?",
    option1: "==",
    option2: "===",
    option3: "=",
    correctAnswer: "===",
  },
  {
    question: "7.How do you call a function named myFunction?",
    option1: "call myFunction();",
    option2: "myFunction();",
    option3: "run myFunction();",
    correctAnswer: "myFunction();",
  },
  {
    question: "8.How do you write a conditional statement in JavaScript?",
    option1: "if x > 5 then",
    option2: "if (x > 5) {}",
    option3: "if x > 5 {}",
    correctAnswer: "if (x > 5) {}",
  },
  {
    question: "9.What is the output of '2' + 2 in JavaScript?",
    option1: "4",
    option2: "'22'",
    option3: "NaN",
    correctAnswer: "'22'",
  },
  {
    question: "10.How can you add an element to the end of an array?",
    option1: "array.add(item);",
    option2: "array.push(item);",
    option3: "array.append(item);",
    correctAnswer: "array.push(item);",
  },
];


function startQuiz2(topic) {
  window.location.href = `javaScript.html?topic=${topic}`;
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
    let percentage = (score / questions.length) * 100; 

    Swal.fire({
      title: `<span style="color: #FFD700; font-size: 2rem; text-shadow: 0 0 10px rgba(255, 223, 0, 0.7);">Quiz Finished!</span>`,
      html: `<p style="color: #1c1c1c; font-size: 1.5rem;">You scored <strong>${score}</strong> out of <strong>${questions.length}</strong> (<strong>${percentage.toFixed(2)}%</strong>)</p>`,
      icon: "success",
      confirmButtonText: `<span style="color: #1c1c1c; font-weight: bold;">Restart Quiz</span>`,
      background: "linear-gradient(135deg, #FFD700, #FFA500)",
      backdrop: `
        rgba(0, 0, 0, 0.8) 
        url("https://media.giphy.com/media/26gshCZpPolPr3sBy/giphy.gif") 
        center center 
        no-repeat
      `,
      confirmButtonColor: "#FFD700",
    }).then(function () {
      window.location.reload();
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



