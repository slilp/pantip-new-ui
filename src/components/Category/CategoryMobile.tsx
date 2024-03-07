import React from 'react';
import { categorys } from './categorys';
import CategoryCard from './CategoryCard';

function CategoryMobile() {
  return (
    <div className="flex overflow-x-scroll hide-scroll-bar">
      {categorys.map((category) => (
        <CategoryCard
          key={category.id}
          img={category.icon}
          title={category.title}
        />
      ))}
    </div>
  );
}

export default CategoryMobile;
