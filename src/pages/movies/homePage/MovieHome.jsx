import React, { useState } from 'react'
import Footer from '../../../components/footer/Footer';
import Featured from '../../../components/movies_components/featured/Featured';
import List from '../../../components/movies_components/list/List';
import Navbar from '../../../components/movies_components/navbar/Navbar';
import "./movieHome.scss"


const MovieHome = () => {
  const [type, setType] = useState("movie");
  const [genre, setGenre] = useState(35);


  console.log(`this is the genre selected : ${genre} this is the type: ${type}`)
  return (
    <div className='MovieHome'>
      <Navbar setType={setType} />

      <Featured type={type} setGenre={setGenre} />
      <List name="Continue to Watch" type={type} genre={genre} />
      <List name="Popular on JMedia" type={type} genre={genre} />
      <List name="Popular in your Country" type={type} genre={genre} />
      <List name="Finish this weekend" type={type} genre={genre} />
      <Footer />

    </div>
  )
}

export default MovieHome