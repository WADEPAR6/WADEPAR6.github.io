import React from 'react';
import PrincipalProps from '@/app/fonts/types/PrincipalProps';
import WorkExperiences from '../components/WorkExperiences';
import Proyects from '../components/Proyects';

function Experience({ dictionary }: PrincipalProps) {
  return (
    <div>
      <b className='font-sans text-4xl'>{dictionary.workExperienceTitle}</b>
      <p className='m-5 font-mono text-gray-50'>{dictionary.experienceDescription}</p>
      <WorkExperiences dictionary={dictionary}/>
      <Proyects dictionary={dictionary}/>
    </div>
  );
}

export default Experience;
