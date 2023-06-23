import React from 'react'
import styled from 'styled-components'
import Topbar from '../../components/navbar/Topbar'
const Container = styled.div`
    text-align: center;
    background-color: #030915;
    height: 100vh;
`
const Heading = styled.h1`
    font-family: robotto;
    font-size: 80px;
    position: absolute;
    top: 120px;
    left:36%;
   text-align: center;
    bottom: 0;
    color: #ac940d;
`
const Letter = styled.h1`
    font-size: 200px;
    position: absolute;
    font-family: robotto;
    top: 50px;
    left: 740px;
    color: gold;
`
const Content = styled.h1`
    font-size: 100px;
    margin-top: 300px;
    color: gold;
`
export default function CryptoHomePage() {
    return (
        <Container>
            <Topbar />
            <Heading>Crypto Media</Heading>
            <Letter>J</Letter>
            <Content>Coming Soon!!</Content>
        </Container>
    )
}
