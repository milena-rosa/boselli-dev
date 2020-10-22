import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import { Container, Content } from '../styles/pages/home'
import background from '../../public/desktop.png'
import profile from '../../public/profile.jpg'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Boselli.dev</title>
      </Head>
      <Container>
        <Header backgroundImage={background} />

        <Content>
          <img src={profile} alt="Foto Profile" />

          <p>
            I’m a Full Stack JavaScript developer [Preferred stack: Node.js,
            ReactJS, React Native]. I’m also geologist. Almost physicist. And
            guitarist. And a proto drummer. Like reading a lot and writing
            sometimes. I’m a learner. And teacher.
          </p>
        </Content>
      </Container>
    </>
  )
}

export default Home
