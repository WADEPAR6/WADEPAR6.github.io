export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'ar' }
  ];
}

import ClientHome from './ClientHome';

async function getDictionary(locale: string) {
  return (await import(`../../locales/${locale}.json`)).default;
}

export default async function Page({ params }: { params: { locale: string } }) {
  const dictionary = await getDictionary(params.locale);
  return <ClientHome dictionary={dictionary} />;
}
