import React from 'react'
import useFetchOneProduct from './useFetchOneProduct'
import { useParams } from 'react-router-dom'
import ProductItem from '../components/ProductItem';

const Product: React.FC = () => {
  const  Params = useParams();
  const url = 'http://localhost:3000/'
  const {data: product, isLoading, isError} = useFetchOneProduct({URL:`${url}${Params.id}`})
  return (
    <div>
      {isLoading
      ? <h1>Loading...</h1>
      : isError
      ? <h1>{isError}</h1>
      : <ProductItem product={product} url={url}/>}
    </div>
  )
}

export default Product
