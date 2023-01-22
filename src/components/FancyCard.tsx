import styles from "../styles/FancyCard.module.scss";
import { Poster } from "./Poster";

type PT = {
  children?: any;
  actions?: any;
  posterUrl: string;
};

export function FancyCard(props: PT) {
  const { children, actions, posterUrl } = props;

  return (
    <div className={styles.container}>
      <Poster className={styles.poster} imageSrc={posterUrl} />
      <h1 className={styles.title}>Hi, I am Minhaz.</h1>
      {children}
      <div className={styles.actions}>{actions}</div>
    </div>
  );
}
