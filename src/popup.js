document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button[data-cursor]');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const cursorType = button.getAttribute('data-cursor');
      chrome.runtime.sendMessage({ action: 'setCursor', cursorType });
    });
  });
});