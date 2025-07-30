// Nghe message từ content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GREET') {
    console.log('Received from content script:', message.text);

    // Phản hồi ngay lập tức
    sendResponse({ text: 'Hello from service worker!' });

    // Gửi thêm một message khác (tùy ý, không bắt buộc)
    chrome.tabs.sendMessage(sender.tab.id, {
      type: 'FROM_SW',
      text: 'This is a follow-up message from service worker'
    });
  }

  // return true để giữ sendResponse async (trong trường hợp dùng setTimeout hoặc Promise)
  return true;
});
