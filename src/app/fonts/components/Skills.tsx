import React from 'react';
import PrincipalProps from '@/app/fonts/types/PrincipalProps';

function Skills({ dictionary }: PrincipalProps) {
    const skillItems = dictionary.general.skills.items;

    return (
        <div className='w-80% bg-slate-800 rounded-lg m-5 p-5'>
            <b className='font-sans text-4xl'>{dictionary.general.skills.nameSkill}</b>
            <div className='h-1 bg-slate-400 w-11/12 rounded-full my-4 mx-3' id='separator'></div>
            <h1 className='font-mono my-2'>{dictionary.general.skills.description}</h1>
            <div className='grid grid-cols-3 gap-4 h-60 overflow-y-auto scrollbar-custom p-2'>
                {Object.values(skillItems).map((skill, index) => (
                    <div key={index} className='bg-slate-700 p-4 rounded-lg items-center'>
                        <h2 className='font-bold text-xl'>{skill}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
