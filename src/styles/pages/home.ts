import styled from 'styled-components'

export const Container = styled.div`
  scroll-behavior: auto;
`

export const Content = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  display: flex;
  margin-top: -180px;

  img {
    height: auto;
    min-width: 50%;
  }

  p {
    font-size: 30px;
    margin: 0 96px;
  }
`
