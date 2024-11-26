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
                if (index === 0) {
                    if (answerIndex === 0) score += 2; // Врач
                    if (answerIndex === 1) score += 3; // Инженер
                    if (answerIndex === 2) score += 1; // Архитектор
                    if (answerIndex === 3) score += 4; // Программист
                }
                if (index === 1) {
                    if (answerIndex === 0) score += 3; // Математика
                    if (answerIndex === 1) score += 2; // Творчество
                    if (answerIndex === 2) score += 1; // Социальные науки
                    if (answerIndex === 3) score += 4; // Технологии
                }
                if (index === 2) {
                    if (answerIndex === 0) score += 1; // Командная работа
                    if (answerIndex === 1) score += 2; // Самостоятельная работа
                    if (answerIndex === 2) score += 3; // Работа с людьми
                    if (answerIndex === 3) score += 4; // Работа с данными
                }

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
    
        if (score >= 9) {
            resultMessage = "Технические профессии (например, инженер, программист, ученый).";
        } else if (score >= 6) {
            resultMessage = "Творческие профессии (например, дизайнер, художник, писатель).";
        } else if (score >= 3) {
            resultMessage = "Социальные профессии (например, учитель, врач, психолог).";
        } else {
            resultMessage = "Общие профессии (например, менеджер, администратор, продавец).";
        }
    
        testResultDiv.innerHTML = `<p>Ваши рекомендации: ${resultMessage}</p>`;
}
})
