import Navigation from "@/components/Navigation/Navigation";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
import { StyledList } from "@/components/PlantList/PlantList.Styled";
import Image from "next/image";
import {
  StyledError,
  StyledErrorH3,
  StyledLoading,
} from "@/components/RoomList/RoomsList.Styled";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import Greeting from "@/components/Greeting/Greeting";
import StyledLink from "@/components/StyledLink/StyledLink";

// StyledComponents

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`;

const StyledCard = styled.div`
  background-color: var(--white);
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 20px;
  overflow: auto;
  white-space: nowrap;
`;

const StyledCardHeadline = styled.h3`
  font-weight: bold;
`;

export const StyledImage = styled(Image)`
  border-radius: 10px;
  margin: 0px 10px;
`;

export default function Homepage() {
  const { data: rooms, error, isLoading } = useSWR("/api/rooms", fetcher);
  const {
    data: plants,
    error: plantsError,
    isLoading: plantsLoading,
  } = useSWR("/api/plants", fetcher);

  if (error) {
    return (
      <StyledError>
        <StyledErrorH3>ERROR</StyledErrorH3>Failed to load rooms ☹︎
      </StyledError>
    );
  }

  if (isLoading) {
    return <StyledLoading>Loading your rooms...</StyledLoading>;
  }

  if (plantsError) {
    return (
      <StyledError>
        <StyledErrorH3>ERROR</StyledErrorH3>Failed to load plants
      </StyledError>
    );
  }

  if (plantsLoading) {
    return <StyledLoading>Loading your plants ...</StyledLoading>;
  }

  return (
    <>
      <StyledHeader>
        <Greeting>
          Good Morning, <br />
          user!
        </Greeting>
        <CgProfile size={30} />
      </StyledHeader>
      <StyledList>
        <StyledLink href={"/rooms/all"}>
          <StyledCardHeadline>My Rooms</StyledCardHeadline>
        </StyledLink>

        <StyledCard>
          {rooms.map((room, index) => (
            <StyledLink key={index} href={`/rooms/${room._id}`}>
              <StyledImage
                key={room._id}
                src={`/rooms/${room.type}.png`}
                width={90}
                height={90}
                alt={room.title}
              ></StyledImage>
            </StyledLink>
          ))}
        </StyledCard>

        <StyledLink href={"/plants/all"}>
          <StyledCardHeadline>My Plants</StyledCardHeadline>
        </StyledLink>

        <StyledCard>
          {plants.map((plant, index) => (
            <StyledLink href={`/plants/${plant._id}`} key={index}>
              <StyledImage
                key={plant._id}
                src={`/plants/${plant.type}.jpeg`}
                width={90}
                height={90}
                alt={plant.title}
              ></StyledImage>
            </StyledLink>
          ))}
        </StyledCard>
      </StyledList>
      <Navigation />
    </>
  );
}
