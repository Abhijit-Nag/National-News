import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./featured.scss"

const Featured = ({ type, setGenre }) => {
  const [genres, setGenres] = useState([]);

  // Dummy data for testing the website while building it
  const data = [{
    id: 1,
    img: "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000",
    title_img: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Interstellar-logo.png",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id porro quia, veniam nihil consectetur suscipit quaerat repellat? Mollitia aperiam iure dolores voluptatem alias repudiandae, iste perferendis est. Voluptatem, odit optio.",
  },
  {
    id: 2,
    img: "https://images.thedirect.com/media/photos/posd1_1.jpg",
    title_img: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/4vAOnWLarDb3bW3B195cPDa3CEgwoJ.jpg",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id porro quia, veniam nihil consectetur suscipit quaerat repellat? Mollitia aperiam iure dolores voluptatem alias repudiandae, iste perferendis est. Voluptatem, odit optio.",
  },
  {
    id: 3,
    img: "https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg",
    title_img: "https://e7.pngegg.com/pngimages/834/994/png-clipart-disney-beauty-and-the-beast-logo-beauty-and-the-beast-new-logo-at-the-movies-beauty-and-the-beast.png",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id porro quia, veniam nihil consectetur suscipit quaerat repellat? Mollitia aperiam iure dolores voluptatem alias repudiandae, iste perferendis est. Voluptatem, odit optio.",
  },
  {
    id: 4,
    img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/12/airlift-movie-poster-4.jpg",
    title_img: "https://assets.website-files.com/61a717c67f45d6558a24ef05/636abe7f8c66704af102bba4_airlift-logo.png",
    desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id porro quia, veniam nihil consectetur suscipit quaerat repellat? Mollitia aperiam iure dolores voluptatem alias repudiandae, iste perferendis est. Voluptatem, odit optio.",
  }];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`);
        console.log(data.data.genres);
        console.log(data.data.genres[1]);
        setGenres(data.data.genres);
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  }, [type])
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"} </span>
          <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)} style={{ backgroundColor: 'black', borderRadius: 5, padding: 8 }}>
            <option movie style={{ padding: 10 }}>Comedy</option>
            {genres.map(d => (
              <>
                <option id={d.id} value={d.id} >{d.name} </option>
              </>

            ))}


          </select>
        </div>
      )}

      <img
        src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"
        alt="" />
      <div className="info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Interstellar-logo.png"
          alt=""
          style={{ width: "auto" }}
        />
        <span className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ullam, nemo quidem debitis quasi dignissimos
          voluptatem, magni voluptas ex nulla dolor hic aliquam totam adipisci
          animi perspiciatis repellendus est similique dolorum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow htmlColor='#0b0b0b' />
            <span style={{ color: "#0b0b0b" }}>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured