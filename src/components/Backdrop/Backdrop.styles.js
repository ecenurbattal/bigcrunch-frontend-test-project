import styled from "styled-components";

export const BackdropWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
    right:0;
    background: rgba(0,0,0,0.3);
    z-index: 100;
    transition: 0.5s ease-out;
`;