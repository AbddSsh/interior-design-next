import styles from "../design-styles/loader.module.scss";

export const LoaderComponent = () => {
  return (
    <div className={styles.loader_wrapper}>
        <div className={styles.loader}></div>
    </div>
  );
};