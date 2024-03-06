'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CategoryCard from './CategoryCard';
import { ArrowProps } from 'react-multi-carousel/lib/types';
import Image from 'next/image';

const categorys = [
  { id: 'category1', title: 'รวมมิตร', icon: '/category/pt-forum-all.svg' },
  { id: 'category2', title: 'หว้ากอ', icon: '/category/pt-forum-wahkor.svg' },
  { id: 'category3', title: 'ก้นครัว', icon: '/category/pt-forum-food.svg' },
  { id: 'category4', title: 'มาบุญครอง', icon: '/category/pt-forum-mbk.svg' },
  { id: 'category5', title: 'หอศิลป์', icon: '/category/pt-forum-art.svg' },
  { id: 'category6', title: 'จตุจักร', icon: '/category/pt-forum-jatujak.svg' },
  { id: 'category7', title: 'กล้อง', icon: '/category/pt-forum-camera.svg' },
  {
    id: 'category8',
    title: 'เฉลิมไทย',
    icon: '/category/pt-forum-chalermthai.svg',
  },
  {
    id: 'category9',
    title: 'ถนนนักเขียน',
    icon: '/category/pt-forum-blueplanet.svg',
  },
  { id: 'category10', title: 'พันทิป', icon: '/category/pt-forum-pantip.svg' },
  { id: 'category11', title: 'ภูมิภาค', icon: '/category/pt-forum-region.svg' },
  {
    id: 'category12',
    title: 'โต๊ะเครื่องแป้ง',
    icon: '/category/pt-forum-beauty.svg',
  },
  {
    id: 'category13',
    title: 'ทีวีโชว์',
    icon: '/category/pt-forum-tvshow.svg',
  },
  {
    id: 'category14',
    title: 'การ์ตูน',
    icon: '/category/pt-forum-cartoon.svg',
  },
];

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

function Category() {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      centerMode={true}
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

export default Category;
