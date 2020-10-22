import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.color};
    font: 300 16px Montserrat, sans-serif;
  }


`
