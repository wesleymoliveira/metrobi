import { Typography } from '../Typography/Typography';
import * as S from './ExtraContent.styled';


export function ExtraContent() {
	return (
		<S.Wrapper data-testid='extra-content'>
			<Typography size='xxlarge'>
				Extra Content
			</Typography>
		</S.Wrapper>
	);
}
