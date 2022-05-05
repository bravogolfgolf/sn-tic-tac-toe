import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view'
import styles from '../style.css';

createCustomElement('game-board', {
	initialState: {
		squares: Array(9).fill(null),
	},
	actionHandlers: {
		SQUARE_CLICKED: {
			effect: ({action, state, updateState}) => {
				const squares = state.squares.slice();
				squares[action.payload.index] = 'X';
				updateState({squares: squares});
			}
		}
	},
	renderer: {type: snabbdom},
	view,
	styles
});
