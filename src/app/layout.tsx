import "../styles/index.scss";
import { DM_Sans, Nunito_Sans, Pacifico } from 'next/font/google'

const body = DM_Sans({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--base-font',
});

const heading = Nunito_Sans({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--heading-font',
});

const script = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--script-font',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Charite - Charity & Donation React Next js Template for various types of Sass Products, Software, Startups, App showcases,s and related products/services" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body suppressHydrationWarning={true} className={` ${body.variable} ${heading.variable} ${script.variable} `}>
        <div className="wrapper">
          {children}
        </div>
      </body>
    </html>
  )
}
