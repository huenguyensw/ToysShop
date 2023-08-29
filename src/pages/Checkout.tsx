import React, {useState} from 'react'
import Cart from '../components/Cart';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Checkout: React.FC = () => {
  const { lineItems, setIsDisplayCart, setIsMiniCart } = useOutletContext<any>();
  const [customerInfo, setCustomerInfo] = useState<any>({});

  const handleDisplayCartIcon = () => {
    setIsDisplayCart(true);
    setIsMiniCart(true);
  }

  const handleCustomInfo = (e: any) =>{
    setCustomerInfo({...customerInfo, [e.target.name]: e.target.value});
    console.log(customerInfo);
  }

  const sendEmail = (e: any) =>{
    e.preventDefault();
    emailjs.sendForm('service_ryzyzto', 'template_h2y68bl', e.target, '_NEhzPVbbSyYCrWwt')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });

  }
  return (
    <CheckoutBox>
      <OrderInfo>
        <TitleBox>Products</TitleBox>
        {lineItems.length > 0 ? <Cart /> : <BackHomeLink to={"/"} onClick={handleDisplayCartIcon}>Continue Shopping!</BackHomeLink>}
      </OrderInfo>
      <DeliveryInfo>
        <TitleBox>Shipping Address</TitleBox>
        <Row>
          <label>
            First Name
            <br />
            <InputField type='text' name='first_name' value={customerInfo.firstName} onChange={handleCustomInfo}></InputField>
          </label>
          <br />
          <label>
            Last Name
            <br />
            <InputField type='text' name='last_name' value={customerInfo.lastName} onChange={handleCustomInfo}></InputField>
          </label>
        </Row>
        <Row>
          <label>
            Email
            <br />
            <InputField type='text' name='to_Email' value={customerInfo.email} onChange={handleCustomInfo}></InputField>
          </label>
          <br />
          <label>
            Password
            <br />
            <InputField type='password' name='password' value={customerInfo.password} onChange={handleCustomInfo}></InputField>
          </label>
        </Row>
        <Row>
          <label>
            Country
            <br />
            <SelectBox>
              <option>Sweden</option>
              <option>Denmark</option>
              <option>Norway</option>
              <option>Finland</option>
            </SelectBox>
          </label>
          <br />
          <label>
            Comment
            <br />
            <CommentBox></CommentBox>
          </label>
        </Row>
        <PayBtn onClick={sendEmail}>Proceed to payment</PayBtn>
      </DeliveryInfo>

      <Newletters>
        <TitleBox>Newletters</TitleBox>
        <input type='text'></input>
        <br />
        <SubBtn>Subscribe</SubBtn>
      </Newletters>
    </CheckoutBox>
  )
}

const CheckoutBox = styled.div`
display: grid;
grid-template-areas: 
"OrderInfo Newletters"
"DeliveryInfo DeliveryInfo";
padding: 0px 20px;
justify-content: space-between;
`

const OrderInfo = styled.section`
grid-area: OrderInfo;
`

const Newletters = styled.section`
grid-area: Newletters;
display: flex;
flex-direction: column;`

const DeliveryInfo = styled.section`
grid-area: DeliveryInfo;
`

const Row = styled.div`
display: flex;
flex-direction: row;
column-gap: 40px;
row-gap: 20px;
padding-bottom: 20px;`

const SelectBox = styled.select`
width: 190px;
padding: 2px 0;`

const CommentBox = styled.textarea`
width: 190px;`

const InputField = styled.input`
width: 190px;
padding: 2px 0;`

const TitleBox = styled.p`
font-size: 1.3rem;
font-weight: 600`

const BackHomeLink = styled(Link)`
color: #1177a6;
`
const SubBtn = styled.button`
color: #1177a6;
background-color: rgb(214, 237, 245);
&: hover {
  border-color:  #1177a6;
}`

const PayBtn = styled.button`
color: #1177a6;
background-color: rgb(214, 237, 245);
width: 190px;
margin-bottom: 15px;
&: hover {
  border-color:  #1177a6;
}`
export default Checkout
