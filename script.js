// script.js
document.addEventListener('DOMContentLoaded', () => {
    const openChatBtn = document.getElementById('openChatBtn');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const chatPopup = document.getElementById('chatPopup');

    openChatBtn.addEventListener('click', () => {
        chatPopup.style.display = 'block';
    });

    closeChatBtn.addEventListener('click', () => {
        chatPopup.style.display = 'none';
    });
});
