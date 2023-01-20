import styles from "../styles/FancyCard.module.scss";
import { Poster } from "./Poster";

type PT = {
  children?: any;
  actions?: any;
};

export function FancyCard(props: PT) {
  const { children, actions } = props;

  return (
    <div className={styles.container}>
      <Poster
        className={styles.poster}
        imageSrc="https://i.imgur.com/cpYxUka.jpg"
      />
      <h1 className={styles.title}>Hi, I am Minhaz.</h1>
      {children}
      <div className={styles.actions}>{actions}</div>
    </div>
  );
}
