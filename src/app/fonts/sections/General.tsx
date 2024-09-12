import React from 'react';
import PrincipalProps from '@/app/fonts/types/PrincipalProps';

function General({ dictionary }: PrincipalProps) {
  return (
    <div>
      <h1>{dictionary.general}</h1>
    </div>
  );
}

export default General;
