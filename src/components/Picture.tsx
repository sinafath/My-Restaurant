import { Fragment, ReactNode } from "react";
import { useBoolean } from "react-use";
import styles from "../styles/BackgroundContainer.module.css";

type Picture = {
  imageSource: string;
  lazy?: boolean | undefined;
  children: ReactNode;
};

let sizes = [710, 876, 1321, 1500, 1900, 2500, 3840];

function Picture({ imageSource, children, lazy }: Picture) {
  const [hideImage, setHideImage] = useBoolean(true);
  console.log(hideImage);
  return (
    <div className={styles.containerBackground}>
      <picture>
        {sizes.map((size, index) => (
          <Fragment key={index}>
            <source
              type="image/webp"
              media={`(max-width: ${size}px)`}
              srcSet={`images/webpformat/${size}_${imageSource}.webp`}
            />
            <source
              media={`(max-width: ${size}px)`}
              srcSet={`images/jpg/${size}_${imageSource}.jpg`}
            />
          </Fragment>
        ))}
        <img
          className={styles.imageBackground}
          style={{ visibility: hideImage ? "hidden" : "initial" }}
          onLoad={() => setHideImage(false)}
          src={`images/jpg/1900_${imageSource}.jpg`}
          alt="backgroundImage"
          loading={lazy ? "lazy" : "eager"}
        />
      </picture>
      {children}
    </div>
  );
}

export default Picture;
