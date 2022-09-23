import { Link } from 'react-router-dom';
 
import { Container, Icon} from './styles';


const Header = ({to, children, icon}) => {
  return (
    <>
    <Container>
        <Link to={to}>{children}</Link>
        <Icon calassName="icon">
            {icon}
        </Icon>
      </Container>
    </>
  )
}

export default Header