import React from 'react';
import './Menu.css';
import Button from './components/ButtonLink';
//import ButtonLink from '../../components/components/ButtonLink';
import Logo from '../../assets/img/logo3.jpg';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="aluraflix"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>

        </nav>
    );
}

export default Menu;