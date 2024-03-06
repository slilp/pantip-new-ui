import React from 'react';
import Header from './Header';
import Category from './Category';

function NavBar() {
  return (
    <div className="fixed top-0 w-full bg-[#2d2a49] text-[#e9e5f6de] text-sm">
      <Header />
      <div className="border-b border-gray-500" />
      <div className="px-4 md:px-10 mt-4 mb-2 md:mb-4">
        <Category />
      </div>
    </div>
  );
}

export default NavBar;
