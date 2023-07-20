import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Cart from '../components/Cart'


const Root: React.FC = () => {
  const [lineItems, setLineItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); 
  const [toggle, setToggle] = useState(false); //show and hide shoppingcart popup when click 'Add to cart' button
  const [isDisplayCart, setIsDisplayCart] = useState(true); // display/hide cart icon on Header
  const [amountOfItems, setAmountOfItems] = useState(null);
  
  return (
    <Main>
        <Header amount={amountOfItems} toggle={toggle} setToggle={setToggle}/>
        <Outlet context={{lineItems,setLineItems, totalPrice, setTotalPrice, toggle, setToggle, isDisplayCart, setIsDisplayCart, setAmountOfItems}}/>
        {toggle&&<Cart lineItems={lineItems} totalPrice={totalPrice} setLineItems={setLineItems} setToggle={setToggle} setAmountOfItems={setAmountOfItems}/>}
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
