import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view'
import styles from './square.css';

createCustomElement('board-square', {
	renderer: {type: snabbdom},
	view,
	styles
});
