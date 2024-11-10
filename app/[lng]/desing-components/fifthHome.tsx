"use client";

import { IHomePageProps } from "@/types/user";
import { useTranslation } from "@/app/i18n/client";
import styles from "../styles/FifthHome.module.scss";

const FifthHome: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  const { t } = useTranslation(lng);
  return (
    <div className={`${styles.content} container`}>
      <div>fifthHome</div>
    </div>
  );
};

export default FifthHome;
