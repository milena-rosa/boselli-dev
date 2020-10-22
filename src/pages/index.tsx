import React from 'react'
import Header from '../components/header'

import { Container } from '../styles/home'
import background from '../assets/desktop.png'

const Home: React.FC = () => {
  return (
    <Container>
      <Header backgroundImage={background} />
    </Container>
  )
}

export default Home
