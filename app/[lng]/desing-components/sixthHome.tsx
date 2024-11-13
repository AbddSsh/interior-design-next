"use client";

import { useTranslation } from "@/app/i18n/client";
import { sendMail } from "@/services/user";
import { MAIN_PAGE_ANIMATION } from "@/types/animation";
import { scrollEnum } from "@/types/constansts";
import { ILangPageProps, IMailData } from "@/types/user";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import styles from "../design-styles/SixthHome.module.scss";

const SixthHome: React.FC<ILangPageProps> = ({ lng }) => {
  const { register, handleSubmit, reset } = useForm<IMailData>({
    mode: "onChange",
  });
  const { t } = useTranslation(lng);

  const onSubmit = async (data: IMailData) => {
    await sendMail(data.name, data.phoneNumber, data.email);
    alert(t("HomePage.SixthHome.alert"));
    reset();
  };

  let custom = 0;
  return (
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={MAIN_PAGE_ANIMATION.viewport}
        id={scrollEnum.form}
        className={styles.wrapper}
      >
        <motion.h2
          custom={custom++}
          variants={MAIN_PAGE_ANIMATION.animationVision}
          className={styles.title}
        >
          {t("HomePage.SixthHome.title")}
        </motion.h2>
        <motion.div
          custom={custom++}
          variants={MAIN_PAGE_ANIMATION.animationUp}
          className={styles.form__wrapper}
        >
          <p className={styles.subtitle}>{t("HomePage.SixthHome.subtitle")}</p>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.form__title}>
              <span className={styles.text}>
                {t("HomePage.SixthHome.name")}
              </span>
              <input
                className={styles.form__input}
                placeholder="Gomer"
                {...register("name", {
                  required: true,
                  minLength: 1,
                })}
              />
            </label>
            <label className={styles.form__title}>
              <span className={styles.text}>
                {t("HomePage.SixthHome.email")}
              </span>
              <input
                className={styles.form__input}
                placeholder="name@domain.com"
                {...register("email", {
                  required: true,
                  minLength: 1,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
            </label>
            <label className={styles.form__title}>
              <span className={styles.text}>
                {t("HomePage.SixthHome.phoneNumber")}
              </span>
              <input
                className={styles.form__input}
                defaultValue="+998"
                type="tel"
                maxLength={13}
                inputMode="numeric"
                pattern="\+998\d{9}"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.target.value = e.target.value.replace(/[^\d+]/g, "");
                }}
                {...register("phoneNumber", {
                  required: true,
                  minLength: 1,
                  maxLength: 13,
                  pattern: /^\+998\d{9}$/,
                })}
              />
            </label>
            <button type="submit" className={styles.send}>
              {t("HomePage.SixthHome.sendButton")}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SixthHome;
