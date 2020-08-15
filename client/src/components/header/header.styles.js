import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const OptionContainerStyles = css`
  color: #000;
  padding: 10px 15px;
  cursor: pointer; 
`

const HoverLinks = css`
  color: #ffa3d7;
  transition: color .15s ease-in;
`

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid #f4f4f4;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding-top: 11px;
  color: #fff;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    width: 80%; 
  }
`

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}

  &:hover {
    ${HoverLinks}
  }

  @media screen and (max-width: 500px) {
    font-size: 12pt;
  }
`

OptionLink.displayName = 'OptionLink'

export const OptionDiv = styled.div`
  ${OptionContainerStyles}

  &:hover {
      ${HoverLinks}
  }
`