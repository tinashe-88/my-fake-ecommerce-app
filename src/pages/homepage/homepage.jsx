import React from 'react'

import {
  HomepageContainer,
  DirectoryMenuContainer,
  MenuItemContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer
} from './homepage.styles'

const HomePage = () => (
  <HomepageContainer>
    <DirectoryMenuContainer>
      <MenuItemContainer>
        <ContentContainer>
          <TitleContainer>Title</TitleContainer>
          <SubtitleContainer>Shop Now</SubtitleContainer>
        </ContentContainer>
      </MenuItemContainer>
    </DirectoryMenuContainer>
  </HomepageContainer>
)

export default HomePage