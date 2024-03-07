import React from 'react';

interface PostCardProps {
  title: string;
  tags: string[];
  creater: string;
  comments: number;
  img?: string;
  isPick?: boolean;
}

function PostCard({
  title,
  img,
  tags,
  creater,
  comments = 0,
  isPick = false,
}: PostCardProps) {
  return (
    <div className="rounded-xl bg-[#353156] text-sm h-full cursor-pointer flex flex-col">
      <div
        className="rounded-xl h-60 md:h-56 w-full"
        style={{
          backgroundImage: `url('${img}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {isPick && (
          <div className="p-1 px-2 m-2 bg-[#1f1d33] text-yellow-400 font-bold rounded-full inline-block">
            Pantip Pick
          </div>
        )}
      </div>
      <div className="p-4 flex flex-1 flex-col">
        <div className="flex justify-between mb-1 gap-2">
          <p className="text-md font-bold flex-1">{title}</p>
          <div className="flex gap-1 text-pantip-placeholder text-xs">
            <img alt={title} src="/icon/comment.png" className="h-5 w-5" />
            <span> {comments}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 text-pantip-placeholder">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="flex flex-1 items-end">
          <p className=" text-[#9d9ac0] font-bold">{creater}</p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
