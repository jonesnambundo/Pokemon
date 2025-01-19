import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${cores.branca};
  position: relative;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1219px;
  width: 100%;
  margin: 0 auto;
  padding-top: 34.96px;
  padding-bottom: 46.97px;

  a {
    color: ${cores.preto};
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    line-height: 19.36px;
    font-weight: 400;
    text-decoration: none;
  }
`
