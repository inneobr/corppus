import Header from '@/components/Header';
import { Oswald } from 'next/font/google';
import './globals.css';

/*
const emblemaOne = Emblema_One({  
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  variable: '--font-emblemaOne' 
});*/

const oswald = Oswald({ 
  weight: ['200'],
  subsets: ['latin'],
  variable: '--font-oswald' 
});

export const metadata = {
  title: 'CORPPUS',
  description: 'acesso à prática de atividade física de alto padrão.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${ oswald.variable } overflow-x-hidden relative`}>
        <Header />
        {children}
      </body>
    </html>
  )
}