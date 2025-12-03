import React from "react";
import { Dictionary } from "../app/types/Dictionary";

export default function Education({ dictionary }: { dictionary: Dictionary }) {
  const educationItems = Array.isArray(dictionary.educationItems)
    ? dictionary.educationItems
    : [];
  const certifications = Array.isArray(dictionary.certificationsItems)
    ? dictionary.certificationsItems
    : [];
  return (
    <div className="w-full bg-slate-900 rounded-xl p-6 shadow-lg flex flex-col gap-6">
      {/* Header de Educación */}
      <div>
        <b className="font-sans text-4xl block">
          {dictionary.educationTitle || "Educación"}
        </b>
        <p className="mt-4 font-mono text-gray-50 text-justify">
          {dictionary.educationDescription || ""}
        </p>
      </div>

      {/* Educación - Grid compacto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {educationItems.map((edu, idx) => (
          <div
            key={idx}
            className="bg-slate-800 rounded-xl p-5 flex flex-col gap-2 shadow-md"
          >
            <div className="flex flex-col gap-2">
              <span className="font-bold text-2xl">{edu.degree}</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 shadow-md shadow-purple-400/30 self-start">
                {edu.period}
              </span>
            </div>
            <div
              className="h-1 bg-slate-400 w-11/12 rounded-full my-2"
              id="separator"
            ></div>
            <span className="text-base text-gray-200">{edu.institution}</span>
            {Array.isArray(edu.details) && edu.details.length > 0 && (
              <div className="flex flex-col gap-2 mt-2">
                {edu.details.map((d, i) => (
                  <div
                    key={i}
                    className="bg-slate-700/80 rounded-lg px-3 py-2 text-sm text-gray-100"
                  >
                    {d}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Certificados Section con scroll */}
      {certifications.length > 0 && (
        <div className="mt-4">
          <b className="font-sans text-3xl block mb-4">
            {dictionary.certificationsTitle || "Certificados"}
          </b>
          <p className="font-mono text-gray-50 mb-4">
            {dictionary.certificationDescription || ""}
          </p>

          {/* Contenedor scrollable solo para certificados */}
          <div
            className="max-h-[400px] overflow-y-auto pr-2 flex flex-col gap-4
            scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-purple-600 
            hover:scrollbar-thumb-purple-500 scrollbar-thumb-rounded-full 
            scrollbar-track-rounded-full"
          >
            {certifications.map((cert, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-slate-800 rounded-xl p-5 flex flex-col gap-2 shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <span className="font-bold text-2xl">{cert.name}</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 shadow-md shadow-purple-400/30 self-start">
                      {cert.period}
                    </span>
                  </div>
                  <div
                    className="h-1 bg-slate-400 w-11/12 rounded-full my-2"
                    id="separator"
                  ></div>
                  <span className="text-base text-gray-200">
                    {cert.institution}
                  </span>
                  {cert.description && (
                    <p className="font-mono text-gray-50 mt-2 text-sm">
                      {cert.description}
                    </p>
                  )}
                  {cert.file && cert.file !== "" && (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block bg-purple-700 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-800 transition self-start"
                    >
                      {dictionary.viewCertificate || "Ver certificado"}
                    </a>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
