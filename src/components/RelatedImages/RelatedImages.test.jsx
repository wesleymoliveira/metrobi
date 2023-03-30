import { screen } from '@testing-library/react';

import { RelatedImages } from './RelatedImages';
import { render, snapshotRenderer } from '../../../utils/testUtils';

describe('<RelatedImages />', () => {
		it('should render the component', () => {
		render(<RelatedImages />);
		
		expect(screen.getByTestId(/related-images/i)).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const tree = snapshotRenderer(<RelatedImages />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should match the original background-color', () => {
		const tree = snapshotRenderer(<RelatedImages />).toJSON();
		//make sure the background-color is the original one
		expect(tree).toHaveStyleRule('background-color', '#2BB673')
	});

});
