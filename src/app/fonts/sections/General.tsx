import React from 'react';
import PrincipalProps from '@/app/fonts/types/PrincipalProps';
import Skills from '../components/Skills';
import Languages from '../components/Languages';

function General({ dictionary }: PrincipalProps) {
  return (
    <div>
      <b className='font-sans text-4xl'>{dictionary.general.title}</b>
      <p className='m-5 font-mono text-gray-50'>{dictionary.general.description}</p>
      <Skills dictionary={dictionary}/>
      <Languages dictionary={dictionary}/>
    </div>
  );
}

export default General;
