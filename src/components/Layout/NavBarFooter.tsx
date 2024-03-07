'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function NavBarFooter() {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = scrollPos > currentScrollPos;
      setScrollPos(currentScrollPos);
      setShow(visible);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollPos]);

  return (
    <nav
      className={`fixed inset-x-0 bottom-0 bg-pantip-main text-pantip-secondary ${
        show ? 'visible' : 'invisible'
      } md:hidden block`}
    >
      <div className="px-4 my-2 max-w-[1500px]">
        <button className="mx-auto p-2 px-3 rounded-full flex items-center gap-2 border opacity-90 border-neutral-300 hover:opacity-70">
          <Image alt="add" src="/icon/profile.png" height={30} width={30} />
          <p>เข้าสู่ระบบ</p>
        </button>
      </div>
    </nav>
  );
}

export default NavBarFooter;
