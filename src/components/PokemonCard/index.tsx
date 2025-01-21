import React from 'react'
import { CardContainer } from './styles' // Garanta que o caminho para importação está correto.

interface Props {
  name: string
  image: string
  types: string[]
  onClick: () => void // Certifique-se de que o evento de clique seja passado corretamente.
}

const PokemonCard: React.FC<Props> = ({ name, image, types, onClick }) => (
  <CardContainer onClick={onClick}>
    {' '}
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{types.join(', ')}</p>
  </CardContainer>
)

export default PokemonCard
