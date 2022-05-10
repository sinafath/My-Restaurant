import styles from "Styles/Home.module.css";
import Layout from "Layout/Index";
import Picture from "Components/Picture";
import Big from "Components/Text/Big";
import Small from "Components/Text/Small";
import PizzaList, { Button, ListWrapper, Title } from "Components/Menu";
import { useRouter } from "next/router";

function Menu() {
  const router = useRouter();
  let pizzaList = ["Cheese Pizza", "Veggie Pizza", "Pepperoni Pizza"];
  return (
    <>
      <Title>Menu</Title>
      <ListWrapper>
        <PizzaList items={pizzaList} />
        <Button onClick={() => router.push("/menu")}>More</Button>
      </ListWrapper>
    </>
  );
}

function Home() {
  return (
    <Layout title="Home">
      <Picture imageName="chad_montano_Mq_T0asuo_Ic_U_unsplash_1_d077bbcce1">
        <Big>WELCOME TO RESTAURANT</Big>
        <Small>Open Monday - Friday 11am-3pm</Small>
      </Picture>
      <div className={styles.wideComponent}>
        AT MY RESTAURANT, YOU GET QUALITY AND QUANTITY!
      </div>
      <Picture
        imageName="chad_montano_Mq_T0asuo_Ic_U_unsplash_2_3391745040"
        lazy
      >
        <Big>delicious food</Big>
      </Picture>
      <Menu />
    </Layout>
  );
}

export default Home;
