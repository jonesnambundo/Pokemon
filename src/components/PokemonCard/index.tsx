import { Card, InfoItem, InfoRow, PokemonImage } from './styles'

type Props = {
  name: string
  image: string
  type: string
  category: string
}

const PokemonCard = ({ name, image, type, category }: Props) => {
  return (
    <Card>
      <PokemonImage>
        <img src={image} alt={name} />
      </PokemonImage>
      <InfoRow>
        <InfoItem>{name}</InfoItem>
        <InfoItem>{type}</InfoItem>
      </InfoRow>
      <InfoRow>
        <InfoItem>{category}</InfoItem>
      </InfoRow>
    </Card>
  )
}

export default PokemonCard
