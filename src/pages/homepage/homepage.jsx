import React from 'react'

import Directory from '../../components/directory-menu/directory-menu'

import {
  HomepageContainer,
} from './homepage.styles'

const HomePage = ({ history }) => (
  <HomepageContainer>
    <Directory history={history}/>
  </HomepageContainer>
)

export default HomePage