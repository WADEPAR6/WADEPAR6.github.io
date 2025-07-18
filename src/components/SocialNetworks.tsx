"use client";

import React from 'react';
import { Dictionary, SocialNetwork } from '../app/types/Dictionary';
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Mail,
  Link as LinkIcon
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={28} className="text-neutral-700" />,
  linkedin: <Linkedin size={28} className="text-blue-700" />,
  twitter: <Twitter size={28} className="text-sky-500" />,
  facebook: <Facebook size={28} className="text-blue-600" />,
  instagram: <Instagram size={28} className="text-pink-500" />,
  youtube: <Youtube size={28} className="text-red-600" />,
  web: <Globe size={28} className="text-green-600" />,
  email: <Mail size={28} className="text-purple-600" />,
};

export default function SocialNetworks({ dictionary }: { dictionary: Dictionary }) {
  const socialNetworksItems = (dictionary.socialNetworks || []) as SocialNetwork[];

  return (
    <div className="w-full bg-slate-800 rounded-xl p-6 shadow-lg">
      <b className="font-sans text-4xl text-left block text-neutral-100">{dictionary.socialNetworkTitle}</b>
      <div className="h-1 bg-slate-600 w-11/12 rounded-full my-4 mx-auto" id="separator"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 w-full">
        {socialNetworksItems.map((socialNetwork) => {
          const iconKey = socialNetwork.icon?.toLowerCase();
          const LucideIcon = iconMap[iconKey] || <LinkIcon size={28} className="text-neutral-500" />;
          return (
            <a
              key={socialNetwork.key}
              href={socialNetwork.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center bg-slate-900 hover:bg-slate-600 rounded-xl p-4 shadow-md transition-all duration-200 border border-transparent hover:border-purple-400 min-h-[100px] w-full"
            >
              <div className="flex items-center justify-center mb-2">
                {LucideIcon}
              </div>
              <span className="font-bold text-base text-white group-hover:text-purple-300 transition-colors duration-200 text-center">
                {socialNetwork.name}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
