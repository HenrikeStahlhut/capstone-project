import styled from "styled-components";
import Header from "@/components/Header/Header";
import BackButton from "@/components/BackButton/BackButton";
import Navigation from "@/components/Navigation/Navigation";
import Button from "@/components/Button/Button";
import StyledLink from "@/components/StyledLink/StyledLink";

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
        <Button>
          <StyledLink href="/add-own-plant">
            I want to add my own Plant!
          </StyledLink>
        </Button>
      </Container>
      <Navigation />
    </>
  );
}
