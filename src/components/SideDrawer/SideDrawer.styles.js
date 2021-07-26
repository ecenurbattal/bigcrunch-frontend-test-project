import styled from "styled-components";

export const SideDrawerWrapper = styled.div`
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
    background:#000000;
    position:fixed;
    top:0;
    right:0;
    display: ${(props) => !(props.show) ? 'none' : 'flex'};
    flex-direction:column;
    width:55%;
    height:100%;
    padding:20px;
    z-index:1000;
`;


export const Close = styled.img`
    width: 33px;
    height: 33px;
    margin-left:auto;
    margin-right:140px;
`;

export const Menu = styled.div`
    padding:25px;
    margin:auto;
    text-align:left;
`;

export const MenuItem = styled.p`
    display:flex;
    flex-direction:column;
    font-size:40px;
    font-weight:900;
`;

export const SocialMediaMenu = styled.div`
    padding:25px;
    margin:auto;
    text-align:center;
`;

export const SocialMediaMenuItem = styled.img`
    width: 40px;
    height:40px;
    margin:20px;
`;

export const BorderLogo = styled.img`
    width:700px;
    height:100%;
    position:absolute;
    margin-left:-125px;
`;