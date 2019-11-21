document.addEventListener('DOMContentLoaded', function() {
  var reloadPageButton = document.getElementById('reloadPage');
  reloadPageButton.addEventListener('click', function() {
    

    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
      var code = 'window.location.reload();';
      chrome.tabs.executeScript(arrayOfTabs[0].id, {code: code});
    });


  }, false);
}, false);
