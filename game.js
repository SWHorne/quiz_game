var quizList = document.getElementById('quiz');
var resultsList = document.getElementById('results');
var scoreList = document.getElementById('score');
var count = 30000;
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounter() {
    countEl.textContent = count;
  }

const questionList = [
    {
    question: "Who's the NBA's all time assist leader?",
    answers: {
        a: 'Michael Jordan',
        b: 'Chris Paul',
        c: 'Magic Johnson',
        d: 'John Stockton'
        },
        correctAns: 'd'
    },

    {
    question: "Kareem Abdul is the NBA's all time leading scorer (34,387). Who's second?",
        answers: {
            a: 'Lebron James',
            b: 'Karl Malone',
            c: 'Michael Jordan',
            d: 'Kobe Bryant'
            },
        correctAns: 'b'
    },

    {
    question: 'Robert Horry won seven NBA titles on three different teams (Rockets, Lakers and Spurs). Only one other player has one championships one three different teams, who is it?',
        answers: {
            a: 'Dennis Rodman',
            b: "Shaquille O'Neal",
            c: 'Robert Parish',
            d: 'John Salley'
            },
        correctAns: 'd'
    }
];

function startQuiz() {
const output = [];
questionList.forEach(
    (questionCount, questionNum) => {
        const answers = [];

        for (letter in questionCount.answers) {
            answers.push( 
                <label>
                    <input type='button' name='question${questionNum}' value='$letter}'>
                        ${letter} :
                        ${questionCount.answers[letter]}
                    </input>
                </label>
            );
        }
        
        output.push( 
            <div class='question'> ${questionCount.question} </div>
            <div class='answers' > ${answers.join('')} </div>
            );
    }
);

quizList.innerHTML = output.join('');
}





function showResults() {
    const answerList = quizList.querySelectorAll('.answers');
    let correctNum = 0;

    questionList.forEach((questionCount, questionNum)=>{
        const answerList = answerList[questionNum]
        const selector = `input[name=question${questionNumber}]:checked`;
        const answerChoice = (answerList.querySelector(selector) || {}).value;

    if(answerChoice === questionCount.correctAns) {
        correctNum++
        function(){
            count++;
            setCounter();
        }
        }
        
        

        }
        
    }
    })

}


startBtn.addEventListener('click', function quiz() {
    startQuiz();
    });

// submitButton.addEventListener('click', showResults);