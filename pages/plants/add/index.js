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

// TODO add search logic to search for plants in database/API

export default function AddPlants() {
  return (
    <>
      <BackButton href="/" />
      <Header>Add Plant</Header>
      <Container>
        <Button>
          <StyledLink href="/plants/create">
            I want to add my own plant!
          </StyledLink>
        </Button>
      </Container>
      <Navigation />
    </>
  );
}
