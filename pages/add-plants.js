import styled from "styled-components";
import Header from "@/components/Header/Header";
import BackButton from "@/components/BackButton/BackButton";
import Navigation from "@/components/Navigation/Navigation";
import Button from "@/components/Button/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default function AddPlants() {
  return (
    <>
      <BackButton href="/" />
      <Header>Add Plant</Header>
      <Container>
        <Button href="/add-own-plant">I want to add my own Plant!</Button>
      </Container>
      <Navigation />
    </>
  );
}
