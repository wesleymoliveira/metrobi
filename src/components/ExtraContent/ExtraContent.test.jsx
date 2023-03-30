import { screen } from '@testing-library/react';

import { ExtraContent } from './ExtraContent';
import { render, snapshotRenderer } from '../../../utils/testUtils';

describe('<ExtraContent />', () => {
		it('should render the component', () => {
		render(<ExtraContent />);
		
		expect(screen.getByTestId(/extra-content/i)).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const tree = snapshotRenderer(<ExtraContent />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should match the original background-color', () => {
		const tree = snapshotRenderer(<ExtraContent />).toJSON();
		//make sure the background-color is the original one
		expect(tree).toHaveStyleRule('background-color', '#898989')
	});

});
