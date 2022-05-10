import Layout from "Layout";
import PizzaList, { Button, ListWrapper, Title } from "../Components/Menu";
import { useRouter } from "next/router";
import useUser from "Hooks/useUer";

let pizzaList = [
  "Pepperoni Pizza",
  "Veggie Pizza",
  "Cheese Pizza",
  "Iranian Pizza",
  "Cheese Pizza",
];

function Menu() {
  const router = useRouter();
  const { user } = useUser();
  function handleClick() {
    if (!user) {
      router.push("/login");
    } else {
      alert("Thank you for your order");
    }
  }
  return (
    <Layout title="menu">
      <Title>Menu</Title>
      <ListWrapper>
        <PizzaList items={pizzaList} />
        <Button onClick={handleClick}>Buy</Button>
      </ListWrapper>
    </Layout>
  );
}
export default Menu;
