import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <section className="bg-pantip-main text-pantip-secondary text-sm">
      <footer className="max-w-[1500px] mx-auto py-8 px-4 md:px-10 grid md:grid-cols-3 grid-cols-2 gap-4">
        <div className="order-1">
          <p className="text-yellow-400 font-bold mb-4">เว็บในเครือ</p>
          <div className="flex">
            <ul className="space-y-2">
              <li>
                <Image
                  alt="blog-gang"
                  src={'/logo-bloggang.png'}
                  height={50}
                  width={90}
                />
              </li>
              <li>
                <Image
                  alt="maggang"
                  src={'/logo-maggang.png'}
                  height={50}
                  width={90}
                />
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <Image
                  alt="pantipmarket"
                  src={'/logo-pantipmarket.png'}
                  height={50}
                  width={90}
                />
              </li>
              <li>
                <Image
                  alt="pantown"
                  src={'/logo-pantown.png'}
                  height={50}
                  width={90}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 justify-center md:order-2 order-3">
          <Image
            alt="logo-app-pantip"
            src={'/logo-app_pantip.png'}
            height={50}
            width={90}
          />
          <div>
            <p className="text-yellow-400 font-bold mb-4">
              ดาวน์โหลดได้แล้ววันนี้
            </p>
            <div className="flex gap-2">
              <ul className="space-y-2">
                <li>
                  <Image
                    alt="appstore"
                    src={'/button_download-app-store.png'}
                    height={50}
                    width={90}
                  />
                </li>
                <li>
                  <Image
                    alt="google-play"
                    src={'/button_download-google-play.png'}
                    height={50}
                    width={90}
                  />
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Image
                    alt="huawei"
                    src={'/huawei-Black.png'}
                    height={50}
                    width={90}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>{' '}
        <div className="flex justify-end md:order-3 order-2">
          <ul className="space-y-2">
            <li>กฎกติกา</li>
            <li>ลงโฆษณา</li>
            <li>สมัครงาน</li>
            <li>ติดต่อทีมงาน</li>
          </ul>
        </div>
      </footer>
      <div className="border-b border-gray-500" />
      <div className="max-w-[1500px] mx-auto py-8 px-4 md:px-10 grid grid-cols-2">
        <span>© 2024 Pantip.com</span>
        <div className="flex justify-end gap-2">
          <span>ติดตาม</span>
          <Image
            alt="facebook"
            src={'/icon/facebook.png'}
            height={20}
            width={20}
          />
          <Image
            alt="x"
            src={'/icon/twitter-sign.png'}
            height={20}
            width={20}
          />
          <Image
            alt="youtube"
            src={'/icon/youtube.png'}
            height={20}
            width={20}
          />
          <Image alt="tiktok" src={'/icon/tiktok.png'} height={20} width={20} />
        </div>
      </div>
    </section>
  );
}

export default Footer;
