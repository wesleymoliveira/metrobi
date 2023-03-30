import { screen } from '@testing-library/react';

import { RelatedPosts } from './RelatedPosts';
import { render, snapshotRenderer } from '../../../utils/testUtils';

describe('<RelatedPosts />', () => {
		it('should render the component', () => {
		render(<RelatedPosts />);
		
		expect(screen.getByTestId(/related-posts/i)).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const tree = snapshotRenderer(<RelatedPosts />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should match the original background-color', () => {
		const tree = snapshotRenderer(<RelatedPosts />).toJSON();
		//make sure the background-color is the original one
		expect(tree).toHaveStyleRule('background-color', '#F1CCDE')
	});

});
