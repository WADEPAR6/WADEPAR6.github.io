import React from 'react';
import WorkExperiences from '../components/WorkExperiences';
import { Dictionary } from '../app/types/Dictionary';

export default function Experience({ dictionary }: { dictionary: Dictionary }) {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-6 shadow-lg flex flex-col h-[600px]">
      {/* Header fijo */}
      <div className="flex-shrink-0">
        <b className='font-sans text-4xl block'>{dictionary.workExperienceTitle}</b>
        <p className='mt-4 font-mono text-gray-50 text-justify'>{dictionary.experienceDescription}</p>
      </div>
      
      {/* Contenido scrollable con scrollbar personalizado */}
      <div className="flex-1 overflow-y-auto mt-6 pr-2 scrollbar-custom">
        <WorkExperiences dictionary={dictionary} />
      </div>
    </div>
  );
}
