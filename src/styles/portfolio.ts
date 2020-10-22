import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  /* background: purple; */
  display: flex;
  justify-content: center;
  margin: 50px;
`

export const RepositoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`

export const RepositoryCard = styled.div`
  background: ${props => props.theme.colors.color};
  border-radius: 8px;
  color: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* min-height: 240px; */
  padding: 24px;
`

export const CardHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  > div {
    align-items: center;
    display: flex;
    /* margin-bottom: 16px; */
    justify-content: center;

    svg {
      margin-left: 8px;
      color: ${props => props.theme.colors.primary};
      font-weight: 400;
      text-decoration: none;

      &:hover {
        color: ${props => darken(0.2, props.theme.colors.primary)};
      }
    }
  }

  strong {
    font-size: 20px;
    /* margin-bottom: 8px; */
  }
`
