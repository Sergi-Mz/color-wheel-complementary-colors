const preloadHTML = async () => {
  if (!(await chrome.offscreen.hasDocument())) {
    await chrome.offscreen.createDocument({
      url: "popup.html",
      reasons: [chrome.offscreen.Reason.DISPLAY_MEDIA],
      justification: "Helps with faster load times of popup",
    });
  }
};
preloadHTML();

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    // Code to be executed on first install
    // eg. open a tab with a url
    chrome.tabs.create({
      url: "http://project8053781.tilda.ws/color-wheel",
    });
  } else if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
    // When extension is updated
  } else if (details.reason === chrome.runtime.OnInstalledReason.CHROME_UPDATE) {
    // When browser is updated
  } else if (details.reason === chrome.runtime.OnInstalledReason.SHARED_MODULE_UPDATE) {
    // When a shared module is updated
  }
});