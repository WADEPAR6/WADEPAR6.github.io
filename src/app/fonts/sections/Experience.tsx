import React from 'react';
import PrincipalProps from '@/app/fonts/types/PrincipalProps';

function Experience({ dictionary }: PrincipalProps) {
  return (
    <div>
      <h1>{dictionary.experience}</h1>
    </div>
  );
}

export default Experience;
