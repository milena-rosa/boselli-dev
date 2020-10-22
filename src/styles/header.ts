import styled from 'styled-components'
import { darken } from 'polished'

interface HeaderProps {
  backgroundImage: string
}

export const Wrapper = styled.div<HeaderProps>`
  align-items: flex-start;
  background: url(${props => props.backgroundImage}) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: stretch;
  height: 400px;
  width: 99vw;
  z-index: 10000;
`

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  align-items: center;
  align-self: flex-start;
  /* background: ${props => props.theme.colors.background}; */
  /* background: limegreen; */
  color: ${props => props.theme.colors.primary};
  display: flex;
  height: 80px;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  z-index: 1000;

  img {
    height: 56px;
    position: absolute;
    left: calc(50% - 28px);
    top: 8px;
    width: 56px;
  }
`

export const Navigation = styled.nav`
  display: flex;
  font-size: 20px;

  a {
    color: ${props => props.theme.colors.primary};
    font-weight: 400;
    margin-right: 24px;
    text-decoration: none;

    &:hover {
      color: ${props => darken(0.2, props.theme.colors.primary)};
    }

    &:active {
      font-weight: 600;
    }
  }
`

export const SocialMedia = styled.div`
  align-items: center;
  display: flex;

  svg {
    color: ${props => props.theme.colors.primary};
    margin-right: 20px;

    &:hover {
      color: ${props => darken(0.2, props.theme.colors.primary)};
    }

    & + svg {
      margin-left: 20px;
    }
  }
`
