import React from 'react'
import { CardContainer } from './styles'
import { typeColors } from '../../styles'

interface Props {
  name: string
  image: string
  types: string[]
  onClick: () => void
}

const PokemonCard: React.FC<Props> = ({ name, image, types, onClick }) => {
  // Definindo a cor de fundo com base no primeiro tipo do Pokémon, ou padrão se não estiver listado
  const backgroundColor = typeColors[types[0]] || '#FFFFFF'

  return (
    <CardContainer
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{types.join(', ')}</p>
    </CardContainer>
  )
}

export default PokemonCard
