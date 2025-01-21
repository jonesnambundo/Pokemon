import { HeaderContainer, HeaderContent } from './styles'
import Logo from '../../assets/images/Design sem nome.png'

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <a href="./">
        <img src={Logo} alt="Logo do Pokémon" />
      </a>
      <a href="./">Documentação</a>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
