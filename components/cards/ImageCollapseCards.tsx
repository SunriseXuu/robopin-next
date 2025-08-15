"use client";

import { useState } from "react";

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
    <div className="w-full flex max-lg:flex-col justify-between items-start max-lg:px-8 gap-12">
      <div className="lg:basis-3/5 w-full lg:aspect-[5/3] aspect-[3/4] shadow-sm rounded-2xl overflow-hidden">
        <iframe className="w-full h-full" src="http://localhost:3001/scenes/innobound" />
      </div>

      <div className="lg:basis-2/5 w-full min-h-96 flex flex-col gap-2">
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
