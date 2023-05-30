import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import {
  StyledError,
  StyledErrorH3,
  StyledLoading,
} from "../RoomList/RoomsList.Styled";
import Header from "../Header/Header";
import {
  StyledList,
  StyledListItem,
  StyledCard,
  StyledPlantDetails,
} from "./PlantList.Styled";
import styled from "styled-components";
import Image from "next/image";
import StyledLink from "../StyledLink/StyledLink";

export const StyledImage = styled(Image)`
  border-radius: 10px;
  margin: 0px 10px;
`;

export default function PlantList({ room }) {
  const {
    data: plants,
    error,
    isLoading,
  } = useSWR(`/api/plants/${room}`, fetcher);

  if (error) {
    return (
      <StyledError>
        <StyledErrorH3>ERROR</StyledErrorH3>Failed to load plants 🥀
      </StyledError>
    );
  }

  if (isLoading) {
    return <StyledLoading>Loading your plants 🪴...</StyledLoading>;
  }

  return (
    <>
      <Header>All Plants</Header>
      <StyledList>
        {plants.map((plant, index) => (
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
                  Room: {plant.rooms[0].title}
                </StyledPlantDetails>
              </StyledListItem>
            </StyledLink>
          </StyledCard>
        ))}
      </StyledList>
    </>
  );
}
