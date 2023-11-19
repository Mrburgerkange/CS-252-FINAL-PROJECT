// A structure for quiz questions and options
const quizzes = {
    'javascript': [
      {
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Sun Microsystems", "IBM"],
        correct: 0
      },
      // ... add more JavaScript questions here
    ],
    'python': [
      {
        question: "What is the correct syntax to output 'Hello World' in Python?",
        options: ["echo 'Hello World'", "print('Hello World')", "printf('Hello World')", "cout << 'Hello World'"],
        correct: 1
      },
      // ... add more Python questions here
    ],
    'java': [
      {
        question: "Which of these is used to instantiate an object in Java?",
        options: ["class", "new", "struct", "private"],
        correct: 1
      },
      // ... add more Java questions here
    ]
  };
  
  class Quiz {
    constructor(quizType) {
      this.questions = quizzes[quizType];
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.quizType = quizType;
    }
  
    renderQuestion() {
      if (this.currentQuestionIndex < this.questions.length) {
        const question = this.questions[this.currentQuestionIndex];
        let questionContent = `
          <h2>${question.question}</h2>
          <form id="question-form">
        `;
  
        question.options.forEach((option, index) => {
          questionContent += `
            <input type="radio" name="option" value="${index}" id="option${index}">
            <label for="option${index}">${option}</label><br>
          `;
        });
  
        questionContent += `<button onclick="submitAnswer()">Submit</button></form>`;
  
        document.getElementById("content").innerHTML = questionContent;
      } else {
        this.renderResults();
      }
    }
  
    renderResults() {
      const resultsContent = `
        <h2>Your Score: ${this.score}/${this.questions.length}</h2>
        <button onclick="startQuiz('${this.quizType}')">Try Again</button>
      `;
  
      document.getElementById("content").innerHTML = resultsContent;
    }
  }
  
  let currentQuiz;
  
  function startQuiz(quizType) {
    currentQuiz = new Quiz(quizType);
    currentQuiz.renderQuestion();
  }
  
  function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
      if (Number(selectedOption.value) === currentQuiz.questions[currentQuiz.currentQuestionIndex].correct) {
        currentQuiz.score++;
      }
      currentQuiz.currentQuestionIndex++;
      currentQuiz.renderQuestion();
    } else {
      alert("Please select an option.");
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    displayQuizzes();
  });
  
  function displayQuizzes() {
    let quizzesContent = `
      <h2>Select a Quiz</h2>
      <div class="quiz-buttons">
          <button onclick="startQuiz('javascript')">Start JavaScript Quiz</button>
          <button onclick="startQuiz('python')">Start Python Quiz</button>
          <button onclick="startQuiz('java')">Start Java Quiz</button>
      </div>
    `;
  
    document.getElementById("content").innerHTML = quizzesContent;
  }
  