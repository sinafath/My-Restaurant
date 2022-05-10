import type { ReactNode } from "react";
import styles from "./Picture.module.css";

type Picture = {
  imageName: string;
  lazy?: boolean | undefined;
  children: ReactNode;
};
type Links = {
  imageName: string;
};

function Links({ imageName }: Links) {
  const types = ["webp", "jpg"],
    sizes = [710, 876, 1321, 1500, 1900, 2500, 3840];
  return (
    <>
      {types.map((type) =>
        sizes.map((size, index) => (
          <source
            type={`image/${type}`}
            media={`(max-width: ${size}px)`}
            srcSet={`images/${type}/${size}_${imageName}.${type}`}
            key={index}
          />
        ))
      )}
    </>
  );
}
const Picture = ({ imageName, children, lazy }: Picture) => (
  <div className={styles.containerBackground}>
    <picture>
      <Links imageName={imageName} />
      <img
        className={styles.imageBackground}
        src={`images/jpg/1900_${imageName}.jpg`}
        alt="backgroundImage"
        loading={lazy ? "lazy" : "eager"}
      />
    </picture>
    <div className={styles.textComponent}>{children}</div>
  </div>
);

export default Picture;
