"use client";

import ContentAdminEdit from "@/app/admin/components/contentAdminEdit";
import { useTranslation } from "@/app/i18n/client";
import { IHomePageProps } from "@/types/user";
import { MAIN_PAGE_ANIMATION } from "@/types/animation";
import { motion } from "framer-motion";
import { SolutionFirstIcon } from "../icons/solutionFirstIcon";
import { SolutionSecondIcon } from "../icons/solutionSecondIcon";
import { SolutionThirdIcon } from "../icons/solutionThirdIcon";
import styles from "../design-styles/FourthHome.module.scss";
import { scrollEnum } from "@/types/constansts";

const FourthHome: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  const { t } = useTranslation(lng);
  let custom = 0;
  const icons = [
    <SolutionFirstIcon key="first" />,
    <SolutionSecondIcon key="second" />,
    <SolutionThirdIcon key="third" />,
  ];
  return (
    <section className={`${styles.wrapper} container`} id={scrollEnum.services}>
      <h2 className={styles.title}>{t("HomePage.FourthHome.title")}</h2>
      <motion.div
        custom={custom++}
        variants={MAIN_PAGE_ANIMATION.animationUp}
        className={styles.solutions}
      >
        {section?.blocks.map((block, index) => (
          <motion.div
            custom={custom++}
            variants={MAIN_PAGE_ANIMATION.animationUp}
            key={index}
            className={styles.solution}
          >
            <div className={styles.icon}>{icons[index]}</div>
            <div className={styles.texts}>
              <p className={styles.solution__title}>{block?.texts[0]?.text}</p>
              <p className={styles.solution__description}>
                {block?.texts[1]?.text}
              </p>
            </div>
            {isAdmin && pageId && (
              <ContentAdminEdit block={block} pageId={pageId} lng={lng} />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FourthHome;
