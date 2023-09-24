const words = ["job opportunities and internships."];
let i = 0;
let offset = 0;
const len = words[0].length;
let forwards = true;
const skip_delay = 15;
const speed = 70;
let currentWord = words[i];
const $wordElement = $("#word-animation");

const wordflick = () => {
    setInterval(() => {
        if (forwards) {
        if (offset >= len) {
            // Reached the end
            setTimeout(() => {
            forwards = false;
            }, 1000); // Wait for 2 seconds
        }
        } else {
        if (offset <= 1) {
            // Reached the beginning
            forwards = true;
        }
        }

        const part = currentWord.substring(0, offset);

        if (forwards) {
        offset++;
        } else {
        offset--;
        }

        if (part !== $wordElement.text()) {
        $wordElement.text(part);
        }
    }, speed);
};

$(document).ready(() => {
  wordflick();
});
