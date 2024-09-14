  "use client"

import React, { useState } from 'react';
import Principal from '@/app/fonts/modules/Principal';
import en from '@/translations/en.json';
import es from '@/translations/es.json';
import ar from '@/translations/ar.json';

export default function Home() {
  const [lang, setLang] = useState('en');
  const dictionary = lang === 'en' ? en : lang === 'ar' ? ar : es; 

  const handleLanguageChange = (newLang: string) => {
    setLang(newLang);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 p-10 pt-2 h-full w-full mt-28">
      <div className='absolute top-4 right-4 flex space-x-4'>
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
        <Principal dictionary={dictionary} />
      </main>
    </div>
  );
}
