import React from 'react';
import PrincipalProps from '@/app/fonts/types/PrincipalProps';

function WorkExperiences({ dictionary }: PrincipalProps) {
    return (
        <div className='bg-slate-800 rounded-xl p-5 my-6'>
            <b className='font-sans text-4xl'>{dictionary.workExperienceTitle}</b>
            <div className='h-1 bg-slate-400 w-11/12 rounded-full my-4 mx-3' id='separator'></div>
            <p className='m-5 font-mono text-gray-50'>{dictionary.workExperienceNull}</p>
        </div>
    );
}

export default WorkExperiences;