import React from 'react'
import { Hamburger, HeaderWrapper } from './Header.styles';
import LogoImg from '../../assets/images/logo.svg';
import HamburgerImg from '../../assets/images/hamburger.svg';

const Header = ({drawerClickHandler}) => {
    return (
        <HeaderWrapper>
            <img src={LogoImg} alt={'logo'}/>
            <Hamburger onClick={drawerClickHandler} src={HamburgerImg} alt={'hamburger'}/>
        </HeaderWrapper>
    )
}

export default Header
