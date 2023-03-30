import { screen } from '@testing-library/react';

import { Header } from './Header';
import { render, snapshotRenderer } from '../../../utils/testUtils';

describe('<Header />', () => {
		it('should render the component', () => {
		render(<Header />);
		
		expect(screen.getByTestId(/header/i)).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const tree = snapshotRenderer(<Header />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should match the original background-color', () => {
		const tree = snapshotRenderer(<Header />).toJSON();
		//make sure the background-color is the original one
		expect(tree).toHaveStyleRule('background-color', '#54d5eb')
	});

});
