import { IHomePageProps } from "@/types/user";
import { dir } from "i18next";
import { Metadata } from "next";
import Head from "next/head";
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
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLPQ9WCDYM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLPQ9WCDYM');
          `}
        </Script>
        <body>
          <main className="main__layout">
            <div>{children}</div>
          </main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
