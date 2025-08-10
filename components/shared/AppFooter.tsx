import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="bg-zinc-800">
      <div className="max-w-[1024px] flex flex-col mx-auto pt-20 pb-8 gap-8">
        <div className="flex flex-col mb-8 gap-4">
          <h1 className="text-4xl text-white font-bold">Explore the Innobound</h1>
          <p className="text-xs text-zinc-300">
            RM A1-13, BLK A 3/F, YEE LIM IND CTR, 2-28 KWAI LOK ST, KWAI CHUNG HONG KONG
          </p>
        </div>

        <hr className="border-zinc-600" />

        <div className="flex justify-between items-center">
          <h3 className="text-lg text-white font-bold">Robopin</h3>
          <p className="text-xs text-zinc-300">© 2025-2026 Innobound. All rights reserved.</p>
          <Link href="mailto:langao.penny@gmail.com" className="text-sm text-blue-400 hover:text-blue-300 duration-200">
            langao.penny@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
