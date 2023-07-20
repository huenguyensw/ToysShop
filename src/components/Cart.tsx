import React from 'react'
import styled from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';


const Cart: React.FC<{ lineItems: any, totalPrice: any, setLineItems: any, setToggle:any, setAmountOfItems:any }> = ({ lineItems, totalPrice, setLineItems, setToggle,setAmountOfItems }) => {
  const url = 'https://database-ecommerce-production.up.railway.app/'
  
  const resetCart = () =>{
    setLineItems([]);
    setToggle(false);
    setAmountOfItems(0);
  }

  const deleteItem = (item: any) =>{
    setLineItems((lineItems:any) => lineItems.filter((i:any)=>i!=item));
  }

  return (
    <CartWapper>
      <Table>
        <tbody>
          {lineItems.map((item: any, key: any) =>
            <tr key={key}>
              <TD><ProductImage src={`${url}uploads/${item.product.image}`} alt='imageproduct'/></TD>
              <TD>{item.product.title.length <= 18 ? item.product.title : <span>{item.product.title.substring(0, 15)}...</span>}</TD>
              <TD>{item.quantity}st</TD>
              <TD>{item.quantity * item.product.price}kr</TD>
              <TD onClick={()=>deleteItem(item)}><ClearIcon/></TD>
            </tr>
          )}
        </tbody>
      </Table>
      <hr/>
      <BottomBar>
        <p>Total price: {totalPrice}kr</p>
        <Btn onClick={resetCart}>Reset Cart</Btn>
        <Btn>Proceed to checkout</Btn>
      </BottomBar>
    </CartWapper>
  )
}

export default Cart

const CartWapper = styled.div`
position: absolute;
top:60px;
padding-left: 20px;
right: 10px;
width: 400px;
background-color: #FFFACD`

const Table = styled.table`
border-collapse: collapse;`

const TD = styled.td`
  border: none;
  text-align: left;
  padding: 10px;
  font-size: 1rem;`

const ProductImage = styled.img`
width: 50px;
height: 50px;
object-fit:cover;`

const BottomBar = styled.div`
display: flex;
flex-direction: row;
justify-content: evenly;
padding: 10px;
`

const Btn = styled.button`
background-color: unset;
`