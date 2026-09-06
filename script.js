function scrollToChat() {
    document.getElementById("chat").scrollIntoView({
        behavior: "smooth"
    });
}

function showFeatures() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}


function handleKey(event) {

    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }

}


function sendMessage() {

    const input = document.getElementById("userInput");
    const messages = document.getElementById("messages");

    const text = input.value.trim();

    if (!text) return;


    // USER MESSAGE

    const userMessage = document.createElement("div");

    userMessage.className = "message user";

    userMessage.innerHTML = `
        <div class="bubble">
            <p>${escapeHTML(text)}</p>
        </div>
    `;

    messages.appendChild(userMessage);

    input.value = "";

    messages.scrollTop = messages.scrollHeight;


    // TEMPORARY AI RESPONSE

    setTimeout(() => {

        const aiMessage = document.createElement("div");

        aiMessage.className = "message ai";

        aiMessage.innerHTML = `
            <div class="avatar">✦</div>

            <div class="bubble">
                <strong>NEXORA</strong>
                <p>
                    I'm ready to help! Once the AI API is connected,
                    I'll be able to answer your questions properly.
                </p>
            </div>
        `;

        messages.appendChild(aiMessage);

        messages.scrollTop = messages.scrollHeight;

    }, 700);
}


function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}
