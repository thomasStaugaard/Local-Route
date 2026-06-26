// DOM-Variables
const hole1OverviewButton = document.querySelector('#hole1OverviewButton');
const hole2OverviewButton = document.querySelector('#hole2OverviewButton');
const hole3OverviewButton = document.querySelector('#hole3OverviewButton');
const hole4OverviewButton = document.querySelector('#hole4OverviewButton');
const hole5OverviewButton = document.querySelector('#hole5OverviewButton');
const hole6OverviewButton = document.querySelector('#hole6OverviewButton');
const hole7OverviewButton = document.querySelector('#hole7OverviewButton');
const hole8OverviewButton = document.querySelector('#hole8OverviewButton');
const hole9OverviewButton = document.querySelector('#hole9OverviewButton');
const hole10OverviewButton = document.querySelector('#hole10OverviewButton');
const hole11OverviewButton = document.querySelector('#hole11OverviewButton');
const hole12OverviewButton = document.querySelector('#hole12OverviewButton');
const hole13OverviewButton = document.querySelector('#hole13OverviewButton');
const hole14OverviewButton = document.querySelector('#hole14OverviewButton');
const hole15OverviewButton = document.querySelector('#hole15OverviewButton');
const hole16OverviewButton = document.querySelector('#hole16OverviewButton');
const hole17OverviewButton = document.querySelector('#hole17OverviewButton');
const hole18OverviewButton = document.querySelector('#hole18OverviewButton');
const hole1Button = document.querySelector('#hole1Button');
const hole2Button = document.querySelector('#hole2Button');
const hole3Button = document.querySelector('#hole3Button');
const hole4Button = document.querySelector('#hole4Button');
const hole5Button = document.querySelector('#hole5Button');
const hole6Button = document.querySelector('#hole6Button');
const hole7Button = document.querySelector('#hole7Button');
const hole8Button = document.querySelector('#hole8Button');
const hole9Button = document.querySelector('#hole9Button');
const hole10Button = document.querySelector('#hole10Button');
const hole11Button = document.querySelector('#hole11Button');
const hole12Button = document.querySelector('#hole12Button');
const hole13Button = document.querySelector('#hole13Button');
const hole14Button = document.querySelector('#hole14Button');
const hole15Button = document.querySelector('#hole15Button');
const hole16Button = document.querySelector('#hole16Button');
const hole17Button = document.querySelector('#hole17Button');
const hole18Button = document.querySelector('#hole18Button');
const player1NameInput = document.querySelector('#player1NameInput');
const player2NameInput = document.querySelector('#player2NameInput');
const savePlayersButton = document.querySelector('#savePlayersButton');
const savePlayersButtonTextElement = document.querySelector('#savePlayersButtonText');
const player1NameText = document.querySelector('#player1NameText');
const player2NameText = document.querySelector('#player2NameText');
const selectedHoleElement = document.querySelector('#selectedHoleMessage');
const selectedPlayerElement = document.querySelector('#textSelectedPlayer');
const throwsInput1 = document.querySelector ('#throwsInput1');
const throwsInput2 = document.querySelector ('#throwsInput2');
const modalSaveScoreButton = document.querySelector('#modalSaveScoreButton');
const modalSaveScoreOverviewButton = document.querySelector('#modalSaveScoreOverviewButton');
const messageElement = document.querySelector('#messageText');
const player1TotalThrowsElement = document.querySelector('#totalThrowsTextPlayer1');
const player1TotalParElement = document.querySelector('#totalParTextPlayer1');
const player1TotalScoreToParElement = document.querySelector('#scoreToParTextPlayer1');
const player2TotalThrowsElement = document.querySelector('#totalThrowsTextPlayer2');
const player2TotalParElement = document.querySelector('#totalParTextPlayer2');
const player2TotalScoreToParElement = document.querySelector('#scoreToParTextPlayer2');
const resetButton = document.querySelector('#resetButton');
const resetModalButton = document.querySelector('#resetModalButton');
const holeDetailImage = document.querySelector('#holeDetailImage');
const pickCourseButton = document.querySelector('#pickCourseButton');
const valbyCourseCard = document.querySelector('.courseCardValby');
const addPlayerInputButton = document.querySelector('#addPlayerInputButton');
const removePlayerInputButton = document.querySelector('#removePlayerInputButton');
const openHoleOverviewButton = document.querySelector('#openHoleOverviewButton');
const backToMapButton = document.querySelector('#backToMapButton');
const saveScoreTextElement = document.querySelector('#saveScoreTextElement');
const closeSaveScoreOverlayButton = document.querySelector('#closeSaveScoreOverlayButton');
const closeSaveScoreOverviewButton = document.querySelector('#closeSaveScoreOverviewButton');
const saveScoreOverlay = document.querySelector('#saveScoreOverlay');
const player1ParButton = document.querySelector('#player1ParButton');
const player2ParButton = document.querySelector('#player2ParButton');
const backToMenuButton = document.querySelector('#backToMenuButton');
const scoreButton = document.querySelector('#scoreButton');
const backToCourseButton = document.querySelector('#backToCourseMapButton');
const menuOverlay = document.querySelector('#menuOverlay');
const menuCourseMapButton = document.querySelector('#menuCourseMapButton');
const jaResetButton = document.querySelector('#jaResetButton');
const nejResetButton = document.querySelector('#nejResetButton');
const resetOverlay = document.querySelector('#resetOverlay');
const openResetModal = document.querySelector('#openResetModal');
const savePlayersErrorTextElement = document.querySelector('#savePlayersErrorText');
const scoreOverlay = document.querySelector('#scoreOverlay');
const scorePlayer1TextElement = document.querySelector('#scorePlayer1Text');
const scorePlayer2TextElement = document.querySelector('#scorePlayer2Text');
const scoreBackButton = document.querySelector('#scoreBackButton');
const resetMenuOverlay = document.querySelector('#resetMenuOverlay');
const resetMenuSureText = document.querySelector('#resetMenuSureText');
const resetMenuModalButton = document.querySelector('#resetMenuModalButton');
const jaMenuResetButton = document.querySelector('#jaMenuResetButton');
const nejMenuResetButton = document.querySelector('#nejMenuResetButton');


// Array of holes
const holes = [
{ holeNumber: 1, par: 4, throws: 0, isCompleted: false, image: 'thumbnails/hul1.png' },
{ holeNumber: 2, par: 3, throws: 0, isCompleted: false, image: 'thumbnails/hul2.jpg' },
{ holeNumber: 3, par: 3, throws: 0, isCompleted: false, image: 'thumbnails/hul3.jpg' },
{ holeNumber: 4, par: 4, throws: 0, isCompleted: false, image: 'thumbnails/hul4.jpg' },
{ holeNumber: 5, par: 3, throws: 0, isCompleted: false, image: 'thumbnails/hul5.jpg' },
{ holeNumber: 6, par: 4, throws: 0, isCompleted: false, image: 'thumbnails/hul6.png' },
{ holeNumber: 7, par: 3, throws: 0, isCompleted: false, image: 'thumbnails/hul7.png' },
{ holeNumber: 8, par: 4, throws: 0, isCompleted: false, image: 'thumbnails/hul8.png' },
{ holeNumber: 9, par: 3, throws: 0, isCompleted: false, image: 'thumbnails/hul9.png' },
{ holeNumber: 10, par: 5, throws: 0, isCompleted: false, image: 'thumbnails/hul10.jpg' },
{ holeNumber: 11, par: 3, throws: 0, isCompleted: false, image: 'thumbnails/hul11.jpg' },
{ holeNumber: 12, par: 3, throws: 0, isCompleted: false, image: 'thumbnails/hul12.png' },
{ holeNumber: 13, par: 3, throws: 0, isCompleted: false, image: 'thumbnails/hul13.jpg' },
{ holeNumber: 14, par: 4, throws: 0, isCompleted: false, image: 'thumbnails/hul14.png' },
{ holeNumber: 15, par: 3, throws: 0, isCompleted: false, image: 'thumbnails/hul15.jpg' },
{ holeNumber: 16, par: 4, throws: 0, isCompleted: false, image: 'thumbnails/hul16.png' },
{ holeNumber: 17, par: 4, throws: 0, isCompleted: false, image: 'thumbnails/hul17.jpg' },
{ holeNumber: 18, par: 3, throws: 0, isCompleted: false, image: 'thumbnails/hul18.jpg' }
];

// --- OBJECTS --- //

// game object
const game = {
currentScreen: 'menuScreen',
selectedCourse: null,
selectedHole: null,
selectedPlayer: null,
};

// Array of players
const allPlayers = [
{ playerNumber: 1, name: "", scores: [] },
{ playerNumber: 2, name: "", scores: [] }
];

// Array of Hole buttons
const holeButtons = [
hole1Button, hole2Button, hole3Button, hole4Button, 
hole5Button, hole6Button, hole7Button, hole8Button,
hole9Button, hole10Button, hole11Button, hole12Button,
hole13Button, hole14Button, hole15Button, hole16Button,
hole17Button, hole18Button ];

const holeOverviewButtons = [
hole1OverviewButton, hole2OverviewButton, hole3OverviewButton, hole4OverviewButton,
hole5OverviewButton, hole6OverviewButton, hole7OverviewButton, hole8OverviewButton,
hole9OverviewButton, hole10OverviewButton, hole11OverviewButton, hole12OverviewButton,
hole13OverviewButton, hole14OverviewButton, hole15OverviewButton, hole16OverviewButton,
hole17OverviewButton, hole18OverviewButton
];


// --- FUNCTIONS --- //

// Show screen function //
function showScreen(screenName) {
const screenAll = document.querySelectorAll('.screen')
for (const currentScreen of screenAll) {
currentScreen.classList.add('hidden');
}
const screenNameCurrent = document.getElementById(screenName);
screenNameCurrent.classList.remove('hidden');
game.currentScreen = screenName;
}

// Save score for saved hole
function getScoreForHole (playerNumber, holeNumber) {
const selectedPlayer = allPlayers.find((currentPlayer) => {
return currentPlayer.playerNumber === playerNumber;
});
const selectedScore = selectedPlayer.scores.find((currentScore) => {
return currentScore.holeNumber === holeNumber;
});
return selectedScore;
}

// Selected hole function
function selectedHole(holeNumber) {
game.selectedHole = holeNumber;
player1ParButton.classList.remove('parButtonActive');
player2ParButton.classList.remove('parButtonActive');
modalSaveScoreButton.classList.remove('hidden');
modalSaveScoreOverviewButton.classList.add('hidden');
closeSaveScoreOverlayButton.classList.remove('hidden');
closeSaveScoreOverviewButton.classList.add('hidden');
for (const currentHoleButton of holeButtons) {
currentHoleButton.classList.remove('selectedHole');
};
const selectedHoleData = holes.find((currentHole) => {
return currentHole.holeNumber === holeNumber;
});
const player1SavedScore = getScoreForHole(1, holeNumber);
const player2SavedScore = getScoreForHole(2, holeNumber);
if (player1SavedScore) {
throwsInput1.value = player1SavedScore.throws;
} else {
throwsInput1.value = '';
}
if (player2SavedScore) {
throwsInput2.value = player2SavedScore.throws;
} else {
throwsInput2.value = '';
}
holeDetailImage.src = selectedHoleData.image;
saveScoreOverlay.classList.remove('hidden')
holeButtons[holeNumber - 1].classList.add('selectedHole');
}

// Selected hole function 2
function selectedHoleFromOverview(holeNumber) {
game.selectedHole = holeNumber;
player1ParButton.classList.remove('parButtonActive');
player2ParButton.classList.remove('parButtonActive');
modalSaveScoreButton.classList.add('hidden');
modalSaveScoreOverviewButton.classList.remove('hidden');
closeSaveScoreOverlayButton.classList.add('hidden');
closeSaveScoreOverviewButton.classList.remove('hidden');
for (const currentHoleButton of holeButtons) {
currentHoleButton.classList.remove('selectedHole');
}
const selectedHoleData = holes.find((currentHole) => {
return currentHole.holeNumber === holeNumber;
});
const player1SavedScore = getScoreForHole(1, holeNumber);
const player2SavedScore = getScoreForHole(2, holeNumber);
if (player1SavedScore) {
throwsInput1.value = player1SavedScore.throws;
} else {
throwsInput1.value = '';
}
if (player2SavedScore) {
throwsInput2.value = player2SavedScore.throws;
} else {
throwsInput2.value = '';
}
holeDetailImage.src = selectedHoleData.image;
saveScoreOverlay.classList.remove('hidden');
}

// Selected hole par function
function getSelectedHolePar() {
const selectedHole = holes.find((currentHole) => {
return currentHole.holeNumber === game.selectedHole;
});
return selectedHole.par;
}

// Save players function
function savePlayers() {
const player1Name = player1NameInput.value;
const player2Name = player2NameInput.value;
const isPlayer2Visible = !player2NameInput.classList.contains('hidden');
if (player1Name && !isPlayer2Visible && !player2Name)
savePlayersErrorTextElement.textContent = 'Tilføj en spiller mere';
if (player1Name === '') {
savePlayersErrorTextElement.textContent = 'Giv spiller 1 et navn';
return;
}
if (isPlayer2Visible && player1Name === '' && player2Name === '') {
savePlayersErrorTextElement.textContent = 'Giv begge spillere et navn';
return;
}
if (!isPlayer2Visible && !player2Name) { 
return;
}
if (isPlayer2Visible && player2Name === '') {
savePlayersErrorTextElement.textContent = 'Giv spiller 2 et navn';
return;
}
const player1 = allPlayers.find((currentPlayer) => {
return currentPlayer.playerNumber === 1; 
});
const player2 = allPlayers.find((currentPlayer) => {
return currentPlayer.playerNumber === 2; 
});
if (isPlayer2Visible) {
const player2 = allPlayers.find((currentPlayer) => {  
return currentPlayer.playerNumber === 2;  
});
player2NameText.classList.remove('hidden');
} else {
player2NameText.classList.add('hidden');
}
player1.name = player1Name;
player2.name = player2Name;
player1NameText.textContent = player1.name;
player2NameText.textContent = player2.name;
scorePlayer1TextElement.textContent = `${player1.name}:`;
scorePlayer2TextElement.textContent = `${player2.name}:`;
scorePlayer2TextElement.classList.remove('hidden');
player2NameInput.classList.add('hidden');
addPlayerInputButton.classList.remove('isPlayerSelected');
throwsInput1.placeholder = '0';
throwsInput2.placeholder = '0';
savePlayersErrorTextElement.textContent = '';
showScreen('courseMapScreen');
}

// Calculate score to par function
function calculateScoreToPar(throws, par) {
const scoreToPar = (throws - par);
return scoreToPar;
}

// Save score function
function saveScore() {
const holeNumber = game.selectedHole;
const player1Throws = Number(throwsInput1.value);
const player2Throws = Number(throwsInput2.value);
if (player1Throws <= 0 || player2Throws <= 0) {
saveScoreTextElement.textContent = 'Indtast antal kast for begge spillere';
return false;
}
markHoleCompleted(holeNumber);
markHoleOverviewCompleted(holeNumber);
saveScoreForHole(holeNumber, 1, player1Throws);
saveScoreForHole(holeNumber, 2, player2Throws);
updateTotals();
throwsInput1.value = '';
throwsInput2.value = '';
player2ParButton.textContent = 'Par';
player1ParButton.textContent = 'Par';
return true;
}

// Save score for hole function
function saveScoreForHole(holeNumber, playerNumber, throws) {
const selectedHole = holes.find((currentHole) => {
return currentHole.holeNumber === holeNumber;
});
const selectedScorePlayer = allPlayers.find((currentPlayer) => {
return currentPlayer.playerNumber === playerNumber; 
});
const selectedScorePar = selectedHole.par;
const scoreToPar = calculateScoreToPar(throws, selectedScorePar);
const existingScore = selectedScorePlayer.scores.find((currentScore) => {
return currentScore.holeNumber === holeNumber;
});
if (existingScore) {
existingScore.par = selectedScorePar;
existingScore.throws = throws;
existingScore.scoreToPar = scoreToPar;
} else {
const score = {
holeNumber: holeNumber,
par: selectedScorePar,
throws: throws,
scoreToPar: scoreToPar
};
selectedScorePlayer.scores.push(score);
}
}

// Update totals (loop)
function updateTotals() {
for (const currentPlayer of allPlayers) {
let totalThrows = 0;
let totalPar = 0;
let totalScoreToPar = 0;
for (const currentScore of currentPlayer.scores) {
totalThrows = totalThrows + currentScore.throws;
totalPar = totalPar + currentScore.par;
totalScoreToPar = totalScoreToPar + currentScore.scoreToPar;
}
if (currentPlayer.playerNumber === 1) {
player1TotalThrowsElement.textContent = totalThrows;
player1TotalParElement.textContent = totalPar;
player1TotalScoreToParElement.textContent = totalScoreToPar;
player1TotalScoreToParElement.classList.remove('scoreToParPlusScore');
player1TotalScoreToParElement.classList.remove('scoreToParMinusScore');
if (totalScoreToPar < 0) {
player1TotalScoreToParElement.classList.add('scoreToParPlusScore');
} else if (totalScoreToPar > 0) {
player1TotalScoreToParElement.classList.add('scoreToParMinusScore');
}
} else if (currentPlayer.playerNumber === 2) {
player2TotalThrowsElement.textContent = totalThrows;
player2TotalParElement.textContent = totalPar;
player2TotalScoreToParElement.textContent = totalScoreToPar;
player2TotalScoreToParElement.classList.remove('scoreToParPlusScore');
player2TotalScoreToParElement.classList.remove('scoreToParMinusScore');
if (totalScoreToPar < 0) {
player2TotalScoreToParElement.classList.add('scoreToParPlusScore');
} else if (totalScoreToPar > 0) {
player2TotalScoreToParElement.classList.add('scoreToParMinusScore');
}
}
}
}


// Reset function
function resetGame() {
game.selectedHole = null,
game.selectedPlayer = null;
for (const currentPlayer of allPlayers) {
currentPlayer.scores.length = 0;
for (const currentHoleButton of holeButtons) {
currentHoleButton.classList.remove('completedHole');
currentHoleButton.classList.remove('selectedHole');
}
for (const currentOverviewButton of holeOverviewButtons) {
currentOverviewButton.classList.remove('completedHoleOverview');
}
}
throwsInput1.value = '';
throwsInput2.value = '';
player1NameInput.value = '';
player2NameInput.value = '';
savePlayersButtonTextElement.textContent = '';
updateTotals();
}

// Mark hole completed function
function markHoleCompleted(holeNumber) {
if (holeNumber === 1) {
hole1Button.classList.add('completedHole');
} else if (holeNumber === 2) {
hole2Button.classList.add('completedHole');
} else if (holeNumber === 3) {
hole3Button.classList.add('completedHole');
} else if (holeNumber === 4) {
hole4Button.classList.add('completedHole');
} else if (holeNumber === 5) {
hole5Button.classList.add('completedHole');
} else if (holeNumber === 6) {
hole6Button.classList.add('completedHole');
} else if (holeNumber === 7) {
hole7Button.classList.add('completedHole');
} else if (holeNumber === 8) {
hole8Button.classList.add('completedHole');
} else if (holeNumber === 9) {
hole9Button.classList.add('completedHole');
} else if (holeNumber === 10) {
hole10Button.classList.add('completedHole');
} else if (holeNumber === 11) {
hole11Button.classList.add('completedHole');
} else if (holeNumber === 12) {
hole12Button.classList.add('completedHole');
} else if (holeNumber === 13) {
hole13Button.classList.add('completedHole');
} else if (holeNumber === 14) {
hole14Button.classList.add('completedHole');
} else if (holeNumber === 15) {
hole15Button.classList.add('completedHole');
} else if (holeNumber === 16) {
hole16Button.classList.add('completedHole');
} else if (holeNumber === 17) {
hole17Button.classList.add('completedHole');
} else if (holeNumber === 18) {
hole18Button.classList.add('completedHole');
}
}

// Mark holeOverview completed function
function markHoleOverviewCompleted(holeNumber) {
if (holeNumber === 1) {
hole1OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 2) {
hole2OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 3) {
hole3OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 4) {
hole4OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 5) {
hole5OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 6) {
hole6OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 7) {
hole7OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 8) {
hole8OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 9) {
hole9OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 10) {
hole10OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 11) {
hole11OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 12) {
hole12OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 13) {
hole13OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 14) {
hole14OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 15) {
hole15OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 16) {
hole16OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 17) {
hole17OverviewButton.classList.add('completedHoleOverview');
} else if (holeNumber === 18) {
hole18OverviewButton.classList.add('completedHoleOverview');
}
}



//  --- EVENTS --- //

// Events
backToMapButton.addEventListener('click', () => {
resetOverlay.classList.add('hidden');
menuOverlay.classList.add('hidden');
showScreen('courseMapScreen');
});
openHoleOverviewButton.addEventListener('click', () => {
showScreen('holeOverviewScreen');
});
addPlayerInputButton.addEventListener('click', () => {
player2NameInput.classList.remove('hidden');
addPlayerInputButton.classList.add('isPlayerSelected');
});
removePlayerInputButton.addEventListener('click', () => {
player2NameInput.classList.add('hidden');
addPlayerInputButton.classList.remove('isPlayerSelected');
});
valbyCourseCard.addEventListener('click', () => {
game.selectedCourse = 'valby';
showScreen('playerSetupScreen');
});
savePlayersButton.addEventListener('click', () => {
savePlayers();
});
pickCourseButton.addEventListener('click', () => {
showScreen('courseSelectionScreen');
});
modalSaveScoreButton.addEventListener('click', () => {
const scoreWasSaved = saveScore();
if (scoreWasSaved) {
saveScoreOverlay.classList.add('hidden');
showScreen('courseMapScreen');
}
});
modalSaveScoreOverviewButton.addEventListener('click', () => {
const scoreWasSaved = saveScore();
if (scoreWasSaved) {
saveScoreOverlay.classList.add('hidden');
showScreen('holeOverviewScreen');
}
});
resetButton.addEventListener('click', () => {
menuOverlay.classList.add('hidden');
resetOverlay.classList.add('hidden');
resetGame();
});
closeSaveScoreOverlayButton.addEventListener('click', () => {
saveScoreOverlay.classList.add('hidden');
for (const currentHoleButton of holeButtons) {
currentHoleButton.classList.remove('selectedHole');
player1ParButton.textContent = 'Par';
player2ParButton.textContent = 'Par';
}
showScreen('courseMapScreen');
});
closeSaveScoreOverviewButton.addEventListener('click', () => {
saveScoreOverlay.classList.add('hidden');
for (const currentHoleButton of holeButtons) {
currentHoleButton.classList.remove('selectedHole');
player1ParButton.textContent = 'Par';
player2ParButton.textContent = 'Par';
}
showScreen('holeOverviewScreen');
});
player1ParButton.addEventListener('click', () => {  
if (player1ParButton.classList.contains('parButtonActive')) {
player1ParButton.classList.remove('parButtonActive');
throwsInput1.value = '';
player1ParButton.textContent = 'Par';
} else {
player1ParButton.classList.add('parButtonActive');
player1ParButton.textContent = '✓';
throwsInput1.value = getSelectedHolePar();
}
});
player2ParButton.addEventListener('click', () => {
if (player2ParButton.classList.contains('parButtonActive')) {
player2ParButton.classList.remove('parButtonActive');
throwsInput2.value = '';
player2ParButton.textContent = 'Par';
} else {
player2ParButton.classList.add('parButtonActive');
player2ParButton.textContent = '✓';
throwsInput2.value = getSelectedHolePar();
}
});
menuCourseMapButton.addEventListener('click', () => {
menuOverlay.classList.remove('hidden');
});
backToCourseButton.addEventListener('click', () => {
menuOverlay.classList.add('hidden');
showScreen('courseMapScreen');
});
backToMenuButton.addEventListener('click', () => {
resetMenuOverlay.classList.remove('hidden');
menuOverlay.classList.add('hidden');
});
nejResetButton.addEventListener('click', () => {
menuOverlay.classList.add('hidden');
resetOverlay.classList.add('hidden');
});
openResetModal.addEventListener('click', () => {
resetOverlay.classList.remove('hidden');
menuOverlay.classList.add('hidden');
});
scoreButton.addEventListener('click', () => {
scoreOverlay.classList.remove('hidden');
});
scoreBackButton.addEventListener('click', () => {
menuOverlay.classList.add('hidden');
scoreOverlay.classList.add('hidden');
});
jaMenuResetButton.addEventListener('click', () => {
menuOverlay.classList.add('hidden');
resetMenuOverlay.classList.add('hidden');
resetGame();
showScreen('menuScreen');
});
nejMenuResetButton.addEventListener('click', () => {
menuOverlay.classList.add('hidden');
resetMenuOverlay.classList.add('hidden');
showScreen('courseMapScreen')
});
hole1Button.addEventListener('click', () => {
selectedHole(1);
});
hole2Button.addEventListener('click', () => {
selectedHole(2);
});
hole3Button.addEventListener('click', () => {
selectedHole(3);
});
hole4Button.addEventListener('click', () => {
selectedHole(4);
});
hole5Button.addEventListener('click', () => {
selectedHole(5);
});
hole6Button.addEventListener('click', () => {
selectedHole(6);
});
hole7Button.addEventListener('click', () => {
selectedHole(7);
});
hole8Button.addEventListener('click', () => {
selectedHole(8);
});
hole9Button.addEventListener('click', () => {
selectedHole(9);
});
hole10Button.addEventListener('click', () => {
selectedHole(10);
});
hole11Button.addEventListener('click', () => {
selectedHole(11);
});
hole12Button.addEventListener('click', () => {
selectedHole(12);
});
hole13Button.addEventListener('click', () => {
selectedHole(13);
});
hole14Button.addEventListener('click', () => {
selectedHole(14);
});
hole15Button.addEventListener('click', () => {
selectedHole(15);
});
hole16Button.addEventListener('click', () => {
selectedHole(16);
});
hole17Button.addEventListener('click', () => {
selectedHole(17);
});
hole18Button.addEventListener('click', () => {
selectedHole(18);
});
hole1OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(1);
});
hole2OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(2);
});
hole3OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(3);
});
hole4OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(4);
});
hole5OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(5);
});
hole6OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(6);
});
hole7OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(7);
});
hole8OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(8);
});
hole9OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(9);
});
hole10OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(10);
});
hole11OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(11);
});
hole12OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(12);
});
hole13OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(13);
});
hole14OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(14);
});
hole15OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(15);
});
hole16OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(16);
});
hole17OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(17);
});
hole18OverviewButton.addEventListener('click', () => {
selectedHoleFromOverview(18);
});




if ('serviceWorker' in navigator && location.hostname !== '127.0.0.1' && location.hostname !== 'localhost') {
navigator.serviceWorker.register('service-worker.js');
}
