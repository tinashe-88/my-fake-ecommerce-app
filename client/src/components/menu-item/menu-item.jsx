import React from 'react'

import { withRouter } from 'react-router-dom'

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  TitleContainer,
  SubtitleContainer
} from './menu-item.styles'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    className={`${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage 
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className='background-image'
    />
    <ContentContainer
      className='content'
    >
      <TitleContainer>{title}</TitleContainer>
      <SubtitleContainer>Shop Now</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
)

export default withRouter(MenuItem)