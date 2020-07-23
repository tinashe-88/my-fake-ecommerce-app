import styled from 'styled-components'

export const CardContainer = styled.div`
    overflow: hidden;
    border-radius: 3px;
`

export const CardBodyContainer = styled.div`
    padding-bottom: 65px;
`

export const HeadingContainer = styled.h2`
    text-align: center;
`

export const ContactContainer = styled.div`

`

export const SocialContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
`
const IconContainer = styled.div`
  margin: 0.5rem;
  opacity: 1;
  transition: opacity .25s ease-out;
  &:hover{
    opacity: .5;
  }
`

export const TwitterContainer = styled(IconContainer)`
  
`

export const InstagramContainer = styled(IconContainer)`

`

export const GithubContainer = styled(IconContainer)`

`