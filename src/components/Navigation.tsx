import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation: React.FC<{setIsDisplayCart:any, setToggle:any, setIsMiniCart:any}> = ({setIsDisplayCart, setToggle, setIsMiniCart}) => {
  
  const handleHideCartIcon = () =>{
    setIsDisplayCart(false);
    setToggle(false);
  }

  const handleDisplayCartIcon = () =>{
    setIsDisplayCart(true);
    setIsMiniCart(true);
  }

  return (
    <Nav>
      <Link to="/"><Logo src='../toysworld_logo-removebg.png' alt='logoimage' onClick={handleDisplayCartIcon}/></Link>
      <LinkToAdmin to="/admin/manageProduct" onClick={handleHideCartIcon}>Admin</LinkToAdmin>
    </Nav>
  )
}

const Logo = styled.img`
width: 130px;
object-fit: cover;
padding:0;`;

const Nav = styled.div`
display: flex;
flex-direction: row;
align-items: center;
font-size: 1.3rem`

const LinkToAdmin = styled(Link)`
color: #1177a6; `
export default Navigation
