"use client";

import { MAIN_PAGE_ANIMATION } from "@/types/animation";
import { ILangPageProps } from "@/types/user";
import { motion } from "framer-motion";
import Image from "next/image";
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
        <motion.div
          custom={custom++}
          variants={MAIN_PAGE_ANIMATION.animationLeft}
          className={styles.left}
        >
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
        </motion.div>
        <motion.div
          custom={custom++}
          variants={MAIN_PAGE_ANIMATION.animationRight}
          className={styles.image__wrapper}
        >
          {/* <Image
            className={styles.image}
            src="/public/first-home-bg.png"
            alt="image"
            width={1000}
            height={1000}
            priority
          /> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FirstHome;
