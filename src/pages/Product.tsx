import React from 'react'
import useFetchOneProduct from './useFetchOneProduct'
import { useParams } from 'react-router-dom'
import ProductItem from '../components/ProductItem';

const Product: React.FC = () => {
  const  Params = useParams();
  const url = 'https://database-ecommerce-production.up.railway.app/'
  const {data: product, isLoading, isError} = useFetchOneProduct({URL:`${url}toys/${Params.id}`})
  return (
    <div>
      {isLoading
      ? <h1>Loading...</h1>
      : isError
      ? <h1>{isError}</h1>
      : <ProductItem product={product} url={url} multipleview='false'/>}
    </div>
  )
}

export default Product
