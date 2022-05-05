import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view'
import styles from '../style.css';

createCustomElement('game-board', {
	properties: {
		squares: {default: Array(9).fill(null)},
	},
	actionHandlers: {
		SQUARE_CLICKED: {
			effect: ({action, properties, updateProperties}) => {
				const squares = properties.squares.slice();
				squares[action.payload.index] = 'X';
				updateProperties({squares: squares});
			}
		}
	},
	renderer: {type: snabbdom},
	view,
	styles
});
