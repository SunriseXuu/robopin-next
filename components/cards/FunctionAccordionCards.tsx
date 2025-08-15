"use client";

import { useState } from "react";

export default function FunctionAccordionCards({
  cards,
}: {
  cards: {
    title: string;
    content: string;
    coverUrl: string;
  }[];
}) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <div className="w-full max-lg:h-[688px] flex max-lg:flex-col justify-between items-center max-lg:px-8 gap-6">
      {cards.map(({ title, content, coverUrl }, idx) => {
        const isActive = activeIdx === idx;
        return (
          <div
            key={idx}
            className="w-full lg:h-96 relative flex flex-col justify-end bg-center bg-cover bg-no-repeat duration-500 rounded-2xl shadow-sm overflow-hidden cursor-pointer lg:p-9 p-6"
            style={{ flex: isActive ? cards.length + 1 : 1, backgroundImage: `url(${coverUrl})` }}
            onMouseEnter={() => setActiveIdx(idx)}
          >
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/70 to-transparent z-0" />

            <h3
              className={`absolute text-lg text-white font-bold transition-all ease-in-out duration-500 whitespace-nowrap lg:bottom-24 z-10 ${
                isActive ? "left-6 -translate-x-0 bottom-20 rotate-0" : "left-1/2 -translate-x-1/2 lg:-rotate-90"
              }`}
            >
              {title}
            </h3>

            <div
              className={`relative w-full text-sm text-zinc-200 transition-all ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              } duration-500 z-10`}
            >
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
