import React from 'react'
import Link from 'next/link'

import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { Container, Navigation, SocialMedia, Wrapper } from '../styles/header'
import logo from '../assets/logo.png'

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Navigation>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/portfolio">
            <a>Portfólio</a>
          </Link>
          <Link href="/contact">
            <a>Contato</a>
          </Link>
        </Navigation>

        <img src={logo} alt="MR" />

        <SocialMedia>
          <Link href="https://github.com/milena-rosa">
            <a>
              <FiGithub size={24} />
            </a>
          </Link>
          <Link href="https://linkedin.com/in/milena-rosa">
            <a>
              <FiLinkedin size={30} />
            </a>
          </Link>
        </SocialMedia>
      </Container>
    </Wrapper>
  )
}

export default Header