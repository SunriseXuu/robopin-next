import Image from "next/image";

export default function AppTopbar() {
  return (
    <>
      <nav className="fixed w-full h-[55px] flex justify-center items-center bg-white/50 backdrop-blur-lg shadow-sm p-4 z-50">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo-ico" width={36} height={36} priority />
          <h3 className="text-lg font-bold">Robopin</h3>
        </div>
      </nav>

      <nav className="w-full h-[55px]" />
    </>
  );
}
