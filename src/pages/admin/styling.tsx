import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductWrapper = styled.div`
    display: block;
    width: 50%;
    border-radius: 10px;
    padding: 0px 40px;
    border: 1px solid #e5e5e5;
    background-color: white;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    justify-content: space-between;
    font-size: 1.2rem;
  `;

  export const Image = styled.div`
    margin-bottom: 30px;
    align-items: center;
    padding: 10px;
    
    input[type="file"] {
      margin-top: 10px;
      padding: 5px;
     
    }
  `;

  export const InputLabel = styled.label`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 5px;
    line-height: 1.5rem;
    padding: 5px;
    align-items: center;
    
    textarea[name="description"] {
      padding:5px;
      margin:5px;
      align-items: center;
      height: 5.5rem;
      width: 95%;
      border-radius:4px;
      border: 1px solid;
    }
    
    input[type="text"] {
      padding:5px;
      margin:5px;
      align-items: center;
      height: 2.0rem;
      width: 95%;
      border-radius:4px;
      border: 1px solid;
    }
  `;

  export const StyleInputs = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  padding: 5px;
  margin: 5px;
  line-height: 1.5;
  align-items: center;
  text-align: left;
`;

export const Button = styled.button`
  background-color: rgb(103, 163, 186);
  padding: 10px;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 1.1rem;
  border: 1px solid rgb(103, 163, 186);

  &:hover {
    background-color: rgb(123, 172, 191);
  }
  `;

export const BackButton = styled(Link)`
background-color: white;
padding: 10px;
text-decoration: none;
color: rgb(103, 163, 186);
border-radius: 5px;
font-size: 1.1rem;
border: 1px solid rgb(103, 163, 186);

&:hover {
  background-color: rgb(224, 231, 234);
}  
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 5px;
  padding: 5px;
`;