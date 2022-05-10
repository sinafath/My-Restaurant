import styles from "./index.module.css";

type Item = {
  title: string;
  context: string;
};

const Item = ({ title, context }: Item) => (
  <h4 className={styles.item}>
    <span className={styles.title}>{title}:</span>
    {context}
  </h4>
);
const Footer = () => (
  <footer className={styles.footer}>
    <Item title="phone number" context="843*4632" />
    <Item
      title="adress"
      context="6*10 Washington St , CA
      923449, USA"
    />
  </footer>
);
export default Footer;
