import React from 'react'

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  TitleContainer,
  SubtitleContainer
} from './menu-item.styles'

const MenuItem = ({ title, imageUrl, size }) => (
  <MenuItemContainer
    className={`${size}`}
  >
    <BackgroundImage 
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <ContentContainer>
      <TitleContainer>{title}</TitleContainer>
      <SubtitleContainer>Shop Now</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
)

export default MenuItem