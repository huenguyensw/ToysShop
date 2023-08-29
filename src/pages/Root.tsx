import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'


const Root: React.FC = () => {
  const [lineItems, setLineItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); 
  const [toggle, setToggle] = useState(false); //show and hide shoppingcart popup when click 'Add to cart' button
  const [isDisplayCart, setIsDisplayCart] = useState(true); // display/hide cart icon on Header
  const [amountOfItems, setAmountOfItems] = useState<number>(0);
  const [isMiniCart, setIsMiniCart] = useState(true);

  
  return (
    <Main>
        <Header amount={amountOfItems} toggle={toggle} setToggle={setToggle} isDisplayCart={isDisplayCart} setIsDisplayCart={setIsDisplayCart} setIsMiniCart={setIsMiniCart} />
        <Outlet context={{lineItems,setLineItems, totalPrice, setTotalPrice, toggle, setToggle, isDisplayCart, setIsDisplayCart, setAmountOfItems, isMiniCart, setIsMiniCart}}/>
        <Footer/>
    </Main>
  )
}
const Main = styled.div`
display: grid;
width:100%;
grid-template-areas:
 "header"
 "body"
 "footer";
 overflow-x:hidden;`

export default Root
