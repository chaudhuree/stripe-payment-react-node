import styled from "styled-components";
import CartTable from "./CartTable";
import PayButton from "./PayButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 24px;
  font-family: sans-serif;
`;
const Cart = () => {
  const cartItems = [
    {
      brand: "Nike",
      cartQuantity: 2,
      desc: "Running shoes for men",
      id: 1,
      image:
        "https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Nike Air Zoom Pegasus",
      price: 99.99,
    },
    {
      brand: "Adidas",
      cartQuantity: 1,
      desc: "Sneakers for women",
      id: 2,
      image:
        "https://images.pexels.com/photos/1031955/pexels-photo-1031955.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Adidas Ultraboost",
      price: 129.99,
    },
    {
      brand: "Puma",
      cartQuantity: 3,
      desc: "Casual shoes for kids",
      id: 3,
      image:
        "https://images.pexels.com/photos/12511453/pexels-photo-12511453.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Puma Smash v2",
      price: 49.99,
    },
  ];

  return (
    <Container>
      <h2 className="text-danger">Payment Page</h2>
      <CartTable cartItems={cartItems} />
      <PayButton cartItems={cartItems} />
    </Container>
  );
};

export default Cart;
