import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div></div>
	);
};

createCustomElement('x-402400-tic-tac-toe', {
	renderer: {type: snabbdom},
	view,
	styles
});
