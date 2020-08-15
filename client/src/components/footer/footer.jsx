import React from 'react'

import {
    FooterContainer
} from './footer.styles'

export const Footer = () => (
  <>
    <FooterContainer>
      Copyright ©{new Date().getFullYear()}.
      {` `}
      All rights reserved.
      {` `}
    </FooterContainer>
  </>
)

export default Footer