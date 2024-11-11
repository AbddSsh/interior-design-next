"use client";

import { useTranslation } from "@/app/i18n/client";
import { ADDRESS, CONTACT_FIRST, INSTAGRAM_REF, TELEGRAM_REF } from "@/config";
import { MAIN_PAGE_ANIMATION } from "@/types/animation";
import { scrollEnum } from "@/types/constansts";
import { ILangPageProps } from "@/types/user";
import { Loader } from "@googlemaps/js-api-loader";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { BsEnvelopeFill, BsPinMapFill, BsTelephoneFill } from "react-icons/bs";
import styles from "../design-styles/SeventhHome.module.scss";
import { InstagramIcon, TelegramIcon } from "@/app/components/icons";
import { PhoneIcon } from "@/app/components/icons/phoneIcon";

const SeventhHome: React.FC<ILangPageProps> = ({ lng }) => {
  const { t } = useTranslation(lng);

  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY!,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");

      const mapOptions: google.maps.MapOptions = {
        center: ADDRESS,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map: map,
        position: ADDRESS,
      });
    };
    initMap();
  }, []);
  let custom = 0;
  let custom2 = 0;
  return (
    <div className={styles.bg}>
      <div className="container">
        <div id={scrollEnum.contacts} className={`${styles.wrapper}`}>
          <div className={styles.title__wrapper}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={MAIN_PAGE_ANIMATION.viewport}
              variants={MAIN_PAGE_ANIMATION.animationVision}
              custom={custom++}
              className={styles.title}
            >
              {t("HomePage.SeventhHome.title")}
            </motion.h2>
            <p className={styles.address}>
              {t("HomePage.SeventhHome.address")}
            </p>
          </div>
          <div className={styles.content}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={MAIN_PAGE_ANIMATION.viewport}
              variants={MAIN_PAGE_ANIMATION.animationLeft}
              custom={custom++}
              className={styles.left}
              ref={mapRef}
            ></motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={MAIN_PAGE_ANIMATION.viewport}
              variants={MAIN_PAGE_ANIMATION.animationVision}
              className={styles.right}
            >
              <motion.div
                custom={(custom2 += 2)}
                variants={MAIN_PAGE_ANIMATION.animationRight}
                className={styles.contact}
              >
                <div className={styles.icon}>
                  <InstagramIcon />
                </div>
                <p>
                  <a href={INSTAGRAM_REF} target="_blank">
                    Instagram
                  </a>
                </p>
              </motion.div>
              <motion.div
                custom={(custom2 += 2)}
                variants={MAIN_PAGE_ANIMATION.animationRight}
                className={styles.contact}
              >
                <div className={styles.icon}>
                  <PhoneIcon />
                </div>
                <p>
                  <a href={`tel:${CONTACT_FIRST}`}>{CONTACT_FIRST}</a>
                </p>
              </motion.div>
              <motion.div
                custom={(custom2 += 2)}
                variants={MAIN_PAGE_ANIMATION.animationRight}
                className={styles.contact}
              >
                <div className={styles.icon}>
                  <TelegramIcon />
                </div>
                <p>
                  <a href={TELEGRAM_REF} target="_blank">
                    Telegram
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SeventhHome;
