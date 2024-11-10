"use client";

import ContentAdminEdit from "@/app/admin/components/contentAdminEdit";
import { useTranslation } from "@/app/i18n/client";
import { IHomePageProps } from "@/types/user";
import { MAIN_PAGE_ANIMATION } from "@/types/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../design-styles/ThirdHome.module.scss";

const ThirdHome: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  const { t } = useTranslation(lng);
  let custom = 0;
  return (
    <section className={`${styles.wrapper} container`}>
      <h2 className={styles.title}>{t("HomePage.ThirdHome.title")}</h2>
      <motion.div
        custom={custom++}
        variants={MAIN_PAGE_ANIMATION.animationUp}
        className={styles.carousel}
      >
        {section?.blocks?.slice(1).map((block, index) => (
          <div key={index} className={styles.partner}>
            <Image
              className={styles.image}
              src={block?.files[0]?.url}
              alt={block?.files[0]?.alts[0]?.text || "image"}
              width={500}
              height={500}
            />
            {isAdmin && pageId && (
              <div>
                <ContentAdminEdit block={block} pageId={pageId} lng={lng} />
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ThirdHome;
