import React from 'react';
import Image from 'next/image';
import foto from '@/app/fonts/images/FotoPerfil.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faCalendar, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Dictionary } from '../app/types/Dictionary';

export default function InformationPersonal({ dictionary }: { dictionary: Dictionary }) {
    return (
        <div id='personalInformation' className='w-full bg-neutral-800 rounded-xl p-6 flex flex-col items-center shadow-lg sticky top-12'>
            {/* IMAGEN Y NOMBRE */}
            <div className='flex flex-col justify-center items-center'>
                <Image src={foto} alt="" className='rounded-md w-4/6' width={200} height={200} />
                <h1 className='text-2xl font-bold font-sans mt-5'>{dictionary.fullName}</h1>
                <a
                  href="/docs/Kenneth-Paredes-CV-Español.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-700 text-white rounded-2xl px-9 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition my-5 cursor-pointer block"
                >
                  {dictionary.download}
                </a>
            </div>
            {/* SEPARADOR DEORATIVO */}
            <div id='separator' className='w-5/6 bg-neutral-600 h-1 rounded-xl my-2'></div>
            {/* INFORMACION PERSONAL */}
            <div id="personalInformation" className='flex flex-col w-full'>
                {/* Name Data */}
                <div id='data' className="flex mx-5 items-center my-2">
                    <div className='rounded-xl bg-neutral-700 p-2'>
                        <FontAwesomeIcon icon={faUser} className='w-6 h-6 text-purple-500' />
                    </div>
                    <div className='ml-4 text-xs w-3/4'>
                        <h1>{dictionary.nameLabel}</h1>
                        <h1>{dictionary.firstName}</h1>
                        <h1>{dictionary.lastName}</h1>
                    </div>
                </div>
                {/* Personal Number Data */}
                <div id="data" className="flex mx-5 items-center my-2">
                    <div className='rounded-xl bg-neutral-700 p-2'>
                        <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="ml-4 text-xs w-3/4">
                        <h1>{dictionary.phoneLabel}</h1>
                        <h1>{dictionary.personalNumber}</h1>
                    </div>
                </div>
                {/* Birthday Data */}
                <div id="data" className="flex mx-5 items-center my-2">
                    <div className='rounded-xl bg-neutral-700 p-2'>
                        <FontAwesomeIcon icon={faCalendar} className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="ml-4 text-xs w-3/4">
                        <h1>{dictionary.birthdateLabel}</h1>
                        <h1>{dictionary.birthdate}</h1>
                    </div>
                </div>
                {/* Address Data */}
                <div id="data" className="flex mx-5 items-center my-2">
                    <div className='rounded-xl bg-neutral-700 p-2'>
                        <FontAwesomeIcon icon={faAddressBook} className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="ml-4 text-xs w-3/4">
                        <h1>{dictionary.addressLabel}</h1>
                        <h1>{dictionary.address}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}