import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 160px;
  width: 100vw;
`

export const Container = styled.div`
  align-items: center;
  /* background: ${props => props.theme.colors.background}; */
  /* background: limegreen; */
  color: ${props => props.theme.colors.primary};
  display: flex;
  height: 80px;
  justify-content: space-between;
  position: relative;
  width: 80%;

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
