import React from 'react'
import Navbar from '../Components/navbar/Navbar'
import Footer from '../Components/footer/Footer'

const Layout = ({children}) => {
  return (
    <div style={{margin:0, padding:0}}>
      <Navbar/>
     <main>{children}</main> 
      <Footer/>
    </div>
  )
}

export default Layout