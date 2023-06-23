import { Badge, Divider } from '@material-ui/core';
import React from 'react'
import "./card.css";
const Card = ({ data }) => {
    return (

        <div className='card'>
            <Badge badgeContent={data.source.name} color="primary">
                <div className="cardWrapper">
                    <div className="cardTop">
                        <img src={data.urlToImage} alt="" className='cardBodyImg' />
                    </div>
                    <hr className="cardHr" />
                    <div className="cardBottom">
                        <div className="heading">
                            {data.author && (

                                <span className='author'>Author: <h1>{data.author}</h1> </span>
                            )}
                            <span className='time'>{data.publishedAt} </span>
                        </div>
                        <Divider style={{ marginTop: "24px" }} />
                        <div className="cardHeading">
                            <h2>{data.title} </h2>
                        </div>
                        <Divider />
                        <div className="cardDesc">
                            <h3>{data.description} </h3>
                        </div>

                    </div>
                </div>
            </Badge>
        </div>
    )
}

export default Card