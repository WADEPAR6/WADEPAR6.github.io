import React from 'react';
import PrincipalProps from '@/app/fonts/types/PrincipalProps';

function WorkExperiences({ dictionary }: PrincipalProps) {
    return (
        <div className='bg-slate-800 rounded-xl p-5'>
            <p className='m-5 font-mono text-gray-50'>{dictionary.workExperienceNull}</p>
        </div>
    );
}

export default WorkExperiences;