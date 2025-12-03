import React from 'react';
import Skills from '../components/Skills';
import Languages from '../components/Languages';
import SocialNetworks from '../components/SocialNetworks';
import MemoryGame from '../components/MemoryGame';
import { Dictionary } from '../app/types/Dictionary';

export default function General({ dictionary }: { dictionary: Dictionary }) {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-6 shadow-lg flex flex-col gap-6">
      {/* Header fijo */}
      <div className="flex-shrink-0">
        <b className='font-sans text-4xl block'>{dictionary.general.title}</b>
        <p className='mt-4 font-mono text-gray-50 text-justify'>{dictionary.general.description}</p>
      </div>
      
      {/* Contenido scrollable con scrollbar personalizado */}
      <div className="flex-1 overflow-y-auto mt-6 pr-2 flex flex-col gap-6 scrollbar-custom">
        <Skills dictionary={dictionary} />
        <Languages dictionary={dictionary} />
        <MemoryGame dictionary={dictionary} />
      </div>
    </div>
  );
}
