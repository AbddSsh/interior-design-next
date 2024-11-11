import { getData } from "@/services/getData";
import FirstHome from "./desing-components/firstHome";
import SecondHome from "./desing-components/secondHome";
import ThirdHome from "./desing-components/thirdHome";
import FourthHome from "./desing-components/fourthHome";
import FifthHome from "./desing-components/fifthHome";
import SixthHome from "./desing-components/sixthHome";
import { ILangPageProps } from "@/types/user";
import { PAGE_ID } from "@/config";
import { TheHeader } from "../components/header/header";
import SeventhHome from "./desing-components/seventhHome";

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
      <ThirdHome section={response?.sections[1]} lng={lng} />
      <FourthHome section={response?.sections[2]} lng={lng} />
      <FifthHome section={response?.sections[3]} lng={lng} />
      <SixthHome lng={lng} />
      <SeventhHome lng={lng} />
    </>
  );
}
