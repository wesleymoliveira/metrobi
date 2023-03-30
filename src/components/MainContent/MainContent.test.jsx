import { screen } from '@testing-library/react';

import { MainContent } from './MainContent';
import { render, snapshotRenderer } from '../../../utils/testUtils';

describe('<MainContent />', () => {
		it('should render the component', () => {
		render(<MainContent />);
		
		expect(screen.getByTestId(/main-content/i)).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const tree = snapshotRenderer(<MainContent />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should match the original background-color', () => {
		const tree = snapshotRenderer(<MainContent />).toJSON();
		//make sure the background-color is the original one
		expect(tree).toHaveStyleRule('background-color', '#f5c632')
	});

});