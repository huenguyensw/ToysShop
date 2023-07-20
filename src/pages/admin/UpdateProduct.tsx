import React, { useState, useEffect } from 'react'
import useFetchOneProduct from '../useFetchOneProduct'
import { useParams } from 'react-router-dom';
import { ProductWrapper, Image, InputLabel, StyleInputs, ButtonWrapper, BackButton, Button } from "./styling.tsx"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateProduct: React.FC = () => {
  const url = 'https://database-ecommerce-production.up.railway.app/';
  const Params = useParams();
  const { data: product, isLoading, isError } = useFetchOneProduct({ URL: `${url}toys/${Params.id}` })
  const [inputs, setInputs] = useState<any>();
  const [fileImage, setFileImage] = useState<any>({});
  const [image, setImage] = useState<any>('');
  const navigate = useNavigate();


  useEffect(() => {
    if (product) {
      setInputs(product);
      setImage(encodeURI(product.image))
      console.log(product.image)
    }
  }, [product]);

  const handleChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const handleFiles = (e: any) => {
    setFileImage(e.target.files[0].name);
    console.log(e.target.files[0].name);

    //render image
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    }
    reader.onerror = error => {
      console.log("Error:", error)
    }

  }

  const handleCreatingProduct = async (e: any) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('ToyImage', fileImage);
    formData.append('title', inputs.title);
    formData.append('description', inputs.description);
    formData.append('price', inputs.price);
    formData.append('quantity', inputs.quantity);
    formData.append('forObject', inputs.forObject);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    try{
      const res = await axios.patch(`${url}toys/${Params.id}`, formData, config);
      if(res.status === 200){
        navigate('/admin/manageProduct');
      } else {
        throw new Error('Error updating product. Please try again later.')
      }
    } catch(error){
      console.log(error)
    }

  }


  return (
    <div>
      {isLoading
        ? <h1>Loading...</h1>
        : isError
          ? <h1>{isError}</h1>
          : <ProductWrapper>
            <h2>Update Product</h2>
            <StyleInputs onSubmit={handleCreatingProduct}>
              {image == '' || image == null || image == undefined
                ? ""
                : <img src={`${url}uploads/${image}`} width={450} height={400} alt='product-image'></img>}
              <Image>
                Upload image file:
                <br />
                <input type="file" name='productImage' onChange={handleFiles} />
              </Image>
              <InputLabel>
                Title:
                <br />
                <input type='text' name='title' value={inputs.title} onChange={handleChange} required />
              </InputLabel>

              <InputLabel>
                Description:
                <br />
                <textarea name='description' rows={10} value={inputs.description} onChange={handleChange} required />
              </InputLabel>

              <InputLabel>
                Price(kr):
                <br />
                <input type='text' name='price' value={inputs.price} onChange={handleChange} required />
              </InputLabel>

              <InputLabel>
                Quantity:
                <br />
                <input type='text' name='quantity' value={inputs.quantity} onChange={handleChange} required />
              </InputLabel>

              <InputLabel>
                forObject:
                <br />
                <input type='text' name='forObject' value={inputs.forObject} onChange={handleChange} required />
              </InputLabel>

              <ButtonWrapper>
                <BackButton to="/admin/manageProduct">&#8592; Back</BackButton>
                <Button type='submit'>Save</Button>
              </ButtonWrapper>
            </StyleInputs>
          </ProductWrapper>}
    </div>
  )
}

export default UpdateProduct
