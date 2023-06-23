import { Divider } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Ad from '../../components/advertisement/Ad'
import AllContents from '../../components/allContents/AllContents'
import ChipsArray from '../../components/chip/Chips'
import Content from '../../components/contents/Content'
import Footer from '../../components/footer/Footer'
import Topbar from '../../components/navbar/Topbar'
import Headline from '../../components/swiper/Headline'
import "./home.css"

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [query, setQuery] = useState("");
    console.log(selectedCategory);
    useEffect(() => {
        const fetchData = async () => {

            const res = await axios.get(`${process.env.REACT_APP_SERVER_API_KEY}/articles/headlines`);
            setArticles(res.data.data);
        };
        fetchData();
    }, [setArticles, selectedCategory]);
    console.log(`this is the selected category :${selectedCategory}`);
    console.log(`query is ${query}`);
    return (
        <>
            <Topbar setQuery={setQuery} />
            <ChipsArray setSelectedCategory={setSelectedCategory} />
            <Headline />
            <div className="container movies" style={{ display: "flex", flexDirection: "row" }}>
                <div className="left">
                    <h1 className='heading' style={{ marginRight: "140px" }}>Headlines</h1>
                    <div className="articles">

                        <Content data={articles} />
                    </div>

                </div>
                <Divider />
                <div className="right">
                    <h1 className='heading' style={{ marginLeft: "310px" }}>News</h1>
                    <AllContents category={selectedCategory} query={query} />
                </div>
                <div className="ad" style={{ position: "absolute", right: "20px", top: "560px" }}>
                    <h1 className='heading' style={{ marginRight: "110px" }}>Ads</h1>
                    <Ad />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Home