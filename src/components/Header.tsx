import Navigation from './Navigation'
import styled from "styled-components"
import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const Header: React.FC<{amount: any, toggle:any, setToggle: any, isDisplayCart:any, setIsDisplayCart:any, setIsMiniCart:any}> = ({amount, toggle, setToggle, isDisplayCart, setIsDisplayCart, setIsMiniCart}) => {
  const handleClick = () =>{
    setToggle(!toggle);
    console.log(toggle);
  }
  return (
    <HeaderSection>
      <Navigation setIsDisplayCart ={setIsDisplayCart} setToggle={setToggle} setIsMiniCart={setIsMiniCart}/>
      {isDisplayCart
      && <Button onClick={handleClick}>
        <Badge color="error" badgeContent={amount} >
          <ShoppingCart />
        </Badge>
      </Button>}
    </HeaderSection>
  )
}

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin:0;
  padding: 7px 0;
  background-color: #d6edf5;
`;

const Button = styled.button`
  background-color: unset;
  border: none;
  &:focus{
    outline: none;
  }
`;


export default Header
