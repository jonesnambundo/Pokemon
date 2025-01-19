import { DocumentationLink, HeaderContainer } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderContainer>
    <img src={logo} alt="Pokemon" />
    <DocumentationLink href="#">Documentação</DocumentationLink>
  </HeaderContainer>
)

export default Header
