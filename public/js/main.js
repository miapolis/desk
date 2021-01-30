const chatForm = document.getElementById('chat-form');
const messageContainer = document.querySelector('.message-content');
let lastMessageSender = '';

// Message submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const bar = e.target.elements.messageSendBar;
    const msg = bar.value;
    if (msg === "") { return; }
    sendMessage(msg);

    bar.value = "";
})

outputMessage = (message) => {
    let lastMessageInView = messageContainer.scrollHeight - messageContainer.scrollTop === messageContainer.clientHeight
    if (message.username !== lastMessageSender) outputRegularMessage(message);
    else outputCompactMessage(message);
    lastMessageSender = message.username;
    if (message.username === clientInfo.username || lastMessageInView) messageContainer.scrollTop = messageContainer.scrollHeight;
};

outputCompactMessage = (message) => {
    const div = document.createElement('div');
    div.classList.add('message-compact');
    div.innerHTML = `<div class="message-markup">
    <span class="left-timestamp">${message.time.toUpperCase()}</span>
    ${message.text}</div>`;
    messageContainer.insertBefore(div, messageContainer.lastElementChild);
}

outputRegularMessage = (message) => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `
    <div class="message-content-area" role="document">
    <svg class="message-profile-icon" height="40px" width="40px">
      <defs>
        <clipPath id = "clip-pfp">
          <circle cx="20" cy="20" r="20" fill="white" ></circle>
        </clipPath>
      </defs>
      <img class="message-pfp-img" src="${profilePicImg(alphabetPosition(message.username.charAt(0)))}"/>
    </svg>
    <h2 class="header-text">
      <span class="header-start">
        <span class="username-text">${message.username}</span>
      </span>
      <span class="timestamp-area">Today at ${message.time.toUpperCase()}</span>
    </h2>
    <div class="message-markup">${message.text}</div>
    </div>`;
    messageContainer.insertBefore(div, messageContainer.lastElementChild);
}