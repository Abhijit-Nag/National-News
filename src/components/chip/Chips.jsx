// import { Avatar, Chip } from '@material-ui/core'
// import React from 'react'
// import { useState } from 'react'

// const Chips = () => {
//     const [chipData, setChipData] = useState([
//         {  label: 'business' },
//         {  label: 'entertainment' },
//         {  label: 'general' },
//         {  label: 'health' },
//         {  label: 'science' },
//         {  label: 'sports' },
//         {  label: 'technology' }
//       ]);
//     //   console.log(chipData.labl)

//   return(
//     <>
//     {chipData.map((data)=>{
//         return(
//             <>

// <Chip color="primary" avatar={<Avatar src="/static/images/avatar/1.jpg" />} />

//             </>
//         )
//     })}
//     </>
//   )
// }

// export default Chips
import { Chip, ListItem, Paper, styled } from '@material-ui/core';
import { TagFaces } from '@material-ui/icons';
import * as React from 'react';
import { useState } from 'react';

import "./chip.css";
// const ListItem = styled('li')(({ theme }) => ({
//     margin: theme.spacing(0.5),
//     listStyle:none
// }));

export default function ChipsArray({ setSelectedCategory }) {
    const [chipData, setChipData] = useState([
        { key: "0", label: 'business' },
        { key: "1", label: 'entertainment' },
        { key: "2", label: 'general' },
        { key: "3", label: 'health' },
        { key: "4", label: 'science' },
        { key: "5", label: 'sports' },
        { key: "6", label: 'technology' }
    ]);

    // const handleDelete = (chipToDelete) => () => {
    //     setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    // };
    const update = (cat) => {
        setSelectedCategory(cat);
    }

    return (

        <div className='chips'>
            {chipData.map((data) => {
                let icon;

                if (data.label === 'React') {
                    icon = <TagFaces />;
                }

                return (
                    <ListItem key={data.key} onClick={() => update(data.label)}>
                        <Chip
                            style={{ cursor: "pointer", fontSize: "20px", fontFamily: "roboto", borderRadius: "10px" }}
                            color='primary'
                            icon={icon}
                            label={data.label}
                            avatar={`https://getlogo.net/wp-content/uploads/2019/08/cnn-business-logo-vector.png`}

                        />
                    </ListItem>
                );
            })}
        </div>

    );
}