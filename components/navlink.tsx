"use client";
import Link from "next/link";

const Navbar = () => {

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl text-blue-600">
            Belajar Javascript
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/kalkulatorbelanja" className="text-gray-700 hover:text-blue-600 transition">Kalkulator belanja</Link>
            <Link href="/caridata" className="text-gray-700 hover:text-blue-600 transition">caridata</Link>
            <Link href="/transformation" className="text-gray-700 hover:text-blue-600 transition">transformasi</Link>
            <Link href="/inputvalidation" className="text-gray-700 hover:text-blue-600 transition">inputvalidation</Link>
            <Link href="/dekomposisi" className="text-gray-700 hover:text-blue-600 transition">dekomposisi</Link>
            <Link href="/contactpage" className="text-gray-700 hover:text-blue-600 transition">contactpage</Link>
            <Link href="/filtering" className="text-gray-700 hover:text-blue-600 transition">filter</Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;