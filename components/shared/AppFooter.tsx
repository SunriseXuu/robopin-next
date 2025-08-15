import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="bg-zinc-800">
      <div className="lg:w-[1024px] md:w-[768px] sm:w-[640px] flex flex-col mx-auto pt-20 pb-8 gap-8">
        <div className="flex flex-col max-lg:px-8 mb-8 gap-4">
          <h1 className="max-lg:text-center lg:text-4xl md:text-3xl text-2xl text-white font-bold">
            Explore the Innobound
          </h1>
          <p className="max-lg:text-center text-xs text-zinc-300">
            RM A1-13, BLK A 3/F, YEE LIM IND CTR, 2-28 KWAI LOK ST, KWAI CHUNG HONG KONG
          </p>
        </div>

        <hr className="border-zinc-600" />

        <div className="flex max-lg:flex-col justify-between items-center max-lg:px-8 gap-1">
          <h3 className="lg:text-lg text-white font-bold">Robopin</h3>
          <p className="text-xs text-zinc-300">© 2025-2026 Innobound. All rights reserved.</p>
          <Link href="mailto:langao.penny@gmail.com" className="text-sm text-blue-400 hover:text-blue-300 duration-200">
            langao.penny@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
