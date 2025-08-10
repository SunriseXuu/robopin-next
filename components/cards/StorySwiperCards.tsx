"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface UserProfile {
  username: string;
  age: number;
  career: string;
  avatarUrl: string;
  income: number;
  interests: string[];
  dialogs: string[];
}

function Card({ username, age, career, avatarUrl, income, interests, dialogs }: UserProfile) {
  return (
    <div className="min-w-96 flex flex-col justify-between border border-zinc-400 rounded-2xl p-6 gap-6">
      <div className="text-sm">
        {dialogs.map((dialog, index) => (
          <span key={index}>{dialog} </span>
        ))}
      </div>

      <p className="text-xs text-zinc-600">
        <em>{interests.join("、")}</em>
      </p>

      <div className="flex items-center gap-4">
        <Image
          className="w-10 h-10 shadow-sm rounded-full"
          src={avatarUrl}
          alt={`${username}'s avatar`}
          width={40}
          height={40}
          priority
        />
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-semibold">{username}</p>
          <p className="text-xs text-zinc-600">
            Age {age} / {career} / Income {income}
          </p>
        </div>
      </div>
    </div>
  );
}

function CardList({ cards }: { cards: UserProfile[] }) {
  return (
    <>
      {cards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </>
  );
}

export default function StorySwiperCards({ cards }: { cards: UserProfile[] }) {
  // 横向滚动相关
  const rowRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const scrollLeftRef = useRef(0); // 用于保存滚动位置

  // 无限横向滚动实现
  useEffect(() => {
    const rowDiv = rowRef.current;
    const timer: NodeJS.Timeout = setInterval(scrollRow, 16); // 约60fps;

    function scrollRow() {
      if (!rowDiv || paused) return;
      scrollLeftRef.current += 0.5; // 滚动速度
      // 内容重复两遍，滚动到一半重置
      if (scrollLeftRef.current >= rowDiv.scrollWidth / 2) {
        // 立即无缝衔接到开头，并继续滚动
        scrollLeftRef.current = 0.5;
        rowDiv.scrollLeft = scrollLeftRef.current;
      } else rowDiv.scrollLeft = scrollLeftRef.current;
    }

    return () => {
      clearInterval(timer);
    };
  }, [paused]);

  return (
    <div className="w-full relative">
      <div className="absolute w-24 h-full top-0 left-0 bg-gradient-to-r from-zinc-50 to-transparent z-40"></div>
      <div className="absolute w-24 h-full top-0 right-0 bg-gradient-to-l from-zinc-50 to-transparent z-40"></div>

      <div
        ref={rowRef}
        className="relative overflow-x-scroll hide-scrollbar flex flex-row gap-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ direction: "ltr" }}
      >
        <CardList cards={cards} />
        <CardList cards={cards} />
        <CardList cards={cards} />
      </div>
    </div>
  );
}
