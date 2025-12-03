'use client';

import React, { useState } from 'react';
import { Dictionary } from '../app/types/Dictionary';
import { Mail, Phone, MapPin, Linkedin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || dictionary.contactFormError || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(dictionary.contactFormError || 'Error al enviar el mensaje');
    }
  };

  return (
    <div className="w-full bg-slate-900 rounded-xl p-6 shadow-lg flex flex-col gap-6">
      <div>
        <b className="font-sans text-4xl block">{dictionary.contacts || 'Contacto'}</b>
      </div>

      {/* Formulario de contacto */}
      <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="text-purple-400" size={28} />
          <h3 className="text-2xl font-semibold text-white">{dictionary.contactFormTitle || 'Envíame un mensaje'}</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                {dictionary.contactFormName || 'Nombre completo'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                disabled={status === 'loading'}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border-2 border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder={dictionary.contactFormNamePlaceholder || 'Tu nombre'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                {dictionary.contactFormEmail || 'Email'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border-2 border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder={dictionary.contactFormEmailPlaceholder || 'tu@email.com'}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              {dictionary.contactFormSubject || 'Asunto'}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              minLength={3}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border-2 border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder={dictionary.contactFormSubjectPlaceholder || '¿Sobre qué quieres hablar?'}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              {dictionary.contactFormMessage || 'Mensaje'}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
              rows={5}
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border-2 border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder={dictionary.contactFormMessagePlaceholder || 'Escribe tu mensaje aquí...'}
            />
          </div>

          {/* Mensajes de estado */}
          {status === 'success' && (
            <div className="flex items-center gap-3 p-4 bg-green-900/30 border border-green-500 rounded-lg">
              <CheckCircle2 className="text-green-400" size={24} />
              <p className="text-green-400 font-medium">{dictionary.contactFormSuccess || '¡Mensaje enviado correctamente! Te responderé pronto.'}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 bg-red-900/30 border border-red-500 rounded-lg">
              <AlertCircle className="text-red-400" size={24} />
              <p className="text-red-400 font-medium">{errorMessage}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                {dictionary.contactFormSending || 'Enviando...'}
              </>
            ) : (
              <>
                <Send size={20} />
                {dictionary.contactFormSubmit || 'Enviar mensaje'}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}