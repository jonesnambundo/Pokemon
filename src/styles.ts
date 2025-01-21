import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: ' #FFFFFF',
  preto: ' #414040',
  cinzaligth: ' #D4D7DE',
  cinza: ' #979797',
  cinzaclaro: ' #7A7D80',
  pretoligth: ' #4D5053',
  brand_dark: '#212529',
  brand_green: '#13ce66',
  brand_pink: '#fe8bc4',
  brand_red: '#ff0000 ',
  brand_yellow: '#ffcb2c',
  brand_orange: '#fd7d24',

  darkest_gray: '#333333',
  darker_gray: '#666666',
  dark_gray: '#444444',
  brand_gray: '#c2c2c2',
  light_gray: '#dddddd',
  lighter_gray: '#eeeeee',
  lightest_gray: '#f2f2f2',
  card_gray: '#495057'
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
