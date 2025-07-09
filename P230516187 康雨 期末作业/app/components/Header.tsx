import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#fefae0] text-[#606c38] p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl hover:text-gray-700">
          螺蛳粉和香菜的故事
        </Link>
        <div className="space-x-6">
          <Link href="/portfolio" className="hover:text-gray-700">
            作品集
          </Link>
          <Link href="/qanything" className="hover:text-gray-700">
            QAnything 问答
          </Link>
        </div>
      </nav>
    </header>
  );
} 