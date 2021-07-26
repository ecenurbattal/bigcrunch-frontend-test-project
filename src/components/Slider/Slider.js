import React from 'react';
import { SliderWrapper, Slide, Design, Place, Title, Link, SlideItem, SlideIndex, SlideLine } from '../Slider/Slider.styles';
import { Year } from './Slider.styles';

const Slider = ({slides, activeIndex, onIndexChange}) => {

    return (
        <SliderWrapper
            imgUrl = {slides[activeIndex].image}
        >
            <Slide>
                <Year>{slides[activeIndex].year}</Year>
                <Design>{slides[activeIndex].design}</Design>
                <Place>{slides[activeIndex].place}</Place>
                <Title>{slides[activeIndex].title}</Title>
            </Slide>
            <Link>
                {'See project'} &nbsp;&nbsp;&nbsp; {'>'}
            </Link>
                {slides.map((item,index) => (
                    <SlideItem
                        key={`slideItem${index}`}
                        index={(index+1)*2}
                        onClick={() => onIndexChange(index)}
                    >
                        <SlideIndex>{`0${index+1}`}</SlideIndex>
                        <p>{`${item.place} ${item.title}`}</p>
                        <SlideLine
                            isActive={activeIndex===index}
                        />
                    </SlideItem>
                ))}
        </SliderWrapper>
    )
}

export default Slider
