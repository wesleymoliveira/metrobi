import { Typography } from '../Typography/Typography';
import * as S from './RelatedPosts.styled';

export function RelatedPosts() {
	return (
		<S.Wrapper data-testid='related-posts'>
			<Typography size='xxlarge'>
				Related posts
			</Typography>
		</S.Wrapper>
	);
}
