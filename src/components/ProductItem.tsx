import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductItem: React.FC<{ product: any, url: string, multipleview: string }> = ({ product, url, multipleview }) => {
  const endPoint = encodeURI(product.image);
  const [quantity, setQuantity] = useState<number>(0);

  const handleNumberOfItem = (e: any) => {
    setQuantity(e.target.value);
  }

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  }
  const handleDecrementQuantity = () => {
    if(quantity > 0){setQuantity(quantity - 1);}
    else{setQuantity(0)};
  }

  return (
    <ProductBox className={multipleview ==='true' ? undefined : 'singlebox'}>
      <ProductImage src={`${url}uploads/${endPoint}`} alt='imageproduct' className={multipleview ==='true' ? undefined : 'singleMode'} />
      <ProductName>
        {product.title.length <= 18 ? product.title : <span>{product.title.substring(0, 15)}...</span>} {product.quantity <= 0 && <span style={{ color: 'red', fontSize: 14 }}>Out-of-stock</span>}
        {product.title.length > 18 &&<Tooltip className='Tooltip'>{product.title}</Tooltip>}
      </ProductName>
      {multipleview === 'false' && <ProductDescription rows={10} cols={60} readOnly>{product.description}</ProductDescription>}
      <p>Price:  {product.price} kr</p>
      <p>Age: {product.forObject}</p>

      {multipleview === 'true'
        && (<>
          <br />
          <Link to={`/products/${product._id}`}>Read more...</Link>
          <br />
        </>)}
      <QuantitySection className={multipleview ==='true' ? undefined : 'QuantitySingleView'}>
        <ChangeQuantityBtn onClick={handleIncrementQuantity}>+</ChangeQuantityBtn>
        <QuantityField type='text' value={quantity} onChange={handleNumberOfItem}></QuantityField>
        <ChangeQuantityBtn onClick={handleDecrementQuantity}>-</ChangeQuantityBtn>
      </QuantitySection>
      <AddToCartBtn>Add to cart</AddToCartBtn>
    </ProductBox>
  )
}
const ProductBox = styled.div`
width: 300px;
padding: 15px 15px 0 15px;
background-color:#d6edf5;
border: 1px solid #d6edf5;
border-radius: 2px;
text-align: left;
color: #1177a6; 
font-size: 1.1rem;
line-height: 0.5rem;
&.singlebox{
  width: unset;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1rem;
  border-bottom: 1.5px solid;
  border-top: 1.5px solid;
}`

const ProductName = styled.h2`
position: relative;
&:hover .Tooltip {
  visibility: visible;
}
`

const ProductDescription = styled.textarea`
background-color: #d6edf5;
border:none;
font-size: 1.3rem;
overflow: auto;
color: #1177a6;`

const Tooltip = styled.span`
visibility: hidden;
width: 500px;
margin: 2px;
line-height: 1.5rem;
background-color:white;
color: #1177a6;
font-size: 1rem;
font-weight: 400;
text-align: center;
border-radius: 6px;
padding-left: 0; 
position: absolute;
z-index:1;
top: 20px;
left: 30%;

`



const ProductImage = styled.img`
width: 250px;
height: 250px;
object-fit: cover;
&.singleMode{
  width: unset;
  height: unset;
}`

const AddToCartBtn = styled.button`
background-color:unset;
color:#1177a6;
font-size: 1.25rem;
padding: 7px 5px 7px 0;
border:none;
&:focus{
  outline: none;
}`

const ChangeQuantityBtn = styled.button`
border: none;
padding: 4px;
background-color: unset;
font-size: 1.7rem;
&:focus{
  outline: none
};`

const QuantityField = styled.input`
width: 45px;
padding: 6px 4px;
border: 1.5px;
text-align: center;
font-size: 1.1rem; `

const QuantitySection = styled.div`
margin: 10px 0;
display: flex;
flex-direction: row;
justify-content: left;
align-items: center;
padding-left: 0;
&.QuantitySingleView{
  justify-content: center;
}`
export default ProductItem
