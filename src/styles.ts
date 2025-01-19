import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: ' #FFFFFF',
  preto: ' #414040',
  cinzaligth: ' #D4D7DE',
  cinza: ' #979797',
  cinzaclaro: ' #7A7D80',
  pretoligth: ' #4D5053'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body {
  background-color:${cores.branca}
}
`
