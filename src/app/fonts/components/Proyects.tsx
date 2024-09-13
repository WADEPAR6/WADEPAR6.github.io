import React from 'react';
import PrincipalProps from '@/app/fonts/types/PrincipalProps';

function Proyects({ dictionary }: PrincipalProps) {
    return (
        <div className='bg-slate-500 rounded-lg'>
            <b className='font-sans text-4xl'>{dictionary.download}</b>
            <p className='m-5 font-mono text-gray-50'>{}</p>
        </div>
    );
}

export default Proyects;