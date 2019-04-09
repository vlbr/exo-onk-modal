import React from 'react';
import { Button } from '@ornikar/kitt';

export default function ModalLaucher() {
  return (
    <Button type="primary">
      Show Modal{' '}
      <span role="img" aria-label="so cool">😎</span>
    </Button>
  );
}