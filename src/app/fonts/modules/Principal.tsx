"use client"

import React, { Suspense } from 'react';

import PrincipalProps from '@/app/fonts/types/PrincipalProps';
import General from '@/app/fonts/sections/General';
import Experience from '@/app/fonts/sections/Experience';
import Education from '@/app/fonts/sections/Education';
import Contacts from '@/app/fonts/sections/Contacts';
import InformationPersonal from '@/app/fonts/components/InformationPersonal';

function Principal({ dictionary }: PrincipalProps) {

    const [selectedSection, setSelectedSection] = React.useState('General');

    const renderSection = () => {
        switch (selectedSection) {
            case 'General':
                return <General dictionary={dictionary} />;
            case 'Experience':
                return <Experience dictionary={dictionary} />;
            case 'Education':
                return <Education dictionary={dictionary} />;
            case 'Contacts':
                return <Contacts dictionary={dictionary} />;
            default:
                return <General dictionary={dictionary} />;
        }
    };
    return (
        <div id='Principal' className='flex w-full'>
            
            <InformationPersonal dictionary={dictionary} />

            <div id='Windows' className='flex w-5/6 ml-12 rounded-xl bg-neutral-800 p-12 pt-1 mb-8'>
                <div className='flex flex-col justify-start w-full'>
                    {/* Botones para cambiar la sección */}
                    <div className='flex flex-row justify-end'>
                        <h1></h1>
                        <ol className='flex flex-row'>
                            <li onClick={() => setSelectedSection('General')} className='bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition my-4 cursor-pointer mx-3'>
                                <h1>{dictionary.general.title}</h1>
                            </li>
                            <li onClick={() => setSelectedSection('Experience')} className='bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition my-4 cursor-pointer mx-3'>
                                <h1>{dictionary.workExperienceTitle}</h1>
                            </li>
                            <li onClick={() => setSelectedSection('Education')} className='bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition my-4 cursor-pointer mx-3'>
                                <h1>{dictionary.educationTitle}</h1>
                            </li>
                            <li onClick={() => setSelectedSection('Contacts')} className='bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition my-4 cursor-pointer mx-3'>
                                <h1>{dictionary.contacts}</h1>
                            </li>
                        </ol>
                    </div>

                    {/* Renderizado de la sección seleccionada */}
                    <div className='mt-4'>
                        <Suspense fallback={<div>Loading...</div>}>
                            {renderSection()}
                        </Suspense>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Principal;