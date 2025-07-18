import React from 'react';
import { Dictionary } from '../app/types/Dictionary';

export default function Skills({ dictionary }: { dictionary: Dictionary }) {
    const skillItems = dictionary.general.skills.items;
    return (
        <div className='w-full bg-slate-800 rounded-xl p-6 shadow-lg'>
            <b className='font-sans text-4xl text-left block'>{dictionary.general.skills.nameSkill}</b>
            <div className='h-1 bg-slate-400 w-11/12 rounded-full my-4 mx-auto' id='separator'></div>
            <h1 className='font-mono my-3 text-justify'>{dictionary.general.skills.description}</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto pr-2'>
                {(Object.values(skillItems) as string[]).map((skill, index) => (
                    <div key={index} className='bg-slate-700 p-4 rounded-lg flex items-center justify-center w-full'>
                        <h2 className='font-bold text-lg text-center'>{skill}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
