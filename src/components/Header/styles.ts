import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${cores.branca};
  position: relative;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25); // Sombra adicionada
  padding-left: 111px; // Espaço à esquerda
  padding-top: 34.96px;
  padding-bottom: 47.95px;
`

export const DocumentationLink = styled.a`
  color: ${cores.preto};
  padding-right: 111px;
  font-size: 16px;
  font-family: inter;
  line-height: 19.36px;
  font-weight: 400px;
  text-decoration: none;
`
