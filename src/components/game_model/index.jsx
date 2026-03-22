

export function generatePattern() {
    const PATTERN_LENGTH = 4;
    const NUM_CHOICES = 6;

    const pattern = [];
    for (let i = 0; i < PATTERN_LENGTH; i++) {
        pattern.push(Math.ceil(Math.random() * NUM_CHOICES))
    }
    return pattern;
}

export function createHint(guessInput, patternInput) {

    let guess = [...guessInput];
    let pattern = [...patternInput];

    let numCorrectPlace = 0;
    let numWrongPlace = 0;

    let index = 0;
    while (index < guess.length) {
        if (guess[index] === pattern[index]) {
            numCorrectPlace++;
            guess.splice(index, 1);
            pattern.splice(index, 1);
        } else {
            index++;
        }
    }

    for (let i = 0; i < guess.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (guess[i] === pattern[j]) {
                numWrongPlace++;
                pattern.splice(j, 1);
                break;
            }
        }
    }

    return ([numCorrectPlace, numWrongPlace]);
}

export function decideGameWin(hintNumbers) {
    if (hintNumbers === null) {
        return false;
    }
    if (hintNumbers.length === 0) {
        return false;
    }

    return (hintNumbers[hintNumbers.length - 1][0] === 4);
}

export function decideGameLose(numAttempts) {
    return (numAttempts >= 12);
}

export function convertIndexToColor(i) {
    let result;
    switch (i) {
        case 0:
            result = "white";
            break;
        case 1:
            result = "red";
            break;
        case 2:
            result = "orange";
            break;
        case 3:
            result = "yellow";
            break;
        case 4:
            result = "green";
            break;
        case 5:
            result = "blue";
            break;
        case 6:
            result = "purple";
            break;
        default:
            console.error("Invalid color index");
    }
    return result;
}
