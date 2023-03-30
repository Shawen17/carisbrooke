import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import ClickAwayListener from 'react-click-away-listener';


const Container = styled.div`
      height:60px;
      background-color: whitesmoke;
      font-family: 'Urbanist', sans-serif;
      font-weight: bold;
      width:100vw;
      padding:0px 15px;
    `


    const Wrapper = styled.div`
    padding:5px 20px;
    display: flex;
    justify-content: center;
    align-items:center;
    position:relative;
`
const Brand = styled.h1`
  color: #FF8624;
  font-weight:bold;
`


const NavBar=()=>{
    const [toggle,setToggle]= useState(false)

    const toggleModal=()=> {
        setToggle(
          !toggle
        );
      }

    return (
        <div>
            <div  style={{marginBottom:60,position:'fixed',zIndex:9,top:0,right:0,left:0}}>
                <Container>
                    <Wrapper>
                    <Link className='mr-auto nav-link'  to='/'><Brand>Carisbrooke</Brand></Link>
                    <div className='navigation-menu' >
                        <div>
                            <ul>
                                <li>
                                    <Link style={{marginRight:'10px'}} className="active mb-1 nav-item nav-link" aria-current="page" to="/service">Services</Link>
                                </li>
                                <li>
                                    <Link  className='mb-1 nav-item nav-link' to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    
                    </div>
                    <div className='hamburger' style={{fontSize:30}} onClick={toggleModal}>
                        <MenuIcon  />
                    </div>
                    </Wrapper>
             </Container>
             {toggle? (
                <ClickAwayListener onClickAway={() => setToggle(false)}>
                    <div className='menu-appear' >
                        <div className='no-bullets' >
                            <ul >
                                <li>
                                    <Link style={{marginRight:'10px'}} className="active mb-1 nav-item nav-link" aria-current="page" to="/service">Services</Link>
                                </li>
                                <li>
                                    <Link  className='mb-1 nav-item nav-link' to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ClickAwayListener>
             ):''
            }

            </div>
        
        
        </div>
    )
}

export default NavBar;