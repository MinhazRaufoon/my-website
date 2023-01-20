import styles from "../styles/Poster.module.scss";

type PT = {
  className?: string;
  imageSrc: string;
};

export function Poster(props: PT) {
  const { className, imageSrc } = props;
  return (
    <div
      className={`${styles.container} ${className}`}
      style={{ backgroundImage: `url(${imageSrc})` }}
    />
  );
}
