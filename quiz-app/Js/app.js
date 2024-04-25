const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let index = 0;
let correct = 0;
let incorrect = 0;
let total = quizData.length;

let QuestionBox = document.querySelector('#questionBox');
let Inputs = document.querySelectorAll("input[type = 'radio']");

const loadQuestion = () => {
    if (index === total) {
        return quizEnd();
    } else {
        reset();
        const data = quizData[index];
        QuestionBox.innerHTML = `${index + 1} ) ${data.question}`;
        Inputs[0].nextElementSibling.innerHTML = data.a;
        Inputs[1].nextElementSibling.innerHTML = data.b;
        Inputs[2].nextElementSibling.innerHTML = data.c;
        Inputs[3].nextElementSibling.innerHTML = data.d;
    }

}

document.querySelector('#submit').addEventListener(
    "click",
    function () {
        const ans = getAnswers();
        const data = quizData[index];
        if (ans == data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion();

    }
)


const getAnswers = () => {
    let ans;
    Inputs.forEach(
        (inputData) => {
            if (inputData.checked) {
                ans = inputData.value;
            }
        }
    )
    return ans;
}


const reset = () => {
    Inputs.forEach(
        (inputData) => {
            inputData.checked = false;
        }
    )
}

const quizEnd = () => {
    document.querySelector('.container').innerHTML = `
        <div class="col">
            <h3>
                 Hi, you've scored ${correct} out of ${total}
            </h3>
        </div>

    `;
}
loadQuestion();