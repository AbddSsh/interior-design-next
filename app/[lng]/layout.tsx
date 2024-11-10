import { IHomePageProps } from "@/types/user";
import { dir } from "i18next";
import { Metadata } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { languages } from "../i18n/settings";
import "./../styles/global.scss";

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
