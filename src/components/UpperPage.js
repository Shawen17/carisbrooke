import React from 'react';
import styled from 'styled-components';

const Wrapper= styled.div`
    height:100%;
    flex:60%;
    position:relative;
    margin:0;
    display:flex;
    

`


const Container = styled.div`
    width:100%;
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
    overflow:hidden;
    
    
    @media screen and (max-width: 482px){
        height:60vh;
        margin-top:60px;
    ${Wrapper}{
        height:100%;
    }

    }

`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 3px;
    font-family: 'Urbanist', sans-serif;
    color:white;
    
`
const Image = styled.img`
    height:100%;
    width:100%;
    `


const ImgContainer = styled.div`
    height:100%;    
    flex:70%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:5px;
    
`
const InfoContainer = styled.div`
    flex:30%;
    height:100%;
    width:100%;
    padding:15px;
    display:flex;
`

const Title = styled.p`
    color:white;
    font-family:'Urbanist', sans-serif;
    font-weight:bold;
    font-size:40px;
`

const Slide = styled.div`
    width: 100vw;
    height:100vh;
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    flex-wrap:wrap;
    
    
    @media screen and (max-width: 482px){
        
    ${Wrapper}{
        height:50%;
    }
    ${ImgContainer}{
        height:80%;
    }
    
    ${Desc}{
        margin:20px 0px;
        font-size:12px;
        letter-spacing:1px;
    }
    
    
}
`
const Right = styled.div`
    display:flex;
    flex:40%;
    justity-content:center;
    align-items:center;
    padding:15px;
    background-color:green;

    @media screen and (max-width: 1045px){
        flex:0%;
        display:none;

       
        ${Wrapper}{
            flex:100%;
        }
        
    }
    `


const UpperPage=()=>{

    return(
        <Container>
            <Wrapper>
                <Slide className='pic' id='pic4' >
                    <InfoContainer>
                        <Desc><em>we offer competitive rates you can't beat</em></Desc>
                    </InfoContainer>
                    <ImgContainer>
                        <Image src='/homeimage2.jpg' alt='slide'/>
                    </ImgContainer>
                </Slide>
                <Slide className='pic' id='pic3'>
                    <InfoContainer>
                        <Desc><em>Large volume offshore transfer? we got you covered</em></Desc>
                    </InfoContainer>
                    <ImgContainer>
                        <Image src='/homeimage2.jpg' alt='slide' />
                    </ImgContainer>
                </Slide>
                <Slide className='pic' id='pic2'>
                    <InfoContainer>
                        <Desc><em>any foreign currency you need, we provide</em></Desc>
                    </InfoContainer>
                    <ImgContainer>
                        <Image src='/homeimage2.jpg' alt='slide' />
                    </ImgContainer>
                </Slide>
                <Slide className='pic' id='pic1'>
                    <InfoContainer>
                        <Desc><em>track record that span to over 5 years, we can trust us to deliver</em></Desc>
                    </InfoContainer>
                    <ImgContainer>
                        <Image src='/homeimage3.jpg' alt='slide' />
                    </ImgContainer>
                </Slide>
                
            </Wrapper>
            <Right>
                <Title>Sourcing for Forex for your Business or Travels? <span style={{color:'#FF8624'}}>Let's Talk</span></Title>
            </Right>


        </Container> 
    )
}


export default UpperPage;