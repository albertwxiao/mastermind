import { useState } from 'react';
import './index.css'

function Square({ color, onSquareClick }) {

    return (
        <button 
            className='square' 
            onClick={onSquareClick}
            style={{backgroundColor: color}}
        >
        </button>
    );
}

export default function View() {

    const [rowColors, setRowColors] = useState(Array(4).fill("white"));
    const [rowColorsIndex, setRowColorsIndex] = useState(Array(4).fill(0));

    const handleClick = (i) => {

        const nextRowColorsIndex = rowColorsIndex.slice();
        nextRowColorsIndex[i] += 1;
        if (nextRowColorsIndex[i] > 6) {
            nextRowColorsIndex[i] = 1;
        }
        setRowColorsIndex(nextRowColorsIndex);
        console.log("Color index on clicked square is " + nextRowColorsIndex[i]);

        const nextRowColors = rowColors.slice();
        switch (nextRowColorsIndex[i]) {
            case 0:
                nextRowColors[i] = "white";
                break;
            case 1:
                nextRowColors[i] = "red";
                break;
            case 2:
                nextRowColors[i] = "orange";
                break;
            case 3:
                nextRowColors[i] = "yellow";
                break;
            case 4:
                nextRowColors[i] = "green";
                break;
            case 5:
                nextRowColors[i] = "blue";
                break;
            case 6:
                nextRowColors[i] = "purple";
                break;
            default:
                console.error("rowColorsIndex reached an unexpected state");
        }
        
        setRowColors(nextRowColors);
    }

    return (
        <>
        <div className='guess-bar'>
            <div className='square-row'>
                {rowColors.map((color, index) => (
                    <Square key={index} color={color} onSquareClick={() => handleClick(index)} />
                ))}
            </div>
        </div>
        </>
    );
}