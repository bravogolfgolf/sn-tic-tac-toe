import Enzyme from 'enzyme';
import {UIEnzymeAdapter} from '@servicenow/ui-enzyme-adapter';

Enzyme.configure({adapter: new UIEnzymeAdapter()});

describe('Tic Tac Toe Test', () => {
	it('should be true', () => {
		expect(true).toBe(true);
	});
});
