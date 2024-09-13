import React from 'react';
import PrincipalProps from '@/app/fonts/types/PrincipalProps';

function Education({ dictionary }: PrincipalProps) {
  return (
    <div>
      <h1>{dictionary.educationTitle}</h1>
    </div>
  );
}

export default Education;
