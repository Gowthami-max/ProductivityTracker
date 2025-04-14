document.getElementById('showData').addEventListener('click', () => {
    chrome.storage.local.get(['visitedSites'], (result) => {
      const siteList = document.getElementById('siteList');
      siteList.innerHTML = ''; // Clear existing list
      const sites = result.visitedSites || [];
      sites.forEach((site) => {
        const listItem = document.createElement('li');
        listItem.textContent = site;
        siteList.appendChild(listItem);
      });
    });
  });
  