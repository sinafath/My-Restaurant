import styled from "styled-components";
import Image from "next/image";

const PizzaItem = styled.li`
  padding: 10px;
  display: inline-block;
  width: 340px;
  padding: 25px;
`;
const PizzaImage = styled(Image)`
  max-width: 450px;
  max-height: 450px;
`;

const Button = styled.button`
  position: absolute;
  bottom: 20px;
  font-size: 25px;
  padding: 20px 25px;
  color: white;
  background-color: rgb(211, 65, 65);
  border-radius: 35px;
  border-style: none;
  @media screen and (max-width: 1100px) {
    border-radius: 0;
    bottom: 0px;
    width: 100%;
    padding: 20px;
  }
`;
const ListWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  justify-content: center;
  padding-bottom: 130px;
  overflow: hidden;
  .flexBox {
    background-color: rgb(255, 240, 104);
    margin: 30px;
    border: solid chocolate;
    border-radius: 18px;
  }
`;
const Title = styled.div`
  font-size: 50px;
  padding-top: 40px;
`;
export { PizzaItem, PizzaImage, Button, ListWrapper, Title };
