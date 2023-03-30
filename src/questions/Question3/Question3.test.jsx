import { screen } from '@testing-library/react';

import { Question3 } from './Question3';
import { render, snapshotRenderer } from '../../../utils/testUtils';

describe('<Question3 />', () => {
	it('should render the component', () => {
		render(<Question3 />);
		
		expect(screen.getByTestId(/question3/i)).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const tree = snapshotRenderer(<Question3 />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
