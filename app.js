// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');

const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');

const reportEl = document.getElementById('report');

const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

const catchphrases = [''];

let headCount = 0;
let middleCount = 0;
let pantsCount = 0;

headDropdown.addEventListener('change', () => {
    headEl.style.backgroundImage = `url(./assets/${headDropdown.value}-head.png)`;
    headCount++;
    displayStats();
});

middleDropdown.addEventListener('change', () => {
    middleEl.style.backgroundImage = `url(./assets/${middleDropdown.value}-middle.png)`;
    middleCount++;
    displayStats();
});

bottomDropdown.addEventListener('change', () => {
    bottomEl.style.backgroundImage = `url(./assets/${bottomDropdown.value}-pants.png)`;
    pantsCount++;
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    console.log(catchphraseInput.value);

    displayCatchphrases();
    displayStats();
});

function displayStats() {
    reportEl.textContent = `you have change the head ${headCount} times, you have changed the middle ${middleCount} times and have changed the pants ${pantsCount} times`;
}

function displayCatchphrases() {
    for (let catchphrase of catchphrases) {
        const pTag = document.createElement('p');
        pTag.classList.add('catchphrase');
        catchphrasesEl.append(pTag);
        pTag.textContent = catchphraseInput.value;
        catchphraseInput.value = '';
    }
}
