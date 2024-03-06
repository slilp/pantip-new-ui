'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const Header = () => {
  const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);

  return (
    <header className="px-4 md:px-10 pt-7 pb-4 mx-auto">
      <div className="flex items-center justify-between">
        <Image alt="logo" src="/logo-pantip.png" height={70} width={70} />
        <div className="flex-1 md:visible invisible">
          <div className="relative w-1/2 mx-auto">
            <input
              className="block font-normal placeholder-white w-full p-3 rounded-full bg-[#44416f] focus:outline-none focus:ring-1 ring-[#53507d]"
              placeholder="ค้นหาบน Pantip"
            />

            <button
              type="submit"
              className="absolute end-2 top-1  bg-[#2d2a49] hover:bg-[#53507d] focus:outline-none rounded-full px-3 py-3"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-3 px-4 rounded-3xl hover:bg-[#44416f] flex gap-2 ">
            <Image alt="add" src="/icon/add.png" height={20} width={20} />
            ตั้งกระทู้
          </button>

          <div className="relative">
            <button
              className="p-2 px-3 rounded-full flex items-center gap-2 border border-neutral-300 hover:opacity-80"
              onClick={() => setUserMenuOpen((prev) => !prev)}
            >
              <Image alt="add" src="/icon/burger.png" height={15} width={15} />
              <Image alt="add" src="/icon/profile.png" height={30} width={30} />
            </button>
            {userMenuOpen ? (
              <div
                className="absolute text-black bg-white py-2 rounded-xl top-14 right-0 shadow-lg border w-52"
                style={{ zIndex: 1001 }}
              >
                {['เข้าสู่ระบบ', 'สมัครสมาชิก'].map((option) => (
                  <>
                    <p
                      key={option}
                      className="p-3 px-5 hover:bg-neutral-100 cursor-pointer"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      {option}
                    </p>
                  </>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="md:hidden block mt-3">
        <div className="relative w-full mx-auto">
          <input
            className="block font-normal w-full p-3 rounded-full bg-[#44416f] focus:outline-none focus:ring-1 ring-[#53507d]"
            placeholder="ค้นหาบน Pantip"
          />

          <button
            type="submit"
            className="absolute end-2 top-1  bg-[#2d2a49] hover:bg-[#53507d] focus:outline-none rounded-full px-3 py-3"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
