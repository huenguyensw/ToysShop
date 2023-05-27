import React from 'react'
import useFetchAllProducts from '../useFetchAllProducts'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ManageProducts: React.FC = () => {
  const { data: products, isError, isLoading } = useFetchAllProducts({ url: 'http://localhost:3000/toys' })
  return (
    <HeaderContent>
      <HeaderSection>
        <h2>Manage Products</h2>
        <CreateLink to={"/admin/addProduct"}>Create Product</CreateLink>
      </HeaderSection>
      <div>
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
                  ? <h1>No product is available!</h1>
                  : products.map((product: any) => {
                    return (
                      <TableRow key={product._id}>
                        <TableData>{product.title}</TableData>
                        <TableData>{product.description}</TableData>
                        <TableData>{product.price}</TableData>
                        <TableData>{product.quantity}</TableData>
                        <TableData>{product.forObject}</TableData>
                        <TableData>{product.date}</TableData>
                        <EditLink to={"/admin/updateProduct/" + `${product._id}`}>Edit</EditLink>
                        <DeleteButton>Delete</DeleteButton>
                      </TableRow>
                    )
                  }
                  )}
              </tbody>
            </Table>)}
      </div>
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
background-color: unset;`

export default ManageProducts
