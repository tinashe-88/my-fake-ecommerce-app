import React from 'react'

import { 
  TwitterIcon,
  GithubIcon,
  InstagramIcon
} from '../../components/social-icons/social-icons'

import {
  ContactContainer,
  CardContainer,
  CardBodyContainer,
  HeadingContainer,
  SocialContainer,
  TwitterContainer,
  InstagramContainer,
  GithubContainer
} from './contact.styles'

const ContactPage = () =>  {
  return (
    <ContactContainer>
      <CardContainer>
        <CardBodyContainer>
          <HeadingContainer>Let's connect</HeadingContainer>
          <SocialContainer>
            <TwitterContainer>
              <TwitterIcon/>
            </TwitterContainer>
            <InstagramContainer>
              <InstagramIcon/>
            </InstagramContainer>
            <GithubContainer>
              <GithubIcon/>
            </GithubContainer>
          </SocialContainer>
        </CardBodyContainer>
      </CardContainer>
    </ContactContainer>
  )
}

export default ContactPage