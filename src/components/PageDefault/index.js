import React from 'react';
import styled from 'styled-components';

import Menu from  '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: 20%;
    padding-top: 10%;
    padding-left: 5%;
    padding-right: 5%;
    
    background: linear-gradient( 115deg, #001669, #007296 1%, #007296 11%, #015673 15%, 
    #000 23.57%, transparent 23.57%, transparent 100% ),
	
    linear-gradient( 109deg, transparent, #2d8427 23.57%, #205a06 41%, #000 45%,
	transparent 45%, transparent 100% ),
	
    linear-gradient( 109deg, transparent, #e79a07 45%, #e79a07 50%, #e79a07 52%, 
    #444 55%, transparent 45%, transparent 100% ),
	
    linear-gradient( 109deg, transparent, #288ab1 55%, #288ab1 68%,  #000 73%, 
    transparent 73%, transparent 100% ),
	
    linear-gradient( 109deg, transparent, #de491e 73%, #de491e 100% );
`;


function PageDefault({ children }){
    return (
        <>
            <Menu />
            
            <Main>
                {children}
            </Main>


            <Footer />

        </>

    );


}

export default PageDefault;