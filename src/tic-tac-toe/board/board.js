import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '../square'
import styles from '../style.css';

createCustomElement('game-board', {
	initialState: {
		squares: Array(9).fill(null),
		xIsNext: true,
	},
	actionHandlers: {
		SQUARE_CLICKED: {
			effect: ({action, state, updateState}) => {
				const squares = state.squares.slice();
				if (calculateWinner(squares) || squares[action.payload.index]) {
					return;
				}
				squares[action.payload.index] = state.xIsNext ? 'X' : 'O';
				updateState({squares: squares, xIsNext: !state.xIsNext});
			}
		}
	},
	renderer: {type: snabbdom},
	view: (state) => {
		function renderSquare(i) {
			return <board-square className="square" index={i} value={state.squares[i]}/>;
		}
		const winner = calculateWinner(state.squares);
		let status;
		if (winner) {
			status = 'Winner: ' + winner;
		} else {
			status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
		}
		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{renderSquare(0)}
					{renderSquare(1)}
					{renderSquare(2)}
				</div>
				<div className="board-row">
					{renderSquare(3)}
					{renderSquare(4)}
					{renderSquare(5)}
				</div>
				<div className="board-row">
					{renderSquare(6)}
					{renderSquare(7)}
					{renderSquare(8)}
				</div>
			</div>
		);
	},
	styles
});

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}
