'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Возможности', href: '#features' },
    { label: 'Услуги', href: '#services' },
    { label: 'Как это работает', href: '#how-it-works' },
    { label: 'Тарифы', href: '#pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Логотип */}
        <Link href="/" className="text-2xl md:text-3xl font-bold text-primary">
          NeuroNex
        </Link>

        {/* Навигация десктоп */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray hover:text-primary transition-colors duration-250 uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Кнопка и бургер меню */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block btn btn-primary px-8 text-sm">
            Начать
          </button>

          {/* Бургер меню мобильное */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-8 h-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-full h-0.5 bg-black transition-all duration-250 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-black transition-all duration-250 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-black transition-all duration-250 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-light">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray hover:text-primary transition-colors duration-250 uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="btn btn-primary w-full mt-4">Начать</button>
          </div>
        </nav>
      )}
    </header>
  );
}
