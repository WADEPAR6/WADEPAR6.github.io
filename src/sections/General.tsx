import React from 'react';
import Skills from '../components/Skills';
import Languages from '../components/Languages';
import SocialNetworks from '../components/SocialNetworks';
import { Dictionary } from '../app/types/Dictionary';

export default function General({ dictionary }: { dictionary: Dictionary }) {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-6 shadow-lg flex flex-col gap-6">
      <div>
        <b className='font-sans text-4xl block'>{dictionary.general.title}</b>
        <p className='mt-4 font-mono text-gray-50 text-justify'>{dictionary.general.description}</p>
      </div>
      <Skills dictionary={dictionary} />
      <Languages dictionary={dictionary} />
      <SocialNetworks dictionary={dictionary} />
    </div>
  );
}
