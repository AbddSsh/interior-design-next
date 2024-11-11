"use client";

import { ILangPageProps } from "@/types/user";
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import TheLanguage from "./language";
import TheNavigation from "./navigation";
import logo from "@/public/logo.png";
import Burger from "./burger/burger";

const TheHeader: React.FC<ILangPageProps> = ({ lng }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.logo_image_wrapper} onClick={scrollToTop}>
          <Image
            src={logo}
            alt="logo"
            className={styles.logo_image}
            width={500}
            height={500}
            priority
          />
        </div>
        <TheNavigation lng={lng} />
        <Burger lng={lng} />
        <TheLanguage lng={lng} />
      </div>
    </header>
  );
};

export { TheHeader };
