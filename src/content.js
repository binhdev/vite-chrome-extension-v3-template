chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'setCursor') {
        document.body.style.cursor = message.cursorType;
    }
});