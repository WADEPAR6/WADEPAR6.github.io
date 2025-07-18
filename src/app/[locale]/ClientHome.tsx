"use client";

import React from 'react';
import Principal from '@/modules/Principal';
import { Dictionary } from '../types/Dictionary';

export default function ClientHome({ dictionary }: { dictionary: Dictionary }) {
  return (
    <div className="min-h-screen w-full bg-neutral-900">
      <Principal dictionary={dictionary} />
    </div>
  );
} 