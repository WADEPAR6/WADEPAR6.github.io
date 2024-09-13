import React from 'react';
import PrincipalProps from '@/app/fonts/types/PrincipalProps';
import foto from '@/app/fonts/images/foto.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone, faCalendar, faAddressBook } from '@fortawesome/free-solid-svg-icons';

function InformationPersonal({ dictionary }: PrincipalProps) {
    return (
        <div id='personalInformation' className='flex w-1/4 bg-neutral-800 rounded-xl px-4 py-12 mr-5 items-center mb-0 h-min'>
                <div className='flex flex-col items-center justify-center'>
                    {/* IMAGEN Y NOMBRE */}
                    <div className='flex flex-col justify-center items-center'>
                        <img src={foto.src} alt="" className='rounded-md w-4/6' />
                        <h1 className='text-2xl font-bold font-sans mt-5'>Kenneth Paredes</h1>
                        <div className='bg-neutral-700 text-white rounded-2xl px-9 py-2 shadow-md shadow-purple-300 hover:bg-neutral-600 transition my-5 cursor-pointer'>
                            {dictionary.download}
                        </div>
                    </div>
                    {/* SEPARADOR DEORATIVO */}
                    <div id='separator' className='w-5/6 bg-neutral-600 h-1 rounded-xl my-2'></div>
                    {/* INFORMACION PERSONAL */}
                    <div id="personalInformation" className='flex flex-col'>
                        {/* Name Data */}
                        <div id='data' className="flex mx-5 items-center my-2">
                            <div className='rounded-xl bg-neutral-700 p-2'>
                                <FontAwesomeIcon icon={faUser} className='w-6 h-6 text-purple-500' />
                            </div>
                            <div className='ml-4 text-xs w-3/4'>
                                <h1>Kenneth Raul</h1>
                                <h1>Paredes Rivera</h1>
                            </div>
                        </div>
                        {/* Email Data */}
                        <div id="data" className="flex mx-5 items-center my-2">
                            <div className='rounded-xl bg-neutral-700 p-2'>
                                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-purple-500" />
                            </div>
                            <div className="ml-4 text-xs w-3/4">
                                <h1>{dictionary.personalEmail}</h1>
                                <h1>raulparedes20031221@gmail.com</h1>
                            </div>
                        </div>
                        {/* Email Data */}
                        <div id="data" className="flex mx-5 items-center my-2">
                            <div className='rounded-xl bg-neutral-700 p-2'>
                                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-purple-500" />
                            </div>
                            <div className="ml-4 text-xs w-3/4">
                                <h1>{dictionary.institutionalEmail}</h1>
                                <h1>kparedes9203@uta.edu.ec</h1>
                            </div>
                        </div>
                        {/* Personal Number Data */}
                        <div id="data" className="flex mx-5 items-center my-2">
                            <div className='rounded-xl bg-neutral-700 p-2'>
                                <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-purple-500" />
                            </div>
                            <div className="ml-4 text-xs w-3/4">
                                <h1>{dictionary.personalNumber}</h1>
                                <h1>0963307063</h1>
                            </div>
                        </div>
                        {/* Birthday Data */}
                        <div id="data" className="flex mx-5 items-center my-2">
                            <div className='rounded-xl bg-neutral-700 p-2'>
                                <FontAwesomeIcon icon={faCalendar} className="w-6 h-6 text-purple-500" />
                            </div>
                            <div className="ml-4 text-xs w-3/4">
                                <h1>{dictionary.birthdate}</h1>
                                <h1>21/12/2003</h1>
                            </div>
                        </div>
                        {/* Address Data */}
                        <div id="data" className="flex mx-5 items-center my-2">
                            <div className='rounded-xl bg-neutral-700 p-2'>
                                <FontAwesomeIcon icon={faAddressBook} className="w-6 h-6 text-purple-500" />
                            </div>
                            <div className="ml-4 text-xs w-3/4">
                                <h1>{dictionary.address}</h1>
                                <h1>Guayaquil, Ecuador</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default InformationPersonal;