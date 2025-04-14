console.log("Background script is running!");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension successfully installed!");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    console.log(`Visited: ${tab.url}`);
  }
});

  