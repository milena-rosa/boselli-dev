import React, { useCallback, useMemo } from 'react'
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import api from '../services/api'
import Header from '../components/header'
import {
  Container,
  RepositoriesWrapper,
  RepositoryCard,
  CardHeader
} from '../styles/portfolio'
import Icon from '../components/icon'

interface Repository {
  id: number
  description: string
  html_url: string
  language: string
  name: string
}

interface PortfolioProps {
  repositories: Array<Repository>
}

const Portfolio: React.FC<PortfolioProps> = ({ repositories }) => {
  return (
    <>
      <Head>
        <title>Portfólio | Boselli.dev</title>
      </Head>
      <Header />
      <Container>
        <RepositoriesWrapper>
          {repositories.map(repository => (
            <RepositoryCard key={repository.id}>
              <CardHeader>
                <div>
                  <strong>{repository.name}</strong>

                  <Link href={repository.html_url}>
                    <a target="_blank">
                      <FiGithub size={20} color="#FDCD49" />
                    </a>
                  </Link>
                </div>
                {repository.language && <Icon language={repository.language} />}
              </CardHeader>
              <p>{repository.description}</p>
            </RepositoryCard>
          ))}
        </RepositoriesWrapper>
      </Container>
    </>
  )
}

export default Portfolio

export const getServerSideProps: GetServerSideProps<PortfolioProps> = async () => {
  const response = await api.get<Repository[]>(
    '/users/milena-rosa/repos?type=public&per_page=100&sort=desc'
  )
  return {
    props: {
      repositories: response.data
    }
  }
}
