const chatForm = document.getElementById('chat-form');
const messageContainer = document.querySelector('.message-content');

const socket = io();

socket.on('message', message => {
    outputMessage(message);
    messageContainer.scrollTop = messageContainer.scrollHeight;
});

// Message submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const bar = e.target.elements.messageSendBar;
    const msg = bar.value;
    if (msg === "") { return; }
    socket.emit('chatMessage', msg);

    messageContainer.scrollTop = messageContainer.scrollHeight;
    bar.value = "";
})

outputMessage = (message) => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `
    <div class="message-content-area" role="document">
    <svg class="message-profile-icon" height="40px" width="40px">
      <circle cx="20" cy="20" r="20" fill="white"></circle>
    </svg>
    <h2 class="header-text">
      <span class="header-start">
        <span class="username-text">Ethan</span>
      </span>
      <span class="timestamp-area">Today at 11:38 AM</span>
    </h2>
    <div class="message-markup">${message}</div>
    </div>`;
    messageContainer.insertBefore(div, messageContainer.lastElementChild);
};