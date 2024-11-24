chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("send message: " + message + " to windows.")
    window.postMessage(message, '*');
});
