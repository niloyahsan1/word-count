const textInput = document.getElementById("textInput");
const wordCountDisplay = document.getElementById("wordCount");
const charCountDisplay = document.getElementById("charCount");
const charWithoutSpaceDisplay = document.getElementById("charWithoutSpace");

const copyBtn = document.getElementById("copyBtn");
const copyBtnText = document.getElementById("copyBtnText");
const clearBtn = document.getElementById("clearBtn");

function updateStats() {
    const text = textInput.value;
    const trimmedText = text.trim();

    const words = trimmedText ? trimmedText.split(/\s+/).filter(word => word.length > 0) : [];
    const wordCount = words.length;

    const charCount = text.length;
    const charNoSpace = text.replace(/\s/g, '').length;

    wordCountDisplay.textContent = wordCount.toLocaleString();
    charCountDisplay.textContent = charCount.toLocaleString();
    if (charWithoutSpaceDisplay) charWithoutSpaceDisplay.textContent = `${charNoSpace.toLocaleString()} characters excluding spaces`;
}

textInput.addEventListener("input", updateStats);

if (copyBtn) {
    copyBtn.addEventListener("click", () => {
        if (!textInput.value) return;
        navigator.clipboard.writeText(textInput.value).then(() => {
            copyBtnText.textContent = "Copied!";
            copyBtn.classList.add("copied");
            setTimeout(() => {
                copyBtnText.textContent = "Copy";
                copyBtn.classList.remove("copied");
            }, 2000);
        }).catch(() => {
            textInput.select();
            document.execCommand("copy");
            copyBtnText.textContent = "Copied!";
            setTimeout(() => {
                copyBtnText.textContent = "Copy";
            }, 2000);
        });
    });
}

if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        textInput.value = "";
        updateStats();
        textInput.focus();
    });
}