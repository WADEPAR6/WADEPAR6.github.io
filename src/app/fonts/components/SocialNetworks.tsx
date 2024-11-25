"use client";

import React from 'react';
import PrincipalProps from '@/app/fonts/types/PrincipalProps';

function SocialNetworks({ dictionary }: PrincipalProps) {
    const socialNetworksItems = dictionary.socialNetworks;

    return (
        <div className='w-80% bg-slate-800 rounded-lg my-6 p-5'>
            <b className='font-sans text-4xl'>{dictionary.socialNetworkTitle}</b>
            <div className='h-1 bg-slate-400 w-11/12 rounded-full my-4 mx-3' id='separator'></div>
            <div className='grid grid-cols-3 gap-4 h-80 overflow-y-auto scrollbar-custom p-2'>
                {socialNetworksItems?.map((socialNetwork) => (
                    <div key={socialNetwork.key} className='relative bg-slate-700 rounded-lg overflow-hidden'>
                        <img src={socialNetwork.icon} alt={socialNetwork.name} className='w-full h-full object-cover opacity-70' />
                        <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2'>
                            <h2 className='font-bold text-xl text-white'>{socialNetwork.name}</h2>
                            <a href={socialNetwork.url} className='text-blue-400 underline' target='_blank' rel='noopener noreferrer'>{socialNetwork.name}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SocialNetworks;
