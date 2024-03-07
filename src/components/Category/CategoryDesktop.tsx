'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CategoryCard from './CategoryCard';
import { ArrowProps } from 'react-multi-carousel/lib/types';
import { categorys } from './categorys';

const responsive = {
  desktop: {
    breakpoint: { min: 830, max: 3000 },
    items: 10,
    slidesToSlide: 3,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 830, min: 464 },
    items: 6,
    slidesToSlide: 3,
    paritialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 3,
    paritialVisibilityGutter: 30,
  },
};

const CustomLeftArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left hover:opacity-50"
      style={{ background: '#53507d' }}
      type="button"
    />
  );
};

const CustomRightArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right hover:opacity-50"
      style={{ background: '#53507d' }}
      type="button"
    />
  );
};

function CategoryDesktop() {
  return (
    <Carousel
      swipeable={false}
      draggable={true}
      responsive={responsive}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      transitionDuration={500}
    >
      {categorys.map((category) => (
        <CategoryCard
          key={category.id}
          img={category.icon}
          title={category.title}
        />
      ))}
    </Carousel>
  );
}

export default CategoryDesktop;
