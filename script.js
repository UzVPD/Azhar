// Профориентационный тест
const startTestButton = document.getElementById("startTest");
const questionsContainer = document.getElementById("questionsContainer");
const testResultDiv = document.getElementById("testResult");

startTestButton.addEventListener("click", function () {
    // Список вопросов
    const questions = [
        { question: "Какую из этих профессий вам бы хотелось попробовать?", answers: ["Врач", "Инженер", "Архитектор", "Программист"] },
        { question: "Какие занятия вам наиболее интересны?", answers: ["Математика", "Творчество", "Социальные науки", "Технологии"] },
        { question: "Какую среду работы вы предпочитаете?", answers: ["Командная работа", "Самостоятельная работа", "Работа с людьми", "Работа с данными"] }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    // Показать контейнер с вопросами
    questionsContainer.style.display = "block";
    questionsContainer.innerHTML = ""; // Очистка перед началом теста

    // Функция для отображения вопроса
    function showQuestion(index) {
        const questionData = questions[index];
        const questionHTML = `
            <p>${questionData.question}</p>
            <div>
                ${questionData.answers.map((answer, i) => `<button class="answerButton" data-index="${i}">${answer}</button>`).join("")}
            </div>
        `;
        questionsContainer.innerHTML = questionHTML;

        // Навешиваем события на кнопки ответа
        document.querySelectorAll(".answerButton").forEach((button) => {
            button.addEventListener("click", function () {
                const answerIndex = parseInt(this.getAttribute("data-index"));

                // Пример подсчёта баллов (зависит от логики)
                if (index === 0 && answerIndex === 0) score++; // Вопрос 1: "Врач"
                if (index === 1 && answerIndex === 3) score++; // Вопрос 2: "Технологии"
                if (index === 2 && answerIndex === 2) score++; // Вопрос 3: "Работа с людьми"

                // Переход к следующему вопросу или завершение
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion(currentQuestionIndex);
                } else {
                    finishTest();
                }
            });
        });
    }

    // Отображение первого вопроса
    showQuestion(currentQuestionIndex);

    // Функция завершения теста
    function finishTest() {
        questionsContainer.style.display = "none";
        let resultMessage;
    
        if (score === 3) {
            resultMessage = "Технические профессии (например, инженер, программист, ученый).";
        } else if (score === 2) {
            resultMessage = "Творческие профессии (например, дизайнер, художник, писатель).";
        } else if (score === 1) {
            resultMessage = "Социальные профессии (например, учитель, врач, психолог).";
        } else {
            resultMessage = "Общие профессии (например, менеджер, администратор, продавец).";
        }
    
        testResultDiv.innerHTML = `<p>Ваши рекомендации: ${resultMessage}</p>`;
}
})
