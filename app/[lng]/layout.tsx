import { IHomePageProps } from "@/types/user";
import { dir } from "i18next";
import { Metadata } from "next";
import { ReactNode } from "react";
import { languages } from "../i18n/settings";
import "./../styles/global.scss";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Interior Design | Gulen",
  description:
    "Профессиональный дизайнер интерьера в Ташкенте | Interior Design | Gulen",
  metadataBase: new URL(process.env.NEXT_PUBLIC_API_BASE_URL || ""),
  openGraph: {
    title: "Interior Design | Gulen",
    description:
      "Профессиональный дизайнер интерьера в Ташкенте | Interior Design | Gulen",
    url: process.env.NEXT_PUBLIC_API_BASE_URL,
    siteName: "interior design",
    images: [
      {
        url: "/logoOG.png",
        width: 800,
        height: 600,
        alt: "interior design",
      },
    ],
    locale: "uz-UZ",
    type: "website",
  },
};

interface StaticParams {
  lng: string;
}

export async function generateStaticParams(): Promise<StaticParams[]> {
  return languages.map((lng) => ({ lng }));
}

interface RootLayoutProps {
  children: ReactNode;
  params: IHomePageProps;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  params: { lng },
}) => {
  return (
    <>
      <html lang={lng} dir={dir(lng)} prefix="og: http://ogp.me/ns#">
        <head>
          <link rel="icon" href="/favicon.ico" />

          {/* Facebook Pixel */}
          {/* Meta Pixel Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '837568149003936');
                fbq('track', 'PageView');
              `,
            }}
          />
          {/* Meta Pixel (noscript) */}
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=837568149003936&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
        </head>

        <body>
          {/* Google Analytics */}
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-PLPQ9WCDYM"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLPQ9WCDYM');
          `}
          </Script>

          {/* Facebook Pixel (noscript) */}
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=837568149003936&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>

          <main className="main__layout">
            <div>{children}</div>
          </main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
