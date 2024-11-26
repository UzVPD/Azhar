// Профориентационный тест
const startTestButton = document.getElementById("startTest");
const testResultDiv = document.getElementById("testResult");

startTestButton.addEventListener("click", function() {
    const questions = [
        { question: "Какую из этих профессий вам бы хотелось попробовать?", answers: ["Врач", "Инженер", "Архитектор", "Программист"] },
        { question: "Какие занятия вам наиболее интересны?", answers: ["Математика", "Творчество", "Социальные науки", "Технологии"] },
        { question: "Какую среду работы вы предпочитаете?", answers: ["Командная работа", "Самостоятельная работа", "Работа с людьми", "Работа с данными"] }
    ];

    let score = 0;
    let answers = [];

    questions.forEach((q, index) => {
        let answer = prompt(`${q.question}\n1) ${q.answers[0]}\n2) ${q.answers[1]}\n3) ${q.answers[2]}\n4) ${q.answers[3]}`);
        answers.push(answer);
    });

    if (answers.includes("1")) score += 1; // например, Врач
    if (answers.includes("2")) score += 1; // например, Инженер

    testResultDiv.innerHTML = `<p>Ваши рекомендации: ${score >= 2 ? "Технические профессии" : "Творческие профессии"}</p
