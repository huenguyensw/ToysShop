import React from 'react'
import styled from 'styled-components';

const ProductItem: React.FC<{product:any,url:string}> = ({product,url}) => {
  const endPoint = encodeURI(product.image);
  return (
    <ProductBox>
      <ProductImage src={`${url}uploads/${endPoint}`} alt='imageproduct'/>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price:  {product.price} kr</p>
      <p style={{ color: product.quantity <= 0 ? 'red': undefined }}> {product.quantity >0 ? `Quantity: ${product.quantity}` : 'Out-of-stock'}</p>
      <p>For: {product.forObject}</p>
      <AddToCartBtn>Add to cart</AddToCartBtn>
    </ProductBox>
  )
}
const ProductBox = styled.div`
padding: 15px 15px 0 15px;
background-color:#d6edf5;
border: 1px solid #d6edf5;
border-radius: 2px;
text-align: left;
color: #1177a6; 
font-size: 1.1rem;
line-height: 0.5rem;`
const ProductImage = styled.img`
width: 250px;
height: 250px;
object-fit: cover;`

const AddToCartBtn = styled.button`
background-color:unset;
color:#1177a6;
font-size: 1.25rem;
padding: 7px 5px 7px 0;
border:none;
&:focus{
  outline: none;
}`

export default ProductItem
