import { screen } from '@testing-library/react';

import { BaseLayout } from './BaseLayout';
import { render, snapshotRenderer } from '../../../utils/testUtils';

describe('<BaseLayout />', () => {
	it('should render the component', () => {
		render(<BaseLayout />);
		
		expect(screen.getByTestId(/base-layout/i)).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const tree = snapshotRenderer(<BaseLayout />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
