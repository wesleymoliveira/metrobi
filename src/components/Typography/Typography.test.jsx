import { screen } from '@testing-library/react';

import { Typography } from './Typography';
import { render, snapshotRenderer } from '../../../utils/testUtils';


describe('<Typography />', () => {
		it('should render the component', () => {
		render(<Typography />);
		
		expect(screen.getByTestId(/typography/i)).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const tree = snapshotRenderer(<Typography />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should match the original sizes', () => {
		const standard = snapshotRenderer(<Typography>Default</Typography>).toJSON();

		const small = snapshotRenderer(<Typography size='small'>Small</Typography>).toJSON();

		const large = snapshotRenderer(<Typography size='large'>Large</Typography>).toJSON();

		const xLarge = snapshotRenderer(<Typography size='xlarge'>xLarge</Typography>).toJSON();

		const xxLarge = snapshotRenderer(<Typography size='xxlarge'>xxLarge</Typography>).toJSON();


		
		expect(standard).toHaveStyleRule('font-size', '1.6rem');
		expect(small).toHaveStyleRule('font-size', '1.4rem');
		expect(large).toHaveStyleRule('font-size', '1.8rem');
		expect(xLarge).toHaveStyleRule('font-size', '2.0rem');
		expect(xxLarge).toHaveStyleRule('font-size', '2.8rem');
	});

});
