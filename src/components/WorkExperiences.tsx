import React from 'react';
import { Dictionary } from '../app/types/Dictionary';

export default function WorkExperiences({ dictionary }: { dictionary: Dictionary }) {
    const items = dictionary.workExperienceItems || [];
    if (!items.length) {
        return (
            <div className='bg-slate-800 rounded-xl p-5 my-6'>
                <b className='font-sans text-4xl'>{dictionary.workExperienceTitle}</b>
                <div className='h-1 bg-slate-400 w-11/12 rounded-full my-4 mx-3' id='separator'></div>
                <p className='m-5 font-mono text-gray-50'>{dictionary.workExperienceNull}</p>
            </div>
        );
    }
    return (
        <div className='flex flex-col gap-6'>
            {items.map((exp, idx) => (
                <div key={exp.key || idx} className='bg-slate-800 rounded-xl p-5 shadow-md'>
                    <div className='flex flex-row justify-between items-center'>
                        <span className='font-bold text-2xl'>{exp.position}</span>
                        <span className='text-xs text-right font-semibold px-3 py-1 rounded-full ml-6 shadow-md shadow-purple-400'>{exp.period}</span>
                    </div>
                    <span className='text-base text-gray-200 mb-2'>{exp.company}</span>
                    <div className='h-1 bg-slate-400 w-11/12 rounded-full my-4 mx-3' id='separator'></div>
                    <p className='font-mono text-gray-50'>{exp.description}</p>
                </div>
            ))}
        </div>
    );
}