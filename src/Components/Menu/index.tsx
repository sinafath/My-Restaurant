import { Button, ListWrapper, PizzaImage, PizzaItem, Title } from "./style";

type PizzaList = { items: string[] };


function PizzaList({ items }: PizzaList) {
  return (
    <>
      {items.map((item, index) => (
        <PizzaItem key={index}>
          <div > {item}</div>
          <PizzaImage
            width={400}
            height={400}
            layout="responsive"
            sizes="(max-width: 1900px) 350px"
            src={`/pizza${index + 1}.png`}
            alt={item}
          />
        </PizzaItem>
      ))}
    </>
  );
}

export { Button, ListWrapper, Title };
export default PizzaList;
