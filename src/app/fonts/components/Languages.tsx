import React from 'react';
import PrincipalProps from '@/app/fonts/types/PrincipalProps';

function Languages({ dictionary }: PrincipalProps) {
    return (
        <div className='w-80% bg-slate-800 rounded-lg m-5 p-5 h-max'>
            <b className='font-sans text-4xl'>{dictionary.nameLanguage}</b>
            <div className='h-1 bg-slate-400 w-11/12 rounded-full my-4 mx-3' id='separator'></div>
            <p className=' font-mono'>{dictionary.descriptionLanguage}</p>
            <div className='my-4 w-full'>
                <div className='bg-slate-500 p-6 rounded-lg items-center h-max my-5'>
                    <b className='font-mono text-4xl font-bold my-1 '>{dictionary.languas.spanish.nameSpanish}</b>
                    <p className='font-mono text-base my-2'>{dictionary.languas.spanish.descriptionSpanish}</p>
                    <div className='w-full bg-gray-200 rounded-full h-2.5'>
                        <div className='bg-blue-600 h-2.5 rounded-full' style={{ width: `${dictionary.languas.spanish.percentageSpanish}%` }}></div>
                        <span className='text-xs text-white p-1 my-16'>{dictionary.languas.spanish.percentageSpanish} %</span>
                    </div>
                </div>
                <div className='bg-slate-500 p-6 rounded-lg items-center h-max my-5'>
                    <b className='font-mono text-4xl font-bold my-1 '>{dictionary.languas.english.nameEnglish}</b>
                    <p className='font-mono text-base my-2'>{dictionary.languas.english.descriptionEnglish}</p>
                    <div className='w-full bg-gray-200 rounded-full h-2.5'>
                        <div className='bg-blue-600 h-2.5 rounded-full' style={{ width: `${dictionary.languas.english.percentageEnglish}%` }}></div>
                        <span className='text-xs text-white p-1 my-16'>{dictionary.languas.english.percentageEnglish} %</span>
                    </div>
                </div>
                <div className='bg-slate-500 p-6 rounded-lg items-center h-max my-5'>
                    <b className='font-mono text-4xl font-bold my-1 '>{dictionary.languas.arabic.nameArabic}</b>
                    <p className='font-mono text-base my-2'>{dictionary.languas.arabic.descriptionArabic}</p>
                    <div className='w-full bg-gray-200 rounded-full h-2.5'>
                        <div className='bg-blue-600 h-2.5 rounded-full' style={{ width: `${dictionary.languas.arabic.percentageArabic}%` }}></div>
                        <span className='text-xs text-white p-1 my-16'>{dictionary.languas.arabic.percentageArabic} %</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Languages;