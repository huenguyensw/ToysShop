import React from 'react'
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';


const Cart: React.FC = () => {
  const url = 'http://localhost:3000/'
  const {
    lineItems,
    totalPrice,
    setLineItems,
    setToggle,
    setAmountOfItems,
    setTotalPrice,
    setIsDisplayCart,
    isMiniCart,
    setIsMiniCart } = useOutletContext<any>();

  const resetCart = () => {
    setLineItems([]);
    setToggle(false);
    setAmountOfItems(0);
    setTotalPrice(0);
  }

  const deleteItem = (item: any) => {
    setTotalPrice(totalPrice - item.product.price * item.quantity);
    setLineItems((lineItems: any) => lineItems.filter((i: any) => i != item));
    setAmountOfItems((amount: any) => amount - item.quantity);
  }

  const handleCheckoutPage = () => {
    setToggle(false);
    setIsDisplayCart(false);
    setIsMiniCart(false);
  }

  const handleQuantity = (item: any, e:any) =>{
    const changeOfQuantity = e - item.quantity;
    setLineItems((lineItems:any)=>
    lineItems.map((i:any)=>
    i=== item ? {...i, quantity: e}:i));
    setTotalPrice(totalPrice + item.product.price*changeOfQuantity);
    setAmountOfItems((amount: any) => amount + changeOfQuantity);

  }
  return (
    <CartWapper className={isMiniCart ? 'miniCart' : 'undefined'}>
      <Table>
        <tbody>
          {lineItems.map((item: any, key: any) =>
            <tr key={key}>
              <TD><ProductImage src={`${url}uploads/${item.product.image}`} alt='imageproduct' /></TD>
              <TD>{item.product.title.length <= 18 ? item.product.title : <span>{item.product.title.substring(0, 15)}...</span>}</TD>
              <TD>
                <TextField
                  id="standard-number"
                  type="number"
                  value={item.quantity}
                  onChange={(e:any)=>handleQuantity(item, e.target.value)}
                  color='primary'
                  variant="standard"
                  sx={{ width: '3ch' }}
                  inputProps={{ min: 1 , style: {color: '#1177a6'},}} // Set the min attribute to 0
                />
                st x {item.product.price}kr
              </TD>
              <TD onClick={() => deleteItem(item)}><ClearIcon fontSize='small' /></TD>
            </tr>
          )}
        </tbody>
      </Table>
      <br />
      <BottomBar>
        <p>Total price: {totalPrice}kr</p>
        {isMiniCart &&
          <>
            <ResetBtn onClick={resetCart}>Reset Cart</ResetBtn>
            <CheckoutLink to={"/checkout"} onClick={handleCheckoutPage}>Proceed to checkout</CheckoutLink>
          </>}
      </BottomBar>
    </CartWapper>
  )
}

export default Cart

const CartWapper = styled.div`
width: 600px;
&.miniCart {
  position: absolute;
  top:0px;
  padding-left: 20px;
  right: 0px;
  width: 400px;
  background-color: #FFFACD;
}
`

const Table = styled.table`
border-collapse: collapse;
width: 100%;`

const TD = styled.td`
  border: none;
  text-align: center;
  padding: 10px;
  font-size: 1rem;`

const ProductImage = styled.img`
width: 50px;
height: 50px;
object-fit:cover;`

const BottomBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`

const ResetBtn = styled.button`
background-color: unset;
color: #1177a6;
border:none;
&:focus{
  outline:none;
}`
const CheckoutLink = styled(Link)`
background-color: unset;
color: #1177a6;
&:focus{
  outline:none;
}
`