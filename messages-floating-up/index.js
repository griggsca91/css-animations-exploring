window.onload = () => {
    var input = document.getElementById("message-input");
    var submitButton = document.getElementById("submit-button");
    var messageContainer = document.getElementById("messages");
    console.log(submitButton);
    submitButton.onclick = function (e) {
        var message = document.createElement("div");
        message.className = "message-container";
        message.innerText = input.value
        messageContainer.appendChild(message);
    }
}
