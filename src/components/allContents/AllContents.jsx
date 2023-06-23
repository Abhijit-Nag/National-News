import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../card/Card'
import "./allContents.css"
const AllContents = ({ category, query }) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {

        const fetchData = async () => {

            if (query) {
                const res = await axios.get(`${process.env.REACT_APP_SERVER_API_KEY}/articles/news`);
                console.log(`aritcle response on basis of query:  ${res.data.articles[0].author}`);
                setArticles(res.data.data);
            }
            else {
                const res = await axios.get(`${process.env.REACT_APP_SERVER_API_KEY}/articles/news`);
                setArticles(res.data.data);
                console.log(`aritcle response on basis of query:  ${res.data.articles[0].author}`);
            }
        };
        fetchData();
    }, [setArticles, query]);
    return (
        <div className='allContainer'>
            {articles.map((data) => (
                <Card data={data} />
            ))}
        </div>
    )
}

export default AllContents