import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Site title/logo */}
        <Link href="/" className="text-lg font-bold">
          George Brown Legal
        </Link>

        {/* Navigation links */}
        <div className="space-x-6">
          <Link href="/" className="text-sm text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/services" className="text-sm text-gray-700 hover:text-black">
            Services
          </Link>
          <Link href="/contact" className="text-sm text-gray-700 hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}