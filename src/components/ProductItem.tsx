import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Cart from './Cart'

const ProductItem: React.FC<{ product: any, url: string, multipleview: string }> = ({ product, url, multipleview }) => {
  const endPoint = encodeURI(product.image);
  const [quantity, setQuantity] = useState<number>(1);
  const { 
    lineItems,
    setLineItems, 
    toggle, 
    setToggle, 
    totalPrice, 
    setTotalPrice, 
    setAmountOfItems
   } = useOutletContext<any>();
  const CartPopUpInterval = useRef(0);

  const handleQuantity = (e: any) => {
    setQuantity(e.target.value);
  }
  const handleAddToCart = () => {
    setToggle(true);
    setAmountOfItems((amount: number) => amount + Number(quantity));
    let isExist = lineItems.some((element: any) => element.product._id == product._id);
    if (!isExist) {
      setTotalPrice((totalPrice: any) => totalPrice + product.price * Number(quantity));
      setLineItems([...lineItems, { product: product, quantity: Number(quantity) }]);

    } else {
      setLineItems(lineItems.map((order: any) => {
        if (order.product._id == product._id) {
          setTotalPrice(totalPrice + order.product.price * quantity);
          return ({ ...order, quantity: Number(order.quantity) + Number(quantity) });
        } else {
          return order;
        }
      }))
    }

    //scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    //set timeout to show Cart popup
    clearInterval(CartPopUpInterval.current);
    CartPopUpInterval.current = setTimeout(() => {
      setToggle(false);
    }, 3000);

  }

  return (
    <ProductBox className={multipleview === 'true' ? undefined : 'singlebox'}>
      <ProductImage src={`${url}uploads/${endPoint}`} alt='imageproduct' className={multipleview === 'true' ? undefined : 'singleMode'} />
      <div>
        <ProductName>
          {product.title.length <= 18 ? product.title : <span>{product.title.substring(0, 15)}...</span>}
          {product.quantity <= 0 && <span style={{ color: 'red', fontSize: 14 }}>Out-of-stock</span>}
          {product.title.length > 18 && <Tooltip className='Tooltip'>{product.title}</Tooltip>}
        </ProductName>
        {multipleview === 'false'
          && <ProductDescription readOnly>{product.description}</ProductDescription>}
        <ProductOtherInfo>Price:  {product.price} kr</ProductOtherInfo>
        <ProductOtherInfo>Age: {product.forObject}</ProductOtherInfo>
        {multipleview === 'true'
          && (<>
            <br />
            <ReadmoreLink to={`/products/${product._id}`}>Read more...</ReadmoreLink>
          </>)}
        <AddToCart>
          <TextField
            id="standard-number"
            type="number"
            value={quantity}
            onChange={handleQuantity}
            color='secondary'
            variant="standard"
            sx={{ width: '8ch' }}
            inputProps={{ min: 1, style: {color: '#1177a6'} }} // Set the min attribute to 1
            className={multipleview === 'true' ? undefined : 'QuantitySingleView'}
          />
          <AddToCartBtn onClick={handleAddToCart}>Add to cart</AddToCartBtn>
        </AddToCart>
      </div>
      {toggle && <Cart/>}
    </ProductBox>
  )
}
const ProductBox = styled.div`
width: 250px;
padding: 15px 15px 0 15px;
background-color:#d6edf5;
border: 1px solid #d6edf5;
border-radius: 2px;
text-align: left;
color: #1177a6; 
font-size: 1rem;
box-shadow: 5px 10px 18px #888888;
&.singlebox{
  display: flex;  
  flex-direction: row;
  column-gap: 30px;
  width: unset;
  text-align: left;
  padding-left: 40px;
  padding-bottom: 40px;
  font-size: 1rem;
  line-height: 1rem;
  background-color: white;
  
};

`

const ProductName = styled.p`
position: relative;
&:hover .Tooltip {
  visibility: visible;
}
`

const ProductOtherInfo = styled.p`
font-size: 0.9rem;`

const ReadmoreLink = styled(Link)`
font-size: 0.9rem;
color: #1177a6;
`

const ProductDescription = styled.textarea`
color: #1177a6;
border:none;
font-size: 1rem;
overflow: auto;
overflow:auto;
&:focus{
  outline:none;
}
`

const Tooltip = styled.span`
visibility: hidden;
width: 300px;
margin: 2px;
line-height: 1.5rem;
background-color:lightgray;
color: #1177a6;
font-size: 1rem;
font-weight: 400;
text-align: left;
border-radius: 6px;
padding-left: 0; 
position: absolute;
z-index:1;
top: 15px;
left: 0;
`



const ProductImage = styled.img`
width: 200px;
height: 200px;
object-fit: cover;
&.singleMode{
  width: 300px;
  height: 300px;
}`

const AddToCartBtn = styled.button`
background-color:unset;
color:#1177a6;
font-size: 1rem;
border: none;
&:focus{
  outline: none;
};
`

const AddToCart = styled.div`
margin-top: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;`
export default ProductItem
