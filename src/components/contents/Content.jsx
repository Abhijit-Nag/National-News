import React from 'react'
import Card from '../card/Card'
import "./content.css"

const Content = ({ data }) => {
  console.log(`this is the content data ${data}`)
  return (
    <div className="contentContainer">
      {data.map((d) => (

        <Card data={d} />
      ))}
    </div>
  )
}

export default Content