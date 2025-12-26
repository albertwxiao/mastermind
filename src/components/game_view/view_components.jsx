

export function HistorySection({ colorsHistory, hintNumbers }) {
    if (colorsHistory) {
        const mergedHistory = colorsHistory.map((row, index) => {
            return [row, hintNumbers[index]];
        })
        return (
            <div>
                {mergedHistory.map((mergedRow, index) => (
                    <HistoryRow key={index} mergedRow={mergedRow} />
                ))}
            </div>
        );
    } else {
        return;
    }
}

export function SquareRow({ colors, onRowClick }) {
    return (
        <div className='square-row'>
            {colors.map((color, index) => (
                <Square key={index} color={color} onSquareClick={() => onRowClick(index)} />
            ))}
        </div>
    );
}

export function SubmitButton({ onSubmitClick }) {
    return (
        <button onClick={onSubmitClick}>
            Submit
        </button>
    );
}

export function StatusMessage({ message }) {
    if (message) {
        return (
            <>{message}</>
        );
    } else {
        return;
    }
    
}

function HistoryRow({ mergedRow }) {
    return (
        <div className='history-row'>
            <SquareRow colors={mergedRow[0]} onRowClick={() => {}} />
            <div className='num-correct-place'>
                {mergedRow[1][0]}
            </div>
            <div className='num-incorrect-place'>
                {mergedRow[1][1]}
            </div>
        </div>
    );
}

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
