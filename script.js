const startTestButton = document.getElementById("startTest");
const questionContainer = document.getElementById("questionContainer");
const testResultDiv = document.getElementById("testResult");

startTestButton.addEventListener("click", function() {
    const questions = [
        { question: "Какую из этих профессий вам бы хотелось попробовать?", answers: ["Врач", "Инженер", "Архитектор", "Программист"] },
        { question: "Какие занятия вам наиболее интересны?", answers: ["Математика", "Творчество", "Социальные науки", "Технологии"] },
        { question: "Какую среду работы вы предпочитаете?", answers: ["Командная работа", "Самостоятельная работа", "Работа с людьми", "Работа с данными"] }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function showQuestion(index) {
        const question = questions[index];
        questionContainer.innerHTML = `
            <p>${question.question}</p>
            <button class="answerBtn">${question.answers[0]}</button>
            <button class="answerBtn">${question.answers[1]}</button>
            <button class="answerBtn">${question.answers[2]}</button>
            <button class="answerBtn">${question.answers[3]}</button>
        `;

        const answerButtons = document.querySelectorAll(".answerBtn");
        answerButtons.forEach((button, i) => {
            button.addEventListener("click", () => {
                if (i === 0) score++; // Пример подсчёта баллов, при выборе первого ответа
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion(currentQuestionIndex);
                } else {
                    testResultDiv.innerHTML = `Ваши рекомендации: ${score >= 2 ? "Технические профессии" : "Творческие профессии"}`;
                }
            });
        });
    }

    showQuestion(currentQuestionIndex);
});
