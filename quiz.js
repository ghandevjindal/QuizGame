const quesJSON = [
  {
    category: 'Geography',
    id: 'qa-1',
    correctAnswer: 'New Delhi',
    options: ['New Delhi', 'Mumbai', 'Bengaluru', 'Hydrabad'],
    question:
      "What is the capital of India?",
},
{
  category: 'Politics',
  id: 'qa-2',
  correctAnswer: 'Modi',
  options: ['Modi', 'Rahul', 'Kejriwal', 'Yogi'],
  question:
    "Who is Prime Minister of Inida?",
},
{
  category: 'Cricket',
  id: 'qa-3',
  correctAnswer: '0',
  options: ['0', '1', '2', '3'],
  question:
    "How many times RCB won IPL?",
},
{
  category: 'Geography',
  id: 'qa-4',
  correctAnswer: 'Chandigarh',
  options: ['Rohtak', 'Gurgaon', 'Hisar', 'Chandigarh'],
  question:
    "What is the capital of Haryana",
},
{
  category: 'Cricket',
  id: 'qa-5',
  correctAnswer: 'India',
  options: ['Australia', 'South Africs', 'India', 'Afganistan'],
  question:
    "Who won mens T20 cricket WC in 2024?",
}
]

let score = 0;
let currentQuestion = 0;
const totalscore = quesJSON.length; 

const questionEl = document.getElementById('question');
const optionEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const nextEl = document.getElementById('next');

showQuestion();
nextEl.addEventListener('click', ()=>{
  scoreEl.textContent = `Score: ${score} / ${totalscore}`
  nextQuestion();
});

function showQuestion(){
  const {correctAnswer, options, question} = quesJSON[currentQuestion];

  questionEl.textContent = question;

  const shuffledOptions = shuffleOptions(options);

  shuffledOptions.forEach((opt) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    optionEl.appendChild(btn);
  
    btn.addEventListener('click', () => {
      if(opt == correctAnswer) {
        score++;
      }
      else {
        score = score - 0.25;
      }
      scoreEl.textContent =  `Score: ${score} / ${totalscore}`;
      nextQuestion();
    });
  });
}

function nextQuestion(){
  currentQuestion++;
  optionEl.textContent = '';
  if(currentQuestion >= quesJSON.length){
    questionEl.textContent = 'Quiz Completed!!';
    optionEl.textContent = '';
    nextEl.remove();
  }
  else{
    showQuestion();
  }
}

function shuffleOptions(options){
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
    }
  return options;
}
