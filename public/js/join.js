const errorColor = "#f04747";

joinChatClicked = async () => {
    var usernameInput = document.getElementById('username');
    if (usernameInput.value === "") {
        document.getElementById('username-label').style.color = errorColor;
        document.getElementById('errorSpan-username').style.visibility = "visible";
        usernameInput.style.borderColor = "#f04747";
        usernameInput.focus();
        return;
    } 
    else {
        document.getElementById('username-label').style.color = "rgb(162, 163, 165)";
        document.getElementById('errorSpan-username').style.visibility = "hidden";
        usernameInput.style.borderColor = "#7289daff";
        usernameInput.style.outlineWidth=0;
    }

    await sendGuildId(document.getElementById('serverid').value).then(result => {
        if (result == true) {
            setUsername(usernameInput.value);
            sendTo('chat.html');
        } else {
            var serverIdInput = document.getElementById('serverid');
            document.getElementById('serverid-label').style.color = errorColor;
            document.getElementById('errorSpan-serverid').style.visibility = "visible";
            serverIdInput.style.borderColor = "#f04747";
            serverIdInput.focus();
        } 
    });
}