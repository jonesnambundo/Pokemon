import PokemonCard from '../PokemonCard'
import { Container, List } from './styles'

const PokemonList = () => (
  <Container>
    <List>
      <PokemonCard
        name="Bulbasaur"
        image="//placeholder.it/280x208"
        type="Tipo planta"
        category="Comum"
      />

      <PokemonCard
        name="Bulbasaur"
        image="//placeholder.it/280x208"
        type="Tipo planta"
        category="Comum"
      />

      <PokemonCard
        name="Bulbasaur"
        image="//placeholder.it/280x208"
        type="Tipo planta"
        category="Comum"
      />

      <PokemonCard
        name="Bulbasaur"
        image="//placeholder.it/280x208"
        type="Tipo planta"
        category="Comum"
      />
    </List>
  </Container>
)

export default PokemonList
