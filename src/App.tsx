import Header from './components/Header'
import PokemonList from './components/PokemonList'

import { GlobalCss, Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Container>
        <PokemonList />
      </Container>
    </>
  )
}

export default App
