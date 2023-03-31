import React from "react";
import { Hero, Sidebar, MainContent, ExtraContent, RelatedImages, RelatedPosts, BaseLayout } from "../../components";

import * as S from "./Question3.styled";


export const Question3 = () => {
	return (
			<BaseLayout>
				<S.ContentTopRow data-testid='question3'>
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
	);
};