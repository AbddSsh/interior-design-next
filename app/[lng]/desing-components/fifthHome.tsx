"use client";

import Image from "next/image";
import { IHomePageProps } from "@/types/user";
import { useTranslation } from "@/app/i18n/client";
import { motion } from "framer-motion";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  Swiper as SwiperType,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { MAIN_PAGE_ANIMATION } from "@/types/animation";
import styles from "../design-styles/FifthHome.module.scss";
import { scrollEnum } from "@/types/constansts";
import ContentAdminEdit from "@/app/admin/components/contentAdminEdit";
import ContentAdminRemove from "@/app/admin/components/contentAdminRemove";
import ContentAdminAdd from "@/app/admin/components/contentAdminAdd";

const FifthHome: React.FC<IHomePageProps> = ({
  section,
  isAdmin,
  pageId,
  lng,
}) => {
  const { t } = useTranslation(lng);
  let custom = 0;
  return (
    <div className="container" id={scrollEnum.projects}>
      <div className={`${styles.content}`}>
        <div className={styles.texts}>
          <p className={styles.title}>{t("HomePage.FifthHome.title")}</p>
          <p className={styles.description}>
            {t("HomePage.FifthHome.description")}
          </p>
        </div>
        <motion.div
          custom={custom++}
          variants={MAIN_PAGE_ANIMATION.animationVision}
          className="main__swiper__wrapper"
        >
          <Swiper
            slidesPerView={1}
            loop={true}
            navigation={true}
            effect="coverflow"
            modules={[Navigation, Scrollbar, Pagination, EffectCoverflow]}
            speed={500}
            centeredSlides={true}
            scrollbar={{
              hide: true,
            }}
            breakpoints={{
              1344: {
                spaceBetween: -250,
              },
              1200: {
                spaceBetween: -100,
              },
              992: {
                spaceBetween: -150,
              },
              768: {
                spaceBetween: -150,
              },
            }}
          >
            {section?.blocks?.map((block, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  custom={custom++}
                  variants={MAIN_PAGE_ANIMATION.animationVision}
                  className={styles.slide}
                >
                  <div className={styles.image__wrapper}>
                    <Image
                      className={styles.image}
                      src={block?.files[0]?.url}
                      alt={block?.files[0]?.alts[0]?.text || "image"}
                      width={1500}
                      height={1500}
                      loading={index === 0 ? "eager" : "lazy"}
                      quality={85}
                      priority={index === 0}
                    />
                  </div>
                  {isAdmin && pageId && (
                    <div className={`admin__change ${styles.admin}`}>
                      <ContentAdminEdit
                        block={block}
                        pageId={pageId}
                        lng={lng}
                      />
                      <ContentAdminRemove blockId={block?.id} pageId={pageId} />
                    </div>
                  )}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          {isAdmin && pageId && (
            <ContentAdminAdd
              sectionId={section?.id}
              block={section?.blocks[0]}
              pageId={pageId}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FifthHome;
