import "./globals.css";
import { Public_Sans } from "next/font/google";

import { Navbar } from "@/components/Navbar";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Fully In-Browser Chat Over Documents</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Upload a PDF, then ask questions about it - without a single remote request!"
        />
        <meta
          property="og:title"
          content="Fully In-Browser Chat Over Documents"
        />
        <meta
          property="og:description"
          content="Upload a PDF, then ask questions about it - without a single remote request!"
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fully In-Browser Chat Over Documents"
        />
        <meta
          name="twitter:description"
          content="Upload a PDF, then ask questions about it - without a single remote request!"
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className={publicSans.className}>
        <div className="root min-h-[100dvh] grid grid-rows-[22fr_3fr]">
          <div className="flex flex-col p-4 md:p-12 md:pt-0">{children}</div>
          <footer className='m-0 p-0'>
            <div className="text-center p-1 m-0 myfooter">
            <a href="https://rcc.uchicago.edu/"><img src="/images/logo_RCC_w.png" width="300px" /></a>
              <p className='p-0 text-light'>This application was designed and developed by the <a className="text-reset fw-bold" href="https://rcc.uchicago.edu/">Research Computing Center (RCC)</a> at the University of Chicago.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
