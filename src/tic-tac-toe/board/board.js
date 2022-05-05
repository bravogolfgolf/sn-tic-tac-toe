import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '../square'
import styles from '../style.css';

createCustomElement('game-board', {
	properties: {
		squares: {},
	},
	renderer: {type: snabbdom},
	view: ({properties: {squares}}) => {
		function renderSquare(i) {
			return <board-square className="square" index={i} value={squares[i]}/>;
		}
		return (
			<div>
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
