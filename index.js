//  ****** To Get the Reference******

// *QuestionField
const setQuestion = document.getElementById('setQuestion')

const optionContainer = document.getElementById('option-container')

// *Option Button
const optionBtn = document.querySelectorAll('.optionBtn')

// Display
const displaArea = document.querySelector('.displayArea')
console.log(displaArea)

const area = document.getElementById('area')
// *NextBtn
const nextBtn = document.getElementById('nextBtn')

// *Now We Set the question
const questionList = [
    {
        question: "Which is Largest Animal in the World ?",
        answer: [
            { text: "Sherk", correct: false },
            { text: "Blue Wheal", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraff", correct: false }
        ]
    }
    ,
    {
        question: "Which is smallest continent in the World ?",
        answer: [
            { text: "Asia", correct: false },
            { text: "Astrallia", correct: false },
            { text: "Arctic", correct: true },
            { text: "Africa", correct: false }
        ]
    },
    {
        question: "Which is the Largest Desert in the World ?",
        answer: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antartica", correct: true }
        ]
    }

]


let score = 0

function addQuestion(optionElement, optionIndex) {

    // optionBtn.forEach((optionElement, optionIndex) => {
    nextBtn.classList.remove("hidden")

    if (questionList[index].answer[optionIndex].correct == true) {
        optionElement.classList.add("bg-green-600")
        score++
    }
    else {
        optionElement.classList.add("bg-red-400")
    }

    // To Find the Right Answer and Disable all the Option
    optionBtn.forEach((opEle, opIndex) => {
        if (questionList[index].answer[opIndex].correct == true) {
            const x = optionBtn[opIndex]
            x.classList.add("bg-green-600")
        }
        optionContainer.classList.add("cursor-not-allowed")
        opEle.style.pointerEvents = "none"
    })
    // })
}


// Remove the Event
function removeQuestion() {
    optionBtn.forEach((optionElement) => {
        optionElement.onclick = null
    })
}
let index = 0

function displayQuestion() {
    const questionSlNum = index + 1;

    // *To Get the question
    const questionName = questionList[index].question

    // *Now We Set the Question
    setQuestion.innerHTML = `${questionSlNum}. ${questionName}`

    optionBtn.forEach((element) => {
        element.classList.remove("bg-green-600")
        element.classList.remove("bg-red-400")
        element.style.pointerEvents = "auto"
        optionContainer.classList.remove("cursor-not-allowed")
    })

    // Remove the Event From the button
    removeQuestion()
    optionBtn.forEach((optionElement, optionIndex) => {
        const answerOption = questionList[index].answer[optionIndex].text
        optionElement.innerHTML = `${answerOption}`

        // Add Click Event in the button
        optionElement.onclick = () => {
            addQuestion(optionElement, optionIndex)
        }
    })


}

// Display the First question initially
displayQuestion()


function nextQuestion() {
    if (index < questionList.length - 1) {
        index++
        displayQuestion()
        nextBtn.classList.add("hidden")
    }
    else {
        setQuestion.innerHTML = " "
        displaArea.classList.add("hidden")
        area.classList.remove('hidden')
        area.innerHTML = `Your Score is ${score} out of ${questionList.length}`
        nextBtn.innerHTML = "Play Again"
        nextBtn.onclick = () => {
            index = 0
            score = 0
            area.innerHTML = ""
            area.classList.add('hidden')
            displaArea.classList.remove("hidden")
            nextBtn.innerHTML = "Next"
            displayQuestion()
            nextBtn.classList.add("hidden")
            nextBtn.onclick = nextQuestion
        }
    }

}


// nextBtn.addEventListener('click', nextQuestion)
nextBtn.onclick = () => {
    nextQuestion()
}

