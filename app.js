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

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases

headDropdown.addEventListener('change', () => {
  // get the value of the head dropdown
  // increment the head change count state
    headEl.style.backgroundImage = `url(./assets/${headDropdown.value}-head.png)`;
    headCount++;
    displayStats();
  
  // update the stats to show the new count (call displayStats() to do this work)
});

middleDropdown.addEventListener('change', () => {
    middleEl.style.backgroundImage = `url(./assets/${middleDropdown.value}-middle.png)`;
    middleCount++;
    displayStats();
  // update the stats to show the new count (call displayStats() to do this work)
});

bottomDropdown.addEventListener('change', () => {
    bottomEl.style.backgroundImage = `url(./assets/${bottomDropdown.value}-pants.png)`;
    pantsCount++;
    displayStats();
  // update the stats to show the new count (call displayStats() to do this work)
});

catchphraseButton.addEventListener('click', () => {
  // get the value of the catchphrase input
    console.log(catchphraseInput.value)
  // push the new catchphrase to the catchphrase array in state
    
  // clear out the form input's value so it's empty to the use
  // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
    displayStats();
    
});

function displayStats() {
  // text content of the reportEl to tell the user how many times they've changed each piece of the state
    
    reportEl.textContent =
        `you have change the head ${headCount} times, you have changed the middle ${middleCount} times and have changed the pants ${pantsCount} times`;

}

function displayCatchphrases() {

    for (let catchphrase of catchphrases) {
        const pTag = document.createElement('p');
        catchphrasesEl.append(pTag);
        pTag.textContent = catchphraseInput.value;
        catchphraseInput.value = '';
    }
}
