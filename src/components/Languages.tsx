import React from 'react';
import { Dictionary } from '../app/types/Dictionary';

type Language = {
    key: number;
    nameIdiom: string;
    descriptionIdiom: string;
    percentage: number;
};

export default function Languages({ dictionary }: { dictionary: Dictionary }) {
    const languas = dictionary.languas as Language[];
    return (
        <div className='w-full bg-slate-800 rounded-xl p-6 shadow-lg'>
            <b className='font-sans text-4xl text-left block mb-2'>{dictionary.nameLanguage}</b>
            <div className='h-1 bg-slate-400 w-11/12 rounded-full my-4 mx-auto' id='separator'></div>
            <p className='font-mono mb-6 text-justify'>{dictionary.descriptionLanguage}</p>
            <div className='my-4 w-full flex flex-col gap-6'>
                {languas.map((language) => (
                    <div
                        key={language.key}
                        className='bg-slate-700/80 p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-4 w-full shadow-md border border-slate-600 transition-transform hover:scale-[1.02] hover:shadow-lg'
                    >
                        <div className='flex-1 flex flex-col gap-1'>
                            <b className='font-mono text-2xl font-bold'>{language.nameIdiom}</b>
                            <p className='font-mono text-base text-gray-200'>{language.descriptionIdiom}</p>
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <div className='w-full bg-gray-200 rounded-full h-3 relative'>
                                <div
                                    className='bg-blue-600 h-3 rounded-full transition-all duration-300'
                                    style={{ width: `${language.percentage}%` }}
                                ></div>
                                <span className='absolute right-2 top-1/2 -translate-y-1/2 text-xs font-mono text-blue-900 font-bold'>{language.percentage}%</span>
                            </div>
                            <i className='text-xs text-white p-1 font-mono'>{dictionary.languagesLevel}</i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}