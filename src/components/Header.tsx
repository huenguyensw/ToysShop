import Navigation from './Navigation'
import styled from "styled-components"
import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const Header = () => {
  return (
    <HeaderSection>
      <Navigation />
      <Button>
        <Badge color="secondary">
          <ShoppingCart />
        </Badge>
      </Button>
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
