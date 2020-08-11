import styled, { css } from 'styled-components'

const transitionAnimation = css`
  transition: background-color .15s ease-in;
  transition: color .15s ease-in;
`

const buttonStyles = css`
  background-color: #000;
  color: white;
  border: none;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    transition: ${transitionAnimation};
  }
`

const invertedButtonStyles = css`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;

  &:hover {
    background-color: #000;
    color: #fff;
    transition: ${transitionAnimation};
  }
`

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #358ae8;
    border: none;
    transition: ${transitionAnimation};
  }
`

const getButtonStyles = props => {
  if (props.isGoogleSignIn){
    return googleSignInStyles
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px;
  font-size: 15px;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media(max-width: 800px){
    margin: 10px 0;
  }

  ${getButtonStyles}
`