import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between bg-gray-100 bg-opacity-70 backdrop-blur-md px-6 py-4 shadow">
      <div className="flex items-center gap-4">
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        <h1 className="text-xl font-semibold">Mon Site Next.js</h1>
      </div>
    </header>
  );
}