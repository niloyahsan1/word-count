const textInput = document.getElementById("textInput");
const wordCountDisplay = document.getElementById("wordCount");
const charCountDisplay = document.getElementById("charCount");

textInput.addEventListener("input", () => {
    const text = textInput.value.trim();

    const words = text.split(/\s+/).filter((word) => word.length > 0);

    wordCountDisplay.textContent = words.length;
    charCountDisplay.textContent = text.length;
});
