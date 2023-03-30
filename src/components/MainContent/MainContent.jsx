import { Typography } from '../Typography/Typography';
import * as S from './MainContent.styled';

export function MainContent() {
	return (
		<S.Wrapper data-testid='main-content'>
			<S.Content>
				<Typography size='xxlarge'>
					Main Content
				</Typography>
				<Typography as="span">
      	  ** If thing do not look right, make sure your browser <br /> is in
      	  "Experimental Mode".
				</Typography>
			</S.Content>
		</S.Wrapper>
	);
}
