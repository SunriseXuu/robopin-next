"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageCollapseCards({
  cards,
}: {
  cards: {
    title: string;
    coverUrl: string;
    subTitles: {
      title: string;
      list: string[];
    }[];
  }[];
}) {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <div className="w-full flex justify-between items-start gap-12">
      <div className="basis-3/5 h-96 shadow-sm rounded-2xl overflow-hidden">
        <Image
          className="w-full h-full object-cover transition-all duration-300"
          src={cards[openIdx].coverUrl}
          alt={cards[openIdx].title}
          width={1024}
          height={768}
        />
      </div>

      <div className="basis-2/5 min-h-96 flex flex-col gap-2">
        {cards.map((card, idx) => (
          <div key={idx} className={`border-b border-zinc-400 cursor-pointer py-2`} onClick={() => setOpenIdx(idx)}>
            <h3 className="font-semibold mb-2">{card.title}</h3>

            {card.subTitles.map((subTitle, subIdx) => (
              <div
                key={subIdx}
                className="flex flex-col overflow-hidden gap-1"
                style={{
                  transition: openIdx === idx ? "max-height 1s ease-in-out" : "max-height 0.2s ease-in-out",
                  maxHeight: openIdx === idx ? "24rem" : "0",
                }}
              >
                <h4 className="font-medium">{subTitle.title}</h4>
                <ul className="text-sm text-zinc-600 list-disc pl-5 mb-2">
                  {subTitle.list.map((item: string, i: number) => (
                    <li key={i}>
                      <em>{item}</em>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
