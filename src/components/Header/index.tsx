import { HeaderContainer, HeaderContent } from './styles'
import Logo from '../../assets/images/Design sem nome.png'

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <img src={Logo} alt="Logo do Pokemon" />
      <a href="#">Documentação</a>
    </HeaderContent>
  </HeaderContainer>
)
export default Header
