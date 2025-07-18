"use client";

import React, { Suspense } from 'react';
import General from '@/sections/General';
import Experience from '@/sections/Experience';
import Education from '@/sections/Education';
import Contacts from '@/sections/Contacts';
import InformationPersonal from '@/components/InformationPersonal';
import { Dictionary } from '../app/types/Dictionary';

export default function Principal({ dictionary }: { dictionary: Dictionary }) {
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
        <div id='Principal' className='flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-8 md:gap-12 items-start justify-center'>
            {/* Left: Personal Info (20%) */}
            <div className="w-full md:w-1/4 flex-shrink-0">
                <InformationPersonal dictionary={dictionary} />
            </div>
            {/* Right: Main Content (80%) */}
            <div id='Windows' className='w-full md:w-3/4 flex flex-col rounded-xl bg-neutral-800 p-4 md:p-10 pt-1 mb-8 min-h-[500px]'>
                {/* Section Switcher */}
                <div className='flex flex-row justify-end'>
                    <ol className='flex flex-row flex-wrap gap-2 md:gap-3'>
                        <li onClick={() => setSelectedSection('General')} className={`bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition my-2 cursor-pointer ${selectedSection==='General' ? 'ring-2 ring-purple-400' : ''}`}>
                            <h1>{dictionary.general.title}</h1>
                        </li>
                        <li onClick={() => setSelectedSection('Experience')} className={`bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition my-2 cursor-pointer ${selectedSection==='Experience' ? 'ring-2 ring-purple-400' : ''}`}>
                            <h1>{dictionary.workExperienceTitle}</h1>
                        </li>
                        <li onClick={() => setSelectedSection('Education')} className={`bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition my-2 cursor-pointer ${selectedSection==='Education' ? 'ring-2 ring-purple-400' : ''}`}>
                            <h1>{dictionary.educationTitle}</h1>
                        </li>
                        <li onClick={() => setSelectedSection('Contacts')} className={`bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition my-2 cursor-pointer ${selectedSection==='Contacts' ? 'ring-2 ring-purple-400' : ''}`}>
                            <h1>{dictionary.contacts}</h1>
                        </li>
                    </ol>
                </div>
                {/* Rendered Section */}
                <div className='mt-4'>
                    <Suspense fallback={<div>Loading...</div>}>
                        {renderSection()}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}