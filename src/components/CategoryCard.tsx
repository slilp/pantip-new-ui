import Image from 'next/image';
import React from 'react';

interface CategoryCardProps {
  title: string;
  img: string;
}

function CategoryCard({ title, img }: CategoryCardProps) {
  return (
    <div>
      <div className="border-b-2 border-transparent hover:border-gray-500 w-3/4 flex flex-col items-center justify-center gap-1 cursor-pointer text-center">
        <Image alt={title} src={img} height={20} width={20} />
        <p>{title}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
