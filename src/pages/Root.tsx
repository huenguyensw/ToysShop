import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'


const Root: React.FC = () => {
  return (
    <Main>
        <Header/>
        <Outlet/>
        <Footer/>
    </Main>
  )
}
const Main = styled.div`
display: grid;
width:100%;
grid-template-areas:
 "header"
 "body"
 "footer";
 overflow-x:hidden;`


export default Root
