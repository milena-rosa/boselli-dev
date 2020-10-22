import React from 'react'
import Link from 'next/link'

import { FiGithub, FiLinkedin } from 'react-icons/fi'
import {
  Container,
  Navigation,
  SocialMedia,
  Wrapper
} from '../styles/pages/header'
import logo from '../../public/logo.png'

interface HeaderProps {
  backgroundImage?: string
}

const Header: React.FC<HeaderProps> = ({ backgroundImage }) => {
  return (
    <Wrapper backgroundImage={backgroundImage}>
      <div>
        <Container>
          <Navigation>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/portfolio">
              <a>Portfolio</a>
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
      </div>
    </Wrapper>
  )
}

export default Header
