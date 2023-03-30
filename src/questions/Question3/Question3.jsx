import React from "react";
import { Hero, Sidebar, MainContent, ExtraContent, RelatedImages, RelatedPosts, BaseLayout, Container } from "../../components";

import * as S from "./Question3.styled";


export const Question3 = () => {
	return (
		<Container data-testid='question3'>
			<BaseLayout>
				<S.ContentTopRow>
					<S.LeftColumn>
						<Hero />
						<Sidebar />
					</S.LeftColumn>

					<S.RightColumn>
						<MainContent />
						<ExtraContent />
					</S.RightColumn>

				</S.ContentTopRow>

				<S.ContentBottomRow>
						<RelatedImages />
						<RelatedPosts />
				</S.ContentBottomRow>
			</BaseLayout>
		</Container>
	);
};