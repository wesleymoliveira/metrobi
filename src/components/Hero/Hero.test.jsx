import { screen } from '@testing-library/react';

import { Hero } from './Hero';
import { render, snapshotRenderer } from '../../../utils/testUtils';

describe('<Hero />', () => {
		it('should render the component', () => {
		render(<Hero />);
		
		expect(screen.getByTestId(/hero/i)).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const tree = snapshotRenderer(<Hero />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should match the original background-color', () => {
		const tree = snapshotRenderer(<Hero />).toJSON();
		//make sure the background-color is the original one
		expect(tree).toHaveStyleRule('background-color', '#d7c9e3')
	});

});
