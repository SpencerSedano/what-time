// Function to set the background color
const setBackgroundColor = (color) => {
  if (color) {
    document.body.style.backgroundColor = color;
  }
};

// Event listener for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  //console.log(message.colorChanged);
  if (message.colorChanged) {
    // Update the background color when a message is received
    setBackgroundColor(message.selectedColor);
  }
});

// If no color is choose, red is the default option
chrome.storage.sync.get({ favoriteColor: "red" }, (items) => {
  setBackgroundColor(items.favoriteColor);
});
