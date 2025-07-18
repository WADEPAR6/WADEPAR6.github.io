"use client";

import React, { Suspense } from 'react';
import General from '@/sections/General';
import Experience from '@/sections/Experience';
import Education from '@/sections/Education';
import Contacts from '@/sections/Contacts';
import InformationPersonal from '@/components/InformationPersonal';
import { Dictionary } from '../app/types/Dictionary';
import { Menu } from 'lucide-react';

export default function Principal({ dictionary }: { dictionary: Dictionary }) {
    const [selectedSection, setSelectedSection] = React.useState('General');
    const [menuOpen, setMenuOpen] = React.useState(false);

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
        <div id='Principal' className='flex flex-col w-full h-full max-w-7xl mx-auto'>
            {/* Sticky Header: Idiomas (izquierda) y botones de sección (derecha) */}
            <header className='w-full flex flex-row items-center justify-between mb-6 mt-4 px-4 sticky top-0 z-40 bg-neutral-900'>
                {/* Idiomas a la izquierda */}
                <div className='flex flex-row gap-2'>
                    <button onClick={() => window.location.pathname = '/es'} className='bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition text-xs mx-2 my-2'>Español</button>
                    <button onClick={() => window.location.pathname = '/en'} className='bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition text-xs mx-2 my-2'>English</button>
                    <button onClick={() => window.location.pathname = '/ar'} className='bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition text-xs mx-2 my-2'>العربية</button>
                </div>
                {/* Botones de sección a la derecha (responsive) */}
                <div className='flex items-center'>
                    {/* Desktop: botones horizontales */}
                    <ol className='hidden md:flex flex-row flex-wrap gap-2 md:gap-3'>
                        <li onClick={() => setSelectedSection('General')} className={`bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition my-2 cursor-pointer ${selectedSection==='General' ? 'ring-2 ring-purple-400' : ''}`}><h1>{dictionary.general.title}</h1></li>
                        <li onClick={() => setSelectedSection('Experience')} className={`bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition my-2 cursor-pointer ${selectedSection==='Experience' ? 'ring-2 ring-purple-400' : ''}`}><h1>{dictionary.workExperienceTitle}</h1></li>
                        <li onClick={() => setSelectedSection('Education')} className={`bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition my-2 cursor-pointer ${selectedSection==='Education' ? 'ring-2 ring-purple-400' : ''}`}><h1>{dictionary.educationTitle}</h1></li>
                        <li onClick={() => setSelectedSection('Contacts')} className={`bg-neutral-700 text-white rounded-2xl px-4 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition my-2 cursor-pointer ${selectedSection==='Contacts' ? 'ring-2 ring-purple-400' : ''}`}><h1>{dictionary.contacts}</h1></li>
                    </ol>
                    {/* Mobile: menú hamburguesa */}
                    <div className='md:hidden relative ml-2'>
                        <button
                            onClick={() => setMenuOpen((open) => !open)}
                            className='p-2 rounded-lg bg-neutral-700 text-white shadow-md shadow-purple-300 hover:bg-neutral-600 transition flex items-center'
                            aria-label='Open menu'
                        >
                            <Menu size={28} />
                        </button>
                        {menuOpen && (
                            <div className='absolute right-0 mt-2 z-50 bg-neutral-800 rounded-xl shadow-lg py-2 min-w-[180px] border border-neutral-700'>
                                <button
                                    onClick={() => { setSelectedSection('General'); setMenuOpen(false); }}
                                    className={`block w-full text-left px-4 py-2 text-white hover:bg-purple-700 transition ${selectedSection === 'General' ? 'bg-purple-800' : ''}`}
                                >
                                    {dictionary.general.title}
                                </button>
                                <button
                                    onClick={() => { setSelectedSection('Experience'); setMenuOpen(false); }}
                                    className={`block w-full text-left px-4 py-2 text-white hover:bg-purple-700 transition ${selectedSection === 'Experience' ? 'bg-purple-800' : ''}`}
                                >
                                    {dictionary.workExperienceTitle}
                                </button>
                                <button
                                    onClick={() => { setSelectedSection('Education'); setMenuOpen(false); }}
                                    className={`block w-full text-left px-4 py-2 text-white hover:bg-purple-700 transition ${selectedSection === 'Education' ? 'bg-purple-800' : ''}`}
                                >
                                    {dictionary.educationTitle}
                                </button>
                                <button
                                    onClick={() => { setSelectedSection('Contacts'); setMenuOpen(false); }}
                                    className={`block w-full text-left px-4 py-2 text-white hover:bg-purple-700 transition ${selectedSection === 'Contacts' ? 'bg-purple-800' : ''}`}
                                >
                                    {dictionary.contacts}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            {/* Main content: 25% info personal, 75% sección seleccionada */}
            <div className='flex flex-col md:flex-row w-full h-full gap-8 md:gap-12'>
                {/* Info personal (25%) */}
                <div className="w-full md:w-1/4 flex-shrink-0">
                    <InformationPersonal dictionary={dictionary} />
                </div>
                {/* Sección seleccionada (75%) */}
                <div id='Windows' className='w-full md:w-3/4 flex flex-col rounded-xl bg-neutral-800 p-4 md:p-10 pt-1 mb-8 min-h-[500px]'>
                    <Suspense fallback={<div>Loading...</div>}>
                        {renderSection()}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}