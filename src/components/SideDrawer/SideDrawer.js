import React from 'react'
import { SideDrawerWrapper, Close, Menu, MenuItem, SocialMediaMenu, SocialMediaMenuItem, BorderLogo } from './SideDrawer.styles';
import closeImg from '../../assets/images/close.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter.svg';
import youtube from '../../assets/images/youtube.svg';
import borderLogoImg from '../../assets/images/border-logo.svg';
import menu from '../../constants/menuItems';

const SideDrawer = ({show, onCloseClick}) => {
    return (
        <SideDrawerWrapper show={show}>
            <Close onClick={onCloseClick} src={closeImg} alt={'close'}/>
            <Menu>
                {menu.map((item,index) => (
                    <MenuItem
                        key={`menuItem${index}`}>
                            {item}
                    </MenuItem>
                ))}
            </Menu>
            <SocialMediaMenu>
                <SocialMediaMenuItem src={facebook} alt='facebook'/>
                <SocialMediaMenuItem src={instagram} alt='instagram'/>
                <SocialMediaMenuItem src={twitter} alt='twitter'/>
                <SocialMediaMenuItem src={youtube} alt='youtube'/>
            </SocialMediaMenu>
            <BorderLogo src={borderLogoImg} alt={'border-logo'}/>
        </SideDrawerWrapper>
    )
}

export default SideDrawer
