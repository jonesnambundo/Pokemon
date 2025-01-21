import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: ' #FFFFFF',
  preto: ' #414040',
  cinzaligth: ' #D4D7DE',
  cinza: ' #979797',
  cinzaclaro: ' #7A7D80',
  pretoligth: ' #4D5053'
}

interface TypeColors {
  [key: string]: string | undefined
  water: string
  grass: string
  electric: string
  psychic: string
  ice: string
  dragon: string
  dark: string
  fairy: string
  ground: string
  poison: string
  bug: string
}

export const typeColors: TypeColors = {
  fire: '#FDDFDF',
  water: '#DEF3FD',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  psychic: '#EAEDA1',
  ice: '#F8FFFF',
  dragon: '#97B3E6',
  dark: '#707070',
  fairy: '#FCEAFF',
  ground: ' #eeab9d',
  poison: '#b1e9bc',
  bug: '#f8d5a3',
  fighting: '#C22E28',
  ghost: '#735797',
  rock: '#B6A136',
  steel: '#B7B7CE'
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
