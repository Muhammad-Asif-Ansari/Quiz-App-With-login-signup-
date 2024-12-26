var questions = [
    {
      question: "1.What does HTML stand for?",
      option1: "Hyper Text Markup Language",
      option2: "Home Tool Markup Language",
      option3: "Hyperlinks and Text Markup Language",
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question: "2.Which HTML element is used for the largest heading?",
      option1: "<h6>",
      option2: "<h1>",
      option3: "<header>",
      correctAnswer: "<h1>",
    },
    {
      question: "3.What is the correct HTML element for inserting a line break?",
      option1: "<br>",
      option2: "<lb>",
      option3: "<break>",
      correctAnswer: "<br>",
    },
    {
      question:
        "4.Which attribute is used to provide an alternative text for an image?",
      option1: "alt",
      option2: "title",
      option3: "src",
      correctAnswer: "alt",
    },
    {
      question: "5.What is the correct way to make a checkbox in HTML?",
      option1: "<input type='checkbox'>",
      option2: "<checkbox>",
      option3: "<input type='box'>",
      correctAnswer: "<input type='checkbox'>",
    },
    {
      question: "6.Which HTML tag is used to create an unordered list?",
      option1: "<ul>",
      option2: "<ol>",
      option3: "<list>",
      correctAnswer: "<ul>",
    },
    {
      question: "7.What does the <title> element define?",
      option1: "The document's body",
      option2: "The document's title in the browser toolbar",
      option3: "The main heading",
      correctAnswer: "The document's title in the browser toolbar",
    },
    {
      question: "8.Which tag is used to define a hyperlink in HTML?",
      option1: "<link>",
      option2: "<href>",
      option3: "<a>",
      correctAnswer: "<a>",
    },
    {
      question:
        "9.What is the correct syntax for adding a background color in HTML?",
      option1: "<body bg='color'>",
      option2: "<body style='background-color: color;'>",
      option3: "<background color='color'>",
      correctAnswer: "<body style='background-color: color;'>",
    },
    {
      question: "10.How can you make text bold in HTML?",
      option1: "<strong>",
      option2: "<b>",
      option3: "Both <strong> and <b>",
      correctAnswer: "Both <strong> and <b>",
    },
  ];
  
  function startQuiz(topic) {
    window.location.href = `html.html?topic=${topic}`;
  }
  var ques = document.getElementById("question");
  var option1 = document.getElementById("option1");
  var option2 = document.getElementById("option2");
  var option3 = document.getElementById("option3");
  var button = document.getElementById("btn");
  var index = 0;
  var score = 0;
  
  function nextQuestion() {
    var options = document.getElementsByName("answer");
    for (var i = 0; i < options.length; i++) {
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
    var percentage = (score / questions.length) * 100; 
  
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
  
  
  