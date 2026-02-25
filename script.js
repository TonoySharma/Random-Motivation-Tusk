const messages = [
        "Believe in yourself and all that you are.",
        "Success is not final, failure is not fatal.",
        "Keep going your improving!",
        "Small steps every day lead to big results.",
        "Little thinks make big days."
    ];

    const button = document.getElementById("btn");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * messages.length);
        message.textContent = messages[randomIndex];
    });