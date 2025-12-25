import { useState, useRef } from 'react';
import './index.css';
import { generatePattern, createHint, decideGameWin, convertIndexToColor } from '../game_model/index.jsx';
import { HistorySection, SquareRow, SubmitButton, WinMessage } from './view_components.jsx';

export default function Game() {

    const [rowColors, setRowColors] = useState(Array(4).fill("white"));
    const [rowColorsIndex, setRowColorsIndex] = useState(Array(4).fill(0));
    const [colorsHistory, setColorsHistory] = useState(Array);
    const [hintNumbers, setHintNumbers] = useState(Array);
    const correctPattern = useRef(Array(4).fill(0));
    const gameWin = decideGameWin(hintNumbers);

    if (correctPattern.current[0] == 0) {
        correctPattern.current = generatePattern();
        console.log("Generated pattern: " + correctPattern.current);
    }

    const handleSquaresClick = (i) => {

        const nextRowColorsIndex = rowColorsIndex.slice();
        nextRowColorsIndex[i] += 1;
        if (nextRowColorsIndex[i] > 6) {
            nextRowColorsIndex[i] = 1;
        }
        const nextRowColors = rowColors.slice();
        nextRowColors[i] = convertIndexToColor(nextRowColorsIndex[i]);

        setRowColorsIndex(nextRowColorsIndex);
        setRowColors(nextRowColors);
    }

    function handleSubmit(guess, pattern, guessColors) {

        if (gameWin === true) {
            return;
        }
        if (guess == null || pattern == null || guessColors == null) {
            console.error("Function handleSubmit received null arguments");
            return;
        }
        if (guess.some(v => v === 0)) {
            console.log("Invalid guess. Make sure all squares have a color.");
            return;
        }
        // Further checks: check if pattern is valid; check if guess and pattern are the same length, etc.

        const newHintNumbers = createHint(guess, pattern);
        const nextHintNumbers = [...hintNumbers, newHintNumbers];
        const nextColorsHistory = [...colorsHistory, guessColors];
        setHintNumbers(nextHintNumbers);
        setColorsHistory(nextColorsHistory);
    }

    return (
        <>
            <div className='guess-bar'>
                <SquareRow colors={rowColors} onRowClick={handleSquaresClick} />
                <div className='submit-button'>
                    <SubmitButton onSubmitClick={() => { handleSubmit(rowColorsIndex, correctPattern.current, rowColors) }} />
                </div>
            </div>
            <div className='win-message'>
                <WinMessage hasWon={gameWin} />
            </div>
            <div className='history'>
                <HistorySection colorsHistory={colorsHistory} hintNumbers={hintNumbers} />
            </div>
        </>
    );
}
