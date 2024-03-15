console.log(console)
// Function to send message when Enter key is pressed
document.getElementById("chatMessage").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // Check if Enter key is pressed
        event.preventDefault(); // Prevent the default action of submitting a form
        sendMessage(); // Call the sendMessage function
    }
});

// Function to send message when button is clicked
function sendMessage() {
    // Get the input message
    var messageInput = document.getElementById("chatMessage");
    var message = messageInput.value;

    if (message.trim() === "") { // Check if message is empty or contains only whitespace
        return; // Exit the function if message is empty
    }

    // Create a new message element
    var newMessage = document.createElement("div");
    newMessage.innerHTML = '<span>User:</span> ' + message;
    newMessage.className = "sender"; // Assuming all user messages have this class

    // Append the new message to the message container
    var messageContainer = document.querySelector(".message_container");
    messageContainer.appendChild(newMessage);

    // Clear the input field
    messageInput.value = "";
}
