import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/es'); // Cambia '/es' por el idioma que prefieras como predeterminado
  return null;
} 