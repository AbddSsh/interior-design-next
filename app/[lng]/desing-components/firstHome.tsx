"use client";

import ContentAdminEdit from "@/app/admin/components/contentAdminEdit";
import { MAIN_PAGE_ANIMATION } from "@/types/animation";
import { SCROLL_OFFSET, scrollEnum } from "@/types/constansts";
import { IHomePageProps } from "@/types/user";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../design-styles/FirstHome.module.scss";

const FirstHome: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  const block = section?.blocks[0];
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
            <h1 className={styles.title}>{block?.texts[0]?.text}</h1>
            <h2 className={styles.text}>{block?.texts[1]?.text}</h2>
          </div>
        </motion.div>
        <motion.div
          custom={custom++}
          variants={MAIN_PAGE_ANIMATION.animationRight}
          className={styles.image__wrapper}
        >
          <Image
            className={styles.image}
            src={block?.files[0]?.url}
            alt={block?.files[0]?.alts[0]?.text || "image"}
            width={1000}
            height={1000}
            priority
          />
        </motion.div>
      </div>
      {isAdmin && pageId && (
        <ContentAdminEdit
          key={block?.id}
          block={block}
          pageId={pageId}
          lng={lng}
        />
      )}
    </motion.div>
  );
};

export default FirstHome;
