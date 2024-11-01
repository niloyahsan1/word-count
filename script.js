const textInput = document.getElementById("textInput");
const wordCountDisplay = document.getElementById("wordCount");
const charCountDisplay = document.getElementById("charCount");

textInput.addEventListener("input", () => {
    const texts = textInput.value.trim();

    const words = texts.split(/\s+/).filter((word) => word.length > 0);

    wordCountDisplay.textContent = words.length;
    charCountDisplay.textContent = texts.length;
});
