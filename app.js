var btnTranslate = document.querySelector("#btnTranslate");
var txtInput = document.querySelector("#txtInput");
var divOutput = document.querySelector("#divOutput");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function translate() {
    var inputText = txtInput.value;

    var translationURL = serverURL+'?text='+inputText;
    
    fetch(translationURL)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            var translatedText = json.contents.translated;
            divOutput.innerText = translatedText;
        })
        .catch(errorHandler);
};

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

btnTranslate.addEventListener("click", translate);

