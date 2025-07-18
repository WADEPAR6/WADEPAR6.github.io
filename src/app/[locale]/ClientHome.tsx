"use client";

import React from 'react';
import Principal from '@/modules/Principal';
import { useRouter, usePathname } from 'next/navigation';
import { Dictionary } from '../types/Dictionary';

export default function ClientHome({ dictionary }: { dictionary: Dictionary }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLang: string) => {
    const segments = pathname.split('/');
    segments[1] = newLang;
    router.push(segments.join('/'));
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* Language Switcher - fixed and always visible */}
      <div className='fixed top-6 right-6 z-50 flex space-x-4'>
        <button 
          onClick={() => handleLanguageChange('en')} 
          className="bg-slate-800 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-slate-600 transition"
        >
          English
        </button>
        <button 
          onClick={() => handleLanguageChange('es')} 
          className="bg-slate-800 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-slate-600 transition"
        >
          Español
        </button>
        <button 
          onClick={() => handleLanguageChange('ar')} 
          className="bg-slate-800 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-slate-600 transition"
        >
          عربي
        </button>
      </div>
      <main className="flex flex-col gap-8 p-10 pt-2 h-full w-full mt-28">
        <Principal dictionary={dictionary} />
      </main>
    </div>
  );
} 