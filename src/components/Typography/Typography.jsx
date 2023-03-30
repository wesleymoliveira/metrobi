import * as S from './Typography.styled';

export function Typography({
	children,
	color = 'white',
	size = 'medium',
	as = 'h1'
}) {
	return (
		<S.Wrapper
			children
			data-testid='typography'
			color={color}
			size={size}
			as={as}
		>
			{children}
		</S.Wrapper>
	);
}
