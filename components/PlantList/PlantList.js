import Image from "next/image";
import styled from "styled-components";
import Header from "../Header/Header";
import StyledLink from "../StyledLink/StyledLink";
import {
  StyledCard,
  StyledList,
  StyledListItem,
  StyledPlantDetails,
} from "./PlantList.Styled";

export const StyledImage = styled(Image)`
  border-radius: 10px;
  margin: 0px 10px;
`;

export default function PlantList({ room }) {
  // TODO: empty state

  return (
    <>
      <Header>All Plants</Header>
      <StyledList>
        {room.plants.map((plant, index) => (
          <StyledCard key={plant._id}>
            <StyledLink key={index} href={`/plants/${plant._id}`}>
              <StyledListItem key={plant._id}>
                <StyledImage
                  key={plant._id}
                  src={`/plants/${plant.type}.jpeg`}
                  width={90}
                  height={90}
                  alt={plant.title}
                ></StyledImage>
                <StyledPlantDetails>
                  {plant.title} <br />
                  Room: {room.title}
                </StyledPlantDetails>
              </StyledListItem>
            </StyledLink>
          </StyledCard>
        ))}
      </StyledList>
    </>
  );
}
