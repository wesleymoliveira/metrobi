import { screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';
import { render, snapshotRenderer } from '../../../utils/testUtils';

describe('<Sidebar />', () => {
		it('should render the component', () => {
		render(<Sidebar />);
		
		expect(screen.getByTestId(/sidebar/i)).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const tree = snapshotRenderer(<Sidebar />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should match the original background-color', () => {
		const tree = snapshotRenderer(<Sidebar />).toJSON();
		//make sure the background-color is the original one
		expect(tree).toHaveStyleRule('background-color', '#9FC363')
	});

});
