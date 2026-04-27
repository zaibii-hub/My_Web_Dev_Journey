const button = document.getElementById("convertBtn");
const textArea = document.getElementById("textToConvert");
const errorPara = document.querySelector(".error-para");

button.addEventListener("click", () => {

    const text = textArea.value;

    if (text.trim() === "") {
        errorPara.textContent = "⚠ Please enter some text!";
        return;
    }

    errorPara.textContent = "";

    // Create speech object
    const speech = new SpeechSynthesisUtterance();

    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    // Speak
    window.speechSynthesis.speak(speech);
});