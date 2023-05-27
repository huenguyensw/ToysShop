import React from 'react'
import useFetchAllProducts from './useFetchAllProducts'
import ProductItem from '../components/ProductItem'
import styled from 'styled-components'

const Products: React.FC = () => {
  const url = 'http://localhost:3000/'
  const {data:products, isError,isLoading} = useFetchAllProducts({url: 'http://localhost:3000/toys'})
  return (
    <Main>
      <BannerBox>
        <BannerImage src='../world_of_toys-removebg.png' alt='bannerimage'/>
        <BannerImage src='../banner2.png' alt='bannerimage'/>
      </BannerBox>
      <ProductsContainer>
      {isLoading
      ? <h1>Loading...</h1>
      : isError
      ? <h1>{isError}</h1>
      : products.map((product,index)=><ProductItem key={index} product={product} url={url}/>)}
      </ProductsContainer>
    </Main>
  )
}
const BannerBox = styled.section`
display: flex;
flex-direction: row;
align-items: center;`
const BannerImage = styled.img`
margin:15px auto;`

const Main = styled.div`
display: flex;
flex-direction: column;
padding: 0 40px 40px 40px;`

const ProductsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
column-gap: 40px;
row-gap: 20px;`

export default Products
