"use client";

import { useState } from "react";

export default function FunctionAccordionCards({ cards }: { cards: { title: string; content: string }[] }) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <div className="w-full flex justify-between items-center gap-6">
      {cards.map(({ title, content }, idx) => {
        const isActive = activeIdx === idx;
        return (
          <div
            key={idx}
            className="h-96 relative flex flex-col justify-end duration-500 rounded-2xl shadow-sm cursor-pointer p-9"
            style={{ flex: isActive ? cards.length + 1 : 1 }}
            onMouseEnter={() => setActiveIdx(idx)}
          >
            <h3
              className={`font-bold transition-all ease-in-out duration-500 whitespace-nowrap text-lg bottom-24 ${
                isActive ? "absolute rotate-0" : "absolute left-1/2 -translate-x-1/2 -rotate-90"
              }`}
            >
              {title}
            </h3>

            <div
              className={`w-full text-sm text-zinc-600 transition-all ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              } duration-500`}
            >
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
