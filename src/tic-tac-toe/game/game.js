import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view'
import styles from '../style.css';

createCustomElement('tic-tac-toe-game', {
	renderer: {type: snabbdom},
	view,
	styles,
});
