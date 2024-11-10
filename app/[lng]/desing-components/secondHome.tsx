"use client";

import ContentAdminEdit from "@/app/admin/components/contentAdminEdit";
import { useTranslation } from "@/app/i18n/client";
import { MAIN_PAGE_ANIMATION } from "@/types/animation";
import { SCROLL_OFFSET, scrollEnum } from "@/types/constansts";
import { IBlock, IHomePageProps } from "@/types/user";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  OptionFirstIcon,
  OptionFourthIcon,
  OptionSecondIcon,
  OptionThirdIcon,
} from "../icons";
import styles from "../design-styles/SecondHome.module.scss";
import { Dot, MoveDown } from "lucide-react";

const SecondHome: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  const [activeBlock, setActiveBlock] = useState<IBlock | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleChangeActiveBlock = (block: IBlock) => {
    if (block !== activeBlock) {
      setIsVisible(false);
      setActiveBlock(block);
    }
  };

  useEffect(() => {
    setActiveBlock(section?.blocks[0]);
  }, [section]);

  useEffect(() => {
    setIsVisible(true);
  }, [activeBlock]);

  const { t } = useTranslation(lng);
  const icons = [
    <OptionFirstIcon key="first" />,
    <OptionSecondIcon key="second" />,
    <OptionThirdIcon key="third" />,
    <OptionFourthIcon key="fourth" />,
  ];

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
      id={scrollEnum.services}
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
          className={`${styles.content__wrapper} ${
            isVisible ? styles.no_hidden : styles.hidden
          }`}
        >
          <div className={styles.left}>
            <p>{activeBlock?.texts[1]?.text}</p>
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
              {activeBlock && (
                <Image
                  className={styles.image}
                  src={activeBlock?.files[0]?.url}
                  alt={activeBlock?.files[0]?.alts[0]?.text || "image"}
                  width={500}
                  height={500}
                  priority
                />
              )}
            </div>
            <div className={styles.small}>
              {activeBlock && (
                <Image
                  className={styles.image}
                  src={activeBlock?.files[0]?.url}
                  alt={activeBlock?.files[0]?.alts[0]?.text || "image"}
                  width={500}
                  height={500}
                  priority
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
      {isAdmin && pageId && (
        <div>
          <ContentAdminEdit block={activeBlock!} pageId={pageId} lng={lng} />
        </div>
      )}
    </motion.div>
  );
};
export default SecondHome;
