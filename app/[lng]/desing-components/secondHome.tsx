"use client";

import ContentAdminEdit from "@/app/admin/components/contentAdminEdit";
import { useTranslation } from "@/app/i18n/client";
import { MAIN_PAGE_ANIMATION } from "@/types/animation";
import { SCROLL_OFFSET, scrollEnum } from "@/types/constansts";
import { IHomePageProps } from "@/types/user";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../design-styles/SecondHome.module.scss";
import { Dot, MoveDown } from "lucide-react";

const SecondHome: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  const { t } = useTranslation(lng);

  const scrollToSection = (sectionId: scrollEnum) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = SCROLL_OFFSET;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  let custom = 0;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={MAIN_PAGE_ANIMATION.viewport}
      variants={MAIN_PAGE_ANIMATION.animationVision}
      id={scrollEnum.aboutUs}
      className={`${styles.wrapper} container`}
    >
      <div className={styles.title_wrapper}>
        <motion.h2
          custom={custom++}
          variants={MAIN_PAGE_ANIMATION.animationVision}
          className={styles.title}
        >
          {t("HomePage.SecondHome.title")}
        </motion.h2>
        <motion.div
          custom={custom++}
          variants={MAIN_PAGE_ANIMATION.animationVision}
          className={styles.categories}
        >
          <span>{t("HomePage.SecondHome.categories.economy")}</span>
          <Dot width={40} height={40} stroke="#88C2CE" />
          <span>{t("HomePage.SecondHome.categories.author")}</span>
          <Dot width={40} height={40} stroke="#88C2CE" />
          <span>{t("HomePage.SecondHome.categories.result")}</span>
        </motion.div>
      </div>
      <div className={styles.information}>
        <motion.div
          custom={custom++}
          variants={MAIN_PAGE_ANIMATION.animationUp}
          className={styles.content__wrapper}
        >
          <div className={styles.left}>
            <p>{section?.blocks[0]?.texts[0]?.text}</p>
            {isAdmin && pageId && (
              <div>
                <h3>Изменить текст</h3>
                <ContentAdminEdit
                  block={section?.blocks[0]}
                  pageId={pageId}
                  lng={lng}
                />
              </div>
            )}
            {isAdmin && pageId && (
              <div>
                <h3>Изменить большую картинку</h3>
                <ContentAdminEdit
                  block={section?.blocks[1]}
                  pageId={pageId}
                  lng={lng}
                />
              </div>
            )}
            {isAdmin && pageId && (
              <div>
                <h3>Изменить маленькую картинку</h3>
                <ContentAdminEdit
                  block={section?.blocks[2]}
                  pageId={pageId}
                  lng={lng}
                />
              </div>
            )}
            <div
              className={styles.order__wrapper}
              onClick={() => scrollToSection(scrollEnum.form)}
            >
              <button className={styles.order}>
                <span>{t("HomePage.SecondHome.orderButton")}</span>
                <MoveDown width={24} />
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.big}>
              <Image
                className={styles.image}
                src={section?.blocks[1]?.files[0]?.url}
                alt={section?.blocks[1]?.files[0]?.alts[0]?.text || "image"}
                width={500}
                height={500}
                priority
              />
            </div>
            <div className={styles.small}>
              <Image
                className={styles.image}
                src={section?.blocks[2]?.files[0]?.url}
                alt={section?.blocks[2]?.files[0]?.alts[0]?.text || "image"}
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default SecondHome;
