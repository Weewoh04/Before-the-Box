'use client';

import { Printer } from 'lucide-react';

export default function PrintButton() {
  return (
    <button className="btn" onClick={() => window.print()} type="button">
      <Printer size={18} /> Print recipe
    </button>
  );
}
