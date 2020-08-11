import styled from 'styled-components'

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    width: 93%;
  }
`

export const SignInTitle = styled.h2`
  margin: 10px 0;
`

export const SignInText = styled.span`

`

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    &:last-of-type {
      padding-bottom: 10px;
    }
  }
`