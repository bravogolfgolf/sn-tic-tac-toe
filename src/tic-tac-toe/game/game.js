import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '../board';
import styles from '../style.scss';

createCustomElement('tic-tac-toe-game', {
	initialState: {
		history: [{
			squares: Array(9).fill(null)
		}],
		stepNumber: 0,
		xIsNext: true,
	},
	actionHandlers: {
		SQUARE_CLICKED: {
			effect: ({action, state, updateState}) => {
				const history = state.history.slice(0, state.stepNumber + 1);
				const current = history[history.length - 1];
				const squares = current.squares.slice();
				if (calculateWinner(squares) || squares[action.payload.index]) {
					return;
				}
				squares[action.payload.index] = state.xIsNext ? 'X' : 'O' || null;
				updateState({
					history: history.concat([{squares: squares}]),
					stepNumber: history.length,
					xIsNext: !state.xIsNext
				});
			}
		}
	},
	renderer: {type: snabbdom},
	view: (state, {updateState}) => {
		const history = state.history;
		const current = history[state.stepNumber];
		const winner = calculateWinner(current.squares);

		function jumpTo(step) {
			updateState({
				stepNumber: step,
				xIsNext: (step % 2) === 0,
			});
		}

		const moves = history.map((step, move) => {
			const desc = move ?
				'Go to move #' + move :
				'Go to game start';
			return (
				<li>
					<button on-click={() => jumpTo(move)}>{desc}</button>
				</li>
			);
		});

		let status;
		if (winner) {
			status = 'Winner: ' + winner;
		} else {
			status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
		}
		return (
			<div className="game">
				<div className="board">
					<game-board squares={current.squares}/>
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	},
	styles,
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

