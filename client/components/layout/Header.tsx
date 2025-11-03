// @ts-nocheck
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Logs, Minimize, Paintbrush, Cpu, Idea, Code2,Lightbulb } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Shared link styles for consistent underline animation
  const linkStyles =
    "relative hover:text-indigo-400 transition duration-300 ease-in-out " +
    "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 " +
    "after:h-[2px] after:bg-indigo-400 after:transition-all after:duration-300 " +
    "hover:after:w-full";

  return (
    <header className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        
        <div className="flex items-center gap-2">
          <Link href="/#home" className={`${linkStyles} flex items-center`}>
            <Lightbulb
              className="text-indigo-400"
              size={24} 
              strokeWidth={2}
            />            
            <span className="text-lg md:text-2xl font-bold">Kal.</span>
          </Link>
        </div>

        
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link href="/#home" className={linkStyles}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className={linkStyles}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#projects" className={linkStyles}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#contact" className={linkStyles}>
              Contact
            </Link>
          </li>
        </ul>

        
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-3xl text-white focus:outline-none transition duration-300 ease-in-out"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <Minimize size={28} /> : <Logs size={28} />}
          </button>
        </div>
      </nav>

      
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white absolute top-16 left-0 w-full p-6 shadow-lg">
          <ul className="space-y-6 text-center text-xl">
            <li>
              <Link href="/#about" className={linkStyles} onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/#projects" className={linkStyles} onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#contact" className={linkStyles} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
