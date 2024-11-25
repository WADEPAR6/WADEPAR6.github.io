"use client";

import React from 'react';
import PrincipalProps from '@/app/fonts/types/PrincipalProps';

function Proyects({ dictionary }: PrincipalProps) {
    const proyectsItems = dictionary.proyectsItems;

    return (
        <div className='w-80% bg-slate-800 rounded-lg my-6 p-5'>
            <b className='font-sans text-4xl'>{dictionary.proyects}</b>
            <div className='h-1 bg-slate-400 w-11/12 rounded-full my-4 mx-3' id='separator'></div>
            <div className='grid grid-cols-3 gap-4 h-80 overflow-y-auto scrollbar-custom p-2'>
                {proyectsItems?.map((proyect) => (
                    <div key={proyect.key} className='relative bg-slate-700 rounded-lg overflow-hidden'>
                        <img src={proyect.image} alt={proyect.name} className='w-full h-full object-cover opacity-70' />
                        <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2'>
                            <h2 className='font-bold text-xl text-white'>{proyect.name}</h2>
                            <p className='text-sm text-gray-300'>{proyect.period}</p>
                            <a href={proyect.url} className='text-blue-400 underline' target='_blank' rel='noopener noreferrer'>{dictionary.repository}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Proyects;