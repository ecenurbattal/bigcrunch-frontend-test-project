import styled from "styled-components";

export const SliderWrapper = styled.div`
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: url(${(props=> props.imgUrl)}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 0px;
    text-align:left;
    opacity: 1;
    transition: 0.3s ease-out;
`;

export const Slide = styled.div`
    max-width: 750px;
    min-height: 300px;
    max-height:500px;
    grid-area: 3 / 2 / 5 / 7;
`;

export const Year = styled.span`
    font-size:20px;
    font-weight:600;
`;


export const Design = styled.span`
    font-size:15px;
    opacity:0.7;
    margin-left:15px;
`;

export const Title = styled.span`
    font-size:60px;
    font-weight:800;
`;

export const Place = styled.div`
    font-size:50px;
    font-weight:500;
`;

export const Link = styled.div`
    grid-area: 6 / 2 / 6 / 7;
    font-size:18px;
    font-weight:600;
`;


export const SlideItem = styled.span`
    grid-area: 8 / ${(props => props.index)} / 9 / calc(${(props => props.index)} * 2);
`;

export const SlideIndex = styled.div`
    font-size:20px;
    font-weight:800;
`;

export const SlideLine = styled.div`
    max-width:250px;
    height:5px;
    background:#FFFFFF;
    opacity:${(props) => props.isActive ? '1' : '0.3'};
`;