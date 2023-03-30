import { Typography } from '../Typography/Typography';
import * as S from './Hero.styled';

export function Hero() {
	return (
		<S.Wrapper data-testid='hero'>
			<Typography size='xxlarge'>
				Hero
			</Typography>
		</S.Wrapper>
	);
}
