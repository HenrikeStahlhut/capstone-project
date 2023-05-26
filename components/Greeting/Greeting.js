import styled from "styled-components";

// Styled Components

const StyledHeadline = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
`;

export default function Greeting() {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return <StyledHeadline> Good {timeOfDay}!</StyledHeadline>;
}
