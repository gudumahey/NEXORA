const input = document.getElementById("input");
const messages = document.getElementById("messages");

function openChat() {
    document.getElementById("chat").scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {
        input.focus();
    }, 500);
}

function showFeatures() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}

function useSuggestion(text) {
    input.value = text;
    input.focus();
}

function sendMessage() {

    const text = input.value.trim();

    if (text === "") return;

    // User message
    const userMessage = document.createElement("div");

    userMessage.className = "message user";

    userMessage.innerHTML = `
        <div class="bubble">
            <p>${escapeHTML(text)}</p>
        </div>
    `;

    messages.appendChild(userMessage);

    input.value = "";

    // AI typing
    const aiMessage = document.createElement("div");

    aiMessage.className = "message ai";

    aiMessage.innerHTML = `
        <div class="avatar">✦</div>

        <div class="bubble">
            <strong>NEXORA</strong>
            <p class="ai-text">Thinking...</p>
        </div>
    `;

    messages.appendChild(aiMessage);

    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {

        aiMessage.querySelector(".ai-text").textContent =
            "I'm here! 🚀 Real AI connectivity is the next step.";

        messages.scrollTop = messages.scrollHeight;

    }, 1000);
}

input.addEventListener("keydown", function(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();
    }

});

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}
