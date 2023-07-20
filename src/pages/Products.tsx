import React from 'react'
import useFetchAllProducts from './useFetchAllProducts'
import ProductItem from '../components/ProductItem'
import styled from 'styled-components'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Products: React.FC = () => {
  const url = 'https://database-ecommerce-production.up.railway.app/'
  const {data:products, isError,isLoading} = useFetchAllProducts({url: 'https://database-ecommerce-production.up.railway.app/toys'})
  return (
    <Main>
      <BannerBox>
        <BannerImage src='../world_of_toys-removebg.png' alt='bannerimagone'/>
        <BannerImage src='../banner2.png' alt='bannerimagetwo'/>
      </BannerBox>
      <Title>Explore here <ArrowDownwardIcon fontSize='large'/></Title>
      <ProductsContainer>
      {isLoading
      ? <h1>Loading...</h1>
      : isError
      ? <h1>{isError}</h1>
      : products.map((product,index)=><ProductItem key={index} product={product} url={url} multipleview='true'/>)}
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

const Title = styled.h1`
position: absolute;
top: 280px;
color: #056c05c7;
left: 40%; `

const Main = styled.div`
position: relative;
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
