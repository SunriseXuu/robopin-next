import React from "react";

export default function FuturePotentialCards({ cards }: { cards: { label: string; title: string; list: string[] }[] }) {
  return (
    <div className="flex justify-between items-start gap-12">
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="w-12 h-12 flex justify-center items-center bg-zinc-200 rounded-xl">0{index + 1}</div>

          <label className="text-xs text-red-400 font-bold">{card.label}</label>

          <p className="font-semibold">{card.title}</p>

          <ul className="text-sm text-zinc-600 list-disc pl-5 mb-2">
            {card.list.map((item: string, i: number) => (
              <li key={i}>
                <em>{item}</em>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
