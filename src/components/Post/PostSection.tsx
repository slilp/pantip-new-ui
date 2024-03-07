import React from 'react';
import PostCard from './PostCard';

const posts = [
  {
    title: 'Dune ฉบับนิยายจบยังไงครับ',
    img: 'https://f.ptcdn.info/428/083/000/s9vchuq2kw4dla3hWx0Y-s.png',
    tags: [
      'Light Novel',
      'นิยายต่างประเทศ',
      'นิยายแปล',
      'Dune (ภาพยนตร์)ภาพยนตร์',
    ],
    creater: 'สมาชิกหมายเลข 4182539',
    comments: 10,
    isPick: true,
  },
  {
    title: '[CR] พาชม ศูนย์อาหารใหม่ ห้างดิโอลด์สยาม โฉมใหม่ไฉไลกว่าเดิม🍜🍛🍚',
    img: 'https://f.ptcdn.info/437/083/000/s9wxa09lisxgpX729ZFO-s.jpg',
    tags: ['ร้านอาหาร', 'สถานที่ท่องเที่ยวกรุงเทพฯ', 'One Day Trip', 'อาหาร'],
    creater: 'traveling',
    comments: 23,
    isPick: true,
  },
  {
    title:
      'เจาะลึกประเด็นที่นั่งของ ‘ลิซ่า’ ในโชว์ Louis Vuitton ที่บ่งบอกถึงระดับความสำคัญลำดับต้นๆ',
    img: 'https://f.ptcdn.info/438/083/000/s9x0pm18d25tipTz4cVgP-s.jpg',
    tags: [
      'K-POP',
      'นักร้องนักดนตรีเกาหลี',
      'YG Entertainment',
      'BLACKPINK (นักร้องนักดนตรี)',
    ],
    creater: 'fashion',
    comments: 41,
    isPick: true,
  },

  {
    title: 'ใครบอกกระแสดรอป! Karina Europe ซื้อดาวให้คาริน่า ชื่อดาว “ยูจีมิน”',
    img: 'https://f.ptcdn.info/441/083/000/s9xhys1bpiayrZRETNvD8-s.jpg',
    tags: ['นักร้องนักดนตรี', 'K-POP'],
    creater: 'สมาชิกหมายเลข 4182539',
    comments: 12,
  },
  {
    title: 'ชาวอีสานนิยมไปเที่ยวทะเลเวียดนามหรือไม่?',
    img: 'https://f.ptcdn.info/443/083/000/s9xxzhi6ovj1R9f2xwN-s.jpg',
    tags: ['ภาคอีสาน', 'ท่องเที่ยวประเทศเวียดนาม', 'ภูมิศาสตร์'],
    creater: 'สมาชิกหมายเลข 4182539',
    comments: 10,
  },
  {
    title: 'หลานม่าของเฌอและฟ้อนด์',
    img: 'https://f.ptcdn.info/436/083/000/s9wsgt10mcoL33b5C3JMg-o.jpg',
    tags: [
      'BNK48',
      'ณัฐทิชา จันทรวารีเลขา (ฟ้อนด์ BNK48)',
      'เฌอปราง อารีย์กุล (เฌอปราง BNK48)',
      'หลานม่า (ภาพยนตร์ไทย)',
      'นักร้องนักดนตรีไทย',
    ],
    creater: 'สมาชิกหมายเลข 4182539',
    comments: 100,
    isPick: true,
  },
  {
    title: '[Spoil] JUJUTSU KAISEN : 207',
    img: 'https://f.ptcdn.info/291/079/000/rmw396adnqsCimupNO0-s.jpg',
    tags: [
      'การ์ตูน',
      'Jujutsu Kaisen (มหาเวทย์ผนึกมาร)',
      'การ์ตูนญี่ปุ่นอนิเมะ',
      'Shonen Jump (นิตยสารการ์ตูน)',
    ],
    creater: 'สมาชิกหมายเลข 4182539',
    comments: 10,
  },
  {
    title:
      'เชียร์สดกอล์ฟหญิง LET Tour รายการ Aramco Team Series Tampa 2024 วันที่ 1',
    img: 'https://f.ptcdn.info/428/083/000/s9vcphqc44dc0RJn9Oa3-s.jpg',
    tags: ['กอล์ฟ'],
    creater: 'สมาชิกหมายเลข 3211913',
    comments: 21,
    isPick: true,
  },
  {
    title:
      'Suzuki Ciaz 1.2 GL vs Mitsubishi Attrage 1.2 GLX ตัวไหนประหยัดน้ำมันกว่าครับ ใช้ขับต่างจังหวัดครับ',
    img: 'https://f.ptcdn.info/435/083/000/s9wpyv6r97kMV5TuQkRN-s.jpg',
    tags: ['Suzuki (รถยนต์)', 'Eco Car', 'น้ำมันเชื้อเพลิง'],
    creater: 'สมาชิกหมายเลข 7257826',
    comments: 35,
    isPick: true,
  },
  {
    title: 'ไอเดียตกแต่งห้องนอนหรู ให้ห้องนอนน่าพักผ่อนยิ่งขึ้น',
    img: 'https://ptcdn.info/pick/566/000/000/s9wm5z18bnVy3ZRhGxy6-s.png',
    tags: [
      'เฟอร์นิเจอร์ตกแต่งบ้าน',
      'ตกแต่งคอนโดมิเนียม',
      'ห้องนอน',
      'การออกแบบตกแต่งภายใน (Interior Design)',
    ],
    creater: 'Bed official',
    comments: 21,
    isPick: true,
  },
];

function PostSection() {
  return (
    <div
      className="px-4 md:px-10 mb-3 text-pantip-secondary mx-auto max-w-[1500px]"
      style={{ minHeight: '70dvh' }}
    >
      <div className="grid gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {posts.map((post, index) => (
          <PostCard
            key={`post-${index}`}
            title={post.title}
            img={post.img}
            comments={post.comments}
            creater={post.creater}
            tags={post.tags}
            isPick={post?.isPick}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="mt-5 rounded-xl p-3 px-5  bg-pantip-main hover:bg-[#53507d]">
          ดูเพิ่มเติม
        </button>
      </div>
    </div>
  );
}

export default PostSection;
