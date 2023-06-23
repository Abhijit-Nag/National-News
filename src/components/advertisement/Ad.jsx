import React from 'react'
import AdCard from './AdCard'
const Ad = () => {
  const data = [
    {
      id: 1,
      img: "https://pureseo.com/wp-content/uploads/2019/07/google-new-discovery-ads-format.png",
      title: "Google Marketing",
      adBy: "Google"
    },
    {
      id: 2,
      img: "https://www.cibirix.com/cdn/uploads//2020/07/how-facebook-ads-can-play-a-vital-role-in-growing-your-business.jpg",
      title: "Facebook Marketing",
      adBy: "Facebook"
    }
  ]
  return (
    <div className='ad'>
      {data.map((data) =>

        (<AdCard data={data} />)
      )}
    </div>
  )
}

export default Ad