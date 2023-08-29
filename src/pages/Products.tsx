import React from 'react'
import useFetchAllProducts from './useFetchAllProducts'
import ProductItem from '../components/ProductItem'
import styled from 'styled-components'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { motion } from "framer-motion";

const Products: React.FC = () => {
  const url = 'http://localhost:3000/'
  const { data: products, isError, isLoading } = useFetchAllProducts({ url: 'http://localhost:3000/toys' })
  return (
    <Main>
      <BannerBox>
        <BannerImage src='../world_of_toys-removebg2.png' alt='bannerimagone' />
        <BannerImage src='../banner2-removebg.png' alt='bannerimagetwo' />
      </BannerBox>
      <Title><motion.div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
        animate={{ y: 100 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <ArrowDownwardIcon sx={{fontSize: 49}} />
      </motion.div>Explore here</Title>
      <ProductsContainer>
        {isLoading
          ? <h1>Loading...</h1>
          : isError
            ? <h1>{isError}</h1>
            : products.map((product, index) => <ProductItem key={index} product={product} url={url} multipleview='true' />)}
      </ProductsContainer>
    </Main>
  )
}
const BannerBox = styled.section`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;`

const BannerImage = styled.img`
margin: 15px auto; `

const Title = styled.h1`
position: absolute;
top: 200px;
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
column-gap: 15px;
justify-content: left;
row-gap: 20px;`

export default Products
