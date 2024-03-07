'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import CategoryDesktop from '../Category/CategoryDesktop';
import CategoryMobile from '../Category/CategoryMobile';

function NavBar() {
  const [navHeight, setNavHeight] = useState(0); // [1
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current?.offsetHeight);
    }
  }, [navRef.current?.offsetHeight]);

  return (
    <>
      <div
        ref={navRef}
        className="fixed top-0 w-full bg-pantip-main text-pantip-secondary text-sm"
      >
        <Header />
        <div className="border-b border-gray-500" />
        <div className="px-4 md:px-10 mt-4 mb-2 md:mb-4 lg:block hidden mx-auto max-w-[1500px]">
          <CategoryDesktop />
        </div>
        <div className="px-4 md:px-10 mt-4 mb-2 md:mb-4 lg:hidden block mx-auto max-w-[1500px]">
          <CategoryMobile />
        </div>
      </div>
      <div style={{ height: `${navHeight + 15}px` }} />
    </>
  );
}

export default NavBar;
