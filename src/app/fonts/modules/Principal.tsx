import React from 'react';
import Image from 'next/image';
import EmailIcon from '@/app/fonts/images/email.svg';
import foto from '@/app/fonts/images/foto.jpg';

const Principal = () => {
    
    return (
        <div id='Principal' className='flex w-full'>
            <div id='personalInformation' className='flex w-1/4 bg-neutral-800 rounded-xl p-8 mr-5 items-center'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={foto.src} alt="" className='rounded-md w-4/6 ' />
                    <h1 className='text-3xl font-bold font-sans mt-5'>Kenneth Paredes</h1>
                    <div className='justify-center items-center bg-neutral-700 rounded-3xl px-10 py-2 text-base my-4 font-sans'>
                        Descargar PDF
                    </div>
                    <div id='separator'>
                        <div className='w-full bg-neutral-800 h-2 rounded-lg'>
                        </div>
                    </div>
                    <div id="personalInformation" className='flex flex-col'>
                        {/* Name Data */}
                        <div id='data' className="flex">
                            <img src="" alt="" />
                            <h1>Kenneth Raul Paredes Rivera</h1>
                        </div>
                        {/* Email Data */}
                        <div id='data' className="flex flex-row">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                            <div>
                                <h1>Personal Email</h1>
                                <h1>raulparedes20031221@gmail.com</h1>
                            </div>
                        </div>
                        {/* Email Data */}
                        <div id='data' className="flex">
                            <img src="./" alt="" />
                            <h1>kparedes9203@uta.edu.ec</h1>
                        </div>
                        {/* Personal Number Data */}
                        <div id='data' className="flex">
                            <img src="" alt="" />
                            <h1>09633307063</h1>
                        </div>

                    </div>
                </div>
            </div>
            <div id='Windows' className='flex w-5/6 ml-12 rounded-xl bg-neutral-800 p-12'>
                <div className='flex flex-row justify-center items-center'>
                    {/* About Me */}
                    <h1 className='font-mono '>About Me</h1>
                    <ol className='flex flex-row p-15'>
                        {/* General */}
                        <li className='m-4 text-purple-500 bg-slate-700 pr-6 pl-6 pt-4 pb-2'>
                            <h1>
                                GEN
                            </h1>
                        </li>
                        {/* Experiences */}
                        <li className='m-4 text-purple-500 bg-slate-700 pr-6 pl-6 pt-4 pb-2'>
                            <h1>
                                Exp
                            </h1>
                        </li>
                        {/* Curses */}
                        <li className='m-4 text-purple-500 bg-slate-700 pr-6 pl-6 pt-4 pb-2'>
                            <h1>
                                Cur
                            </h1>
                        </li>
                        {/* Proyects */}
                        <li className='m-4 text-purple-500 bg-slate-700 pr-6 pl-6 pt-4 pb-2'>
                            <h1>
                                Pro
                            </h1>
                        </li>
                        {/* Contacts */}
                        <li className='m-4 text-purple-500 bg-slate-700 pr-6 pl-6 pt-4 pb-2'>
                            <h1>
                                Con
                            </h1>
                        </li>
                    </ol>
                </div>
            </div>

        </div>
    )
}

export default Principal;