var httpRequest;
var textArea = document.getElementById('data');

document.getElementById('submitButton').addEventListener('click', onClickSubmitButton);

function onClickSubmitButton() {
    getCurrentTabUrl(sendHttpRequest);
}

function sendHttpRequest(url) {
    httpRequest = new XMLHttpRequest();
    var data = { url: url, msg: textArea.value };
    httpRequest.onreadystatechange = handleServerResponse;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-type', 'application/json');
    httpRequest.send(JSON.stringify(data));
}

function handleServerResponse() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        var obj = JSON.parse(httpRequest.response);
        console.log('json: ' + JSON.stringify(obj));
    }
}

function getCurrentTabUrl(callback) {

    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function (tabs) {
        var tab = tabs[0];
        var url = tab.url;
        console.assert(typeof url == 'string', 'tab.url should be a string');
        callback(url);
    });
}