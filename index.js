const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let container = document.querySelector(".question-container")

function appendQuestion(question) {
  container.innerHTML = question.questionText
}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  return new Promise(function() {
    container.innerHTML = ""
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(btn) {
    btn.classList.toggle("hide")
  })
}

function displayQuestionOnClick() {
  let btn = document.querySelector("a")
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}
