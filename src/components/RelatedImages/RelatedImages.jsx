import { Typography } from '../Typography/Typography';
import * as S from './RelatedImages.styled';

export function RelatedImages() {
	return (
		<S.Wrapper data-testid='related-images'>
			<Typography size='xxlarge'>
				Related images
			</Typography>
		</S.Wrapper>
	);
}
