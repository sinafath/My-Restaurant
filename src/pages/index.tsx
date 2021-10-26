import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Image from "next/image";
import Picture from "../components/Picture";

let pizzaList = ["Cheese Pizza", "Veggie Pizza", "Pepperoni Pizza"];

const Home = () => {
  return (
    <Layout title="Home">
      <Picture
        imageSource="chad_montano_Mq_T0asuo_Ic_U_unsplash_1_d077bbcce1"
      >
        <div className={`${styles.textComponent} ${styles.primaryPosition}`}>
          <div className={styles.bigText}>
            WELCOME <br className={styles.breakBixTextFirst} />
            TO MY <br className={styles.breakBixTextSecond} /> RESTAURANT
          </div>
          <div className={styles.smallText}>Open Monday - Friday 11am-3pm</div>
        </div>
      </Picture>
      <div className={styles.wideComponent}>
        AT MY RESTAURANT, YOU GET QUALITY AND QUANTITY!
      </div>
      <Picture
        imageSource="chad_montano_Mq_T0asuo_Ic_U_unsplash_2_3391745040"
        lazy
      >
        <div
          className={`
          ${styles.textComponent}
          ${styles.center}
          ${styles.secondaryPosition}`}
        >
          <div className={styles.bigText}>
            <span className={styles.spanOrder}>takeout</span>{" "}
            <br className={styles.break} />
            or <br className={styles.break} />
            <span className={styles.spanOrder}>dine-in</span>
          </div>
        </div>
      </Picture>
      <div className={styles.MenuDiv}>Menu</div>

      <div className={styles.flexBox}>
        {pizzaList.map((pizzaItem, index) => (
          <li key={index} className={styles.pizzaItem}>
            <div className={styles.pizzaName}> {pizzaItem}</div>
            <Image
              width={400}
              height={400}
              layout="responsive"
              sizes="(max-width: 1900px) 350px"
              src={`/pizza${index + 1}.png`}
              className={styles.ImagePizza}
              alt={pizzaItem}
            />
          </li>
        ))}

        <button className={styles.buttonMore}>more</button>
      </div>
    </Layout>
  );
};

export default Home;
