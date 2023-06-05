import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {ProductWrapper, Image, InputLabel, StyleInputs, ButtonWrapper, BackButton, Button} from "./styling.tsx"


const CreateProduct: React.FC = () => {
  const [fileImage, setFileImage] = useState<any>({});
  
  
  const [inputs, setInputs] = useState<any>({});
  const URL = 'http://localhost:3000/toys';
  const [image, setImage] = useState<any>('');
  const navigate = useNavigate();


  const handleFiles = (e: any) => {
    setFileImage(e.target.files[0]);
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

  const handleChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
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
    

    const res = await axios.post(URL, formData, config);
    
    console.log(res);
    navigate('/admin/manageProduct');

  }


  return (
    <ProductWrapper>
      <h2>Create Product</h2>
      <StyleInputs onSubmit={handleCreatingProduct}>
        {image == '' || image == null
          ? ""
          : <img src={image} width={450} height={400} alt='product-image'></img>}
        <Image>
          Upload image file:
          <br />
          <input type="file" name='productImage' onChange={handleFiles} />
        </Image>
        <InputLabel>
          Title:
          <br />
          <input type='text' name = 'title' value={inputs.title} onChange={handleChange} required />
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
          <Button type='submit'>Create</Button>
        </ButtonWrapper>
      </StyleInputs>
    </ProductWrapper>)
}



export default CreateProduct
