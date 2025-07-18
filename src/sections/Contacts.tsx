import React from 'react';
import { Dictionary } from '../app/types/Dictionary';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const contacts = [
  {
    icon: <MapPin className="text-purple-400" size={24} />, label: 'Ambato, Ecuador', value: 'Ambato, Ecuador'
  },
  {
    icon: <Phone className="text-purple-400" size={24} />, label: '0963307063', value: '0963307063', href: 'tel:0963307063'
  },
  {
    icon: <Mail className="text-purple-400" size={24} />, label: 'raulparedes20031221@gmail.com', value: 'raulparedes20031221@gmail.com', href: 'mailto:raulparedes20031221@gmail.com'
  },
  {
    icon: <Linkedin className="text-purple-400" size={24} />, label: 'LinkedIn', value: 'https://www.linkedin.com/in/kenneth-paredes-015448329/', href: 'https://www.linkedin.com/in/kenneth-paredes-015448329/'
  }
];

export default function Contacts({ dictionary }: { dictionary: Dictionary }) {
  return (
    <div className="w-full bg-slate-900 rounded-xl p-6 shadow-lg flex flex-col gap-6">
      <div>
        <b className="font-sans text-4xl block">{dictionary.contacts || 'Contacto'}</b>
        <p className="mt-4 font-mono text-gray-50 text-justify">{dictionary.contactsDescription || ''}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map((c, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-slate-700 rounded-xl p-4 shadow-lg">
            {c.icon}
            {c.href ? (
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-base text-white hover:text-purple-300 transition-colors">{c.label}</a>
            ) : (
              <span className="text-base text-white">{c.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}