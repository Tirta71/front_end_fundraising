/* eslint-disable @next/next/no-sync-scripts */
import "../styles/index.scss";
import { DM_Sans, Nunito_Sans, Pacifico } from "next/font/google";

const body = DM_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--base-font",
});

const heading = Nunito_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--heading-font",
});

const script = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--script-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Charite - Charity" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <script
          type="text/javascript"
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key="SB-Mid-client-vpgcK72WK1ew9YTZ"
        ></script>
      </head>
      <body
        suppressHydrationWarning={true}
        className={` ${body.variable} ${heading.variable} ${script.variable} `}
      >
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
