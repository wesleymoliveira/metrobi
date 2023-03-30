import { screen } from '@testing-library/react';
import { render, snapshotRenderer } from '../../../utils/testUtils';

import { Footer } from './Footer';

describe('<Footer />', () => {
		it('should render the component', () => {
		render(<Footer />);
		
		expect(screen.getByTestId(/footer/i)).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const tree = snapshotRenderer(<Footer />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should match the original background-color', () => {
		const tree = snapshotRenderer(<Footer />).toJSON();
		//make sure the background-color is the original one
		expect(tree).toHaveStyleRule('background-color', '#FFA500')
	});

});