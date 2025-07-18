import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Kenneth Paredes',
  description: 'Kenneth Paredes personal website',
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params }: Props) {
  const dir = params.locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <html lang={params.locale} dir={dir}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
