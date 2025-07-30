// Gửi message đến service worker
chrome.runtime.sendMessage({ type: 'GREET', text: 'Hello from content script' }, (response) => {
  console.log('Service worker replied:', response);
});

// Nghe phản hồi từ service worker (nếu cần gửi về sau)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'FROM_SW') {
    alert('Received from service worker: ' + message.text);
  }
});
