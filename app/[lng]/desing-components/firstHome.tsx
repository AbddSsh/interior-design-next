"use client";

import { MAIN_PAGE_ANIMATION } from "@/types/animation";
import { ILangPageProps } from "@/types/user";
import { motion } from "framer-motion";
import styles from "../design-styles/FirstHome.module.scss";
import { useTranslation } from "@/app/i18n/client";

const FirstHome: React.FC<ILangPageProps> = ({ lng }) => {
  const { t } = useTranslation(lng);
  let custom = 0;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={MAIN_PAGE_ANIMATION.viewport}
      variants={MAIN_PAGE_ANIMATION.animationVision}
      custom={custom++}
      className={`${styles.wrapper}`}
    >
      <div className={`${styles.content} container`}>
        <div className={styles.left}>
          <div className={styles.texts}>
            <h2 className={styles.title}>
              {t("HomePage.FirstHome.first_title.regular")}{" "}
              <span>{t("HomePage.FirstHome.first_title.bold")}</span>
            </h2>
            <h2 className={styles.title}>
              {t("HomePage.FirstHome.second_title.regular")}{" "}
              <span>{t("HomePage.FirstHome.second_title.bold")}</span>
            </h2>
            <div>
              <p className={styles.text}>
                {t("HomePage.FirstHome.description.first")}
              </p>
              <p className={styles.text}>
                {t("HomePage.FirstHome.description.second")}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.image__wrapper} />
      </div>
    </motion.div>
  );
};

export default FirstHome;
