const answer = '96'
let input = document.getElementById('q1');
const submit = document.getElementById('submit');
function showResult(){
  let result = document.getElementById('result-container');
  result.className = 'result-show';
  if (input.value === answer) {
   document.getElementById('result-text').innerHTML = 'You are Correct';
  } else {
    document.getElementById('result-text').innerHTML = 'WRONG';
  }
  
};
submit.addEventListener("click", showResult)

function showAnswer(){
  let answer = document.getElementById('answer-container');
  answer.className = 'answer-show'
}
let showButton = document.getElementById('answer');
showButton.addEventListener('click', showAnswer)