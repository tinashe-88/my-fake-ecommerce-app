import styled from 'styled-components'

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? '380px' : '240px')};
  min-width: 30%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.215, 0.610, 0.355, 1)
    }

    & .content {
      opacity: 0.9;
    }
  }
    
  &:first-child {
    margin-right: 7.5px;
  }
    
  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`

MenuItemContainer.displayName = 'MenuItemContainer'

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

BackgroundImage.displayName = 'BackgroundImage'

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #fff;
  opacity: 0.8;
  position: absolute;

  @media screen and (max-width: 500px) {
    width: 37%;
  }
`

export const TitleContainer = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`

export const SubtitleContainer = styled.span`
  font-weight: lighter;
  font-size: 16px;
`