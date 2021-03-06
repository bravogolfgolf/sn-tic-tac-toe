import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view'
import styles from '../style.scss';

createCustomElement('board-square', {
	renderer: {type: snabbdom},
	properties: {
		index: {default: null},
		value: {default: null},
	},
	view,
	styles,
});
