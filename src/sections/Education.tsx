import React from 'react';
import { Dictionary } from '../app/types/Dictionary';

export default function Education({ dictionary }: { dictionary: Dictionary }) {
  const educationItems = Array.isArray(dictionary.educationItems) ? dictionary.educationItems : [];
  const certifications = Array.isArray(dictionary.certificationsItems) ? dictionary.certificationsItems : [];
  return (
    <div className="w-full bg-slate-900 rounded-xl p-6 shadow-lg flex flex-col gap-6">
      <div>
        <b className="font-sans text-4xl block">{dictionary.educationTitle || 'Educación'}</b>
        <p className="mt-4 font-mono text-gray-50 text-justify">{dictionary.educationDescription || ''}</p>
      </div>
      {educationItems.map((edu, idx) => (
        <React.Fragment key={idx}>
          <div className="bg-slate-800 rounded-xl p-5 flex flex-col gap-2 shadow-md">
            <div className="flex flex-row justify-between items-center">
              <span className="font-bold text-4xl">{edu.degree}</span>
              <span className="text-xs text-right font-semibold px-3 py-1 rounded-full ml-6 shadow-md shadow-purple-400">{edu.period}</span>
            </div>
            <div className='h-1 bg-slate-400 w-11/12 rounded-full my-4 mx-3' id='separator'></div>
            <span className="text-base text-gray-200 mb-2">{edu.institution}</span>
            {Array.isArray(edu.details) && edu.details.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-2">
                {edu.details.map((d, i) => (
                  <div key={i} className="bg-slate-700/80 rounded-xl px-4 py-3 text-sm text-gray-100 shadow-sm flex-1 min-w-[180px] max-w-full">
                    {d}
                  </div>
                ))}
              </div>
            )}
          </div>
          {idx < educationItems.length - 1 && (
            <div className="h-1 bg-slate-600 rounded-full my-4" />
          )}
        </React.Fragment>
      ))}
      {/* Certifications Section */}
      {certifications.length > 0 && (
        <div className="mt-8">
          <b className="font-sans text-3xl block mb-4">{dictionary.certificationsTitle || 'Certificados'}</b>
          <p className='font-mono text-gray-50'>{dictionary.certificationDescription || ''}</p>
          {certifications.map((cert, idx) => (
            <React.Fragment key={idx}>
              <div className="bg-slate-800 rounded-xl p-5 flex flex-col gap-2 shadow-md">
                <div className="flex flex-row justify-between items-center">
                  <span className="font-bold text-4xl">{cert.name}</span>
                  <span className="text-xs text-right font-semibold px-3 py-1 rounded-full ml-4 shadow-md shadow-purple-400">{cert.period}</span>
                </div>
                <div className='h-1 bg-slate-400 w-11/12 rounded-full my-4 mx-3' id='separator'></div>
                <span className="text-base text-gray-200 mb-2">{cert.institution}</span>
                {cert.description && (
                  <p className="font-mono text-gray-50 mt-2 text-sm">{cert.description}</p>
                )}
                {cert.file && cert.file !== '' && (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block bg-purple-700 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-800 transition"
                  >
                    {dictionary.viewCertificate || 'Ver certificado'}
                  </a>
                )}
              </div>
              {idx < certifications.length - 1 && (
                <div className="h-1 bg-slate-600 rounded-full my-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
