import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <Title>Welcome to World of Toys</Title>
      <ContactInfo>
        <p>Stockholm, Sweden </p>
        <p>+46 72 928 7384 </p>
        <p>hue.blue@gmail.com</p>
        </ContactInfo>
    </FooterSection>
  )
}

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 5px;
  align-items: center;
  margin:0;
  padding: 7px 0;
  background-color: #d6edf5;
`;
const Title = styled.p`
font-size: 1.3rem;`

const ContactInfo = styled.div`
display: flex;
flex-direction: row;
column-gap: 20px;`

export default Footer
