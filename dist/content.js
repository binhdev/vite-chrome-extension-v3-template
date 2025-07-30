chrome.runtime.onMessage.addListener((e,r,s)=>{e.action==="setCursor"&&(document.body.style.cursor=e.cursorType)});
