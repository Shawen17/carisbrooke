import React from 'react';
import styled from 'styled-components';


export const Header = styled.div`
    margin-top:60px;
    height:140px;
    background-color:#126180;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const Title = styled.h2`
  color:#0CAFFF;
  font-weight:bold;
`
export const Sub = styled.p`
    color:white;
    font-size:14px;
    font-weight:bold;
    font-family:'Urbanist', sans-serif;
`

const About=()=>{

    return(
        <div>
            <Header>
                <Title>Carisbrooke Story</Title>
                <Sub>We source forex, and we do it well</Sub>
            </Header>
        </div>
    )
}

export default About;