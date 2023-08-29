import React,{useState, useEffect} from 'react'
import useFetchAllProducts from '../useFetchAllProducts'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const ManageProducts: React.FC = () => {
  const URL = 'http://localhost:3000/toys';
  const { data, isError, isLoading } = useFetchAllProducts({ url: URL })
  const [products, setProducts] = useState<any[]>([]);

  useEffect(()=>{
    if(data){
      setProducts(data);
    }
  },[data])

  const removeProduct = async (id:any) =>{
    try{
      const res = await axios.delete(`${URL}/${id}`);
      if(res.status !== 200){
        throw new Error('Error when deleting product'+ res.status);
      }
      setProducts(products.filter((product:any) => product._id !== id))
    }catch(error){
      console.log(error);
    }
  }
  return (
    <HeaderContent>
      <HeaderSection>
        <h2>Manage Products</h2>
        <CreateLink to={"/admin/addProduct"}>Create Product</CreateLink>
      </HeaderSection>
        {isLoading
          ? <h1>Loading...</h1>
          : isError
            ? <h1>{isError}</h1>
            : (<Table>
              <thead>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Spend for</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </thead>
              <tbody>
                {products.length == 0
                  ? <tr>
                      <td>
                      No product is available!
                      </td>
                  </tr>
                  : products.map((product: any) => {
                    return (
                      <TableRow key={product._id}>
                        <TableData>{product.title}</TableData>
                        <TableData>{product.description}</TableData>
                        <TableData>{product.price}</TableData>
                        <TableData>{product.quantity}</TableData>
                        <TableData>{product.forObject}</TableData>
                        <TableData>{product.date}</TableData>
                        <TableData>
                          <EditLink to={"/admin/updateProduct/" + `${product._id}`}>Edit</EditLink>
                          <DeleteButton onClick={() => removeProduct(product._id)}>Delete</DeleteButton>
                        </TableData>
                      </TableRow>
                    )
                  }
                  )}
              </tbody>
            </Table>)}
    </HeaderContent>
  )
}

const HeaderContent = styled.div`
padding: 0 10px;`

const HeaderSection = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
font-size: 1.4rem`;

const Table = styled.table`
border-collapse: collapse;
  width: 100%;`

const TableHead = styled.th`
border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-size: 1.3rem;
`

const TableData = styled.td`
border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-size: 1.1rem;
`
const TableRow = styled.tr`
&:nth-child(even) {
  background-color: #dddddd;
}`

const CreateLink = styled(Link)`
text-decoration: none;
color: #1177a6;`

const EditLink = styled(Link)`
text-decoration: none;
color: #1177a6;
font-size: 1.1rem;`

const DeleteButton = styled.button`
text-decoration: none;
border: none;
font-size: 1.1rem;
color: #1177a6;
background-color: unset;
&:focus{outline:none};`

export default ManageProducts
