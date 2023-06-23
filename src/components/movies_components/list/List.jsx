import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import "./list.scss"

const List = ({ name, type, genre }) => {
    const [slideNumber, setSlideNumber] = useState(0);
    console.log({ name, type, genre })
    const [data, setData] = useState([]);
    const api = process.env.REACT_APP_MOVIE_API_KEY;

    const [apiKey, setApiKey] = useState("");




    useEffect(() => {
        const fetchData = async () => {
            try {
                if (name === "Popular on JMedia") {
                    setApiKey(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${api}`)
                }
                else if (name === "Continue to Watch") {
                    setApiKey(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${api}`)
                }
                else {
                    setApiKey(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${api}`)
                }
                const data = await axios.get(`${apiKey}`);
                setData(data.data.results);

            } catch (err) {
                console.log(`list page error : ${err}`)
            }
        };
        fetchData();
    }, [type, apiKey, name]);
    console.log(data);
    const listRef = useRef();
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            listRef.current.style.transform = `translateX(${(230 + distance)}px)`;
            listRef.current.style.transition = `all 0.5s ease`;
            setSlideNumber(prev => prev - 1);
        }
        if (direction === "right" && slideNumber < 10) {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
            setSlideNumber(prev => prev + 1);

        }
    }
    return (
        <div className='list'>
            <span className="listTitle">{name} </span>
            <div className="wrapper">
                {slideNumber > 0 && (

                    <ArrowBackIosOutlined className='arrow left' onClick={() => handleClick("left")} />
                )}
                <div className="container" ref={listRef}>

                    {data.filter((d) => { return d.media_type === type && d.genre_ids.some((e) => { return e === parseInt(genre) }) }).map((d) => (
                        <ListItem data={d} />
                    ))}

                </div>
                {slideNumber < 5 && (

                    <ArrowForwardIosOutlined className='arrow right' onClick={() => handleClick("right")} />
                )}
            </div>
        </div>
    )
}

export default List