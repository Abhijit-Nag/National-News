import React from 'react'
import Footer from '../../../components/footer/Footer'
import Accordian from '../../../components/movies_components/accordians/Accordian'
import Others from '../../../components/movies_components/others/Others'
import Register from '../../../components/movies_components/register/Register'

const MainPage = () => {
  return (
    <>
      <Register />
      <Others />
      <Accordian />
      <hr style={{ height: "8px", backgroundColor: "rgb(49, 47, 47)", border: "none", }} />
      <Footer />
    </>
  )
}

export default MainPage