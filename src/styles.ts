import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: ' #FFFFFF',
  preto: ' #414040',
  cinzaligth: ' #D4D7DE',
  cinza: ' #979797',
  cinzaclaro: ' #7A7D80',
  pretoligth: ' #4D5053'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body {
  background-color: ${cores.branca};
  color: ${cores.preto};
}
`
export const Container = styled.div`
  max-width: 1219px;
  width: 100%;
  margin: 0 auto;
`
