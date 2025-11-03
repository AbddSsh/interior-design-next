import { getData } from "@/services/getData";
import FirstHome from "./desing-components/firstHome";
import { ILangPageProps } from "@/types/user";
import { PAGE_ID } from "@/config";
import { TheHeader } from "../components/header/header";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import SecondHome from "./desing-components/secondHome";
import FourthHome from "./desing-components/fourthHome";

// Ленивая загрузка компонентов для улучшения производительности
const ThirdHome = dynamic(
  () => import("./desing-components/thirdHome"),
  { ssr: true }
);
const FifthHome = dynamic(
  () => import("./desing-components/fifthHome"),
  { ssr: false }
);
const SixthHome = dynamic(
  () => import("./desing-components/sixthHome"),
  { ssr: false }
);
const SeventhHome = dynamic(
  () => import("./desing-components/seventhHome"),
  { ssr: false }
);

export async function generateMetadata({
  params: { lng },
}: {
  params: ILangPageProps;
}) {
  const pageId = PAGE_ID;
  const response = await getData(pageId, lng);
  return {
    title: response?.seo_title,
    description: response?.seo_description,
    keywords: response?.seo_keywords,
  };
}

export default async function Home({
  params: { lng },
}: {
  params: ILangPageProps;
}) {
  const response = await getData(PAGE_ID, lng);

  return (
    <>
      <TheHeader lng={lng} />
      <FirstHome lng={lng} />
      <SecondHome section={response?.sections[0]} lng={lng} />
      <Suspense fallback={null}>
        <ThirdHome section={response?.sections[1]} lng={lng} />
      </Suspense>
      <FourthHome section={response?.sections[2]} lng={lng} />
      <Suspense fallback={null}>
        <FifthHome section={response?.sections[3]} lng={lng} />
      </Suspense>
      <Suspense fallback={null}>
        <SixthHome lng={lng} />
      </Suspense>
      <Suspense fallback={null}>
        <SeventhHome lng={lng} />
      </Suspense>
    </>
  );
}
