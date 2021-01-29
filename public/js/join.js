const errorColor = "#f04747";

joinChatClicked = () => {
    var inputField = document.getElementById('username');
    if (inputField.value === "") {
        document.getElementById('username-label').style.color = errorColor;
        document.getElementById('errorSpan').style.visibility = "visible";
        inputField.style.borderColor = "#f04747";
        inputField.focus();
        return;
    }

    var pathname = window.location.pathname;
    var lastSlashIndex = pathname.lastIndexOf('/');
    var truncatedPath = pathname.substring(0, lastSlashIndex);
    window.location.href = `${truncatedPath}/chat.html`;
}