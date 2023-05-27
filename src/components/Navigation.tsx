import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = () => {
  return (
    <Nav>
      <Link to="/"><Logo src='../toysworld_logo-removebg.png' alt='logoimage'/></Link>
      <Link to="/admin/manageProduct">Admin</Link>
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


export default Navigation
