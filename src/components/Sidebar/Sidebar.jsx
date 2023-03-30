import { Typography } from '../Typography/Typography';
import * as S from './Sidebar.styled';

export function Sidebar() {
	return (
		<S.Wrapper data-testid='sidebar'>
			<Typography size='xxlarge'>
				Sidebar
			</Typography>
		</S.Wrapper>
	);
}
