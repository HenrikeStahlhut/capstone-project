import { StyledButton } from "@/components/Button/Button";
import { fetcher } from "@/utils/fetcher";
import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import {
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledForm,
  StyledRequired,
} from "../AddPlantForm/AddPlantForm.Styled";
import {
  StyledError,
  StyledErrorH3,
  StyledLoading,
} from "../RoomList/RoomsList.Styled";

export default function AddPlantForm() {
  const { mutate } = useSWRConfig();

  const [title, setTitle] = useState("");
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);

  // get created rooms from api
  const {
    data: rooms,
    error: gettingRoomsError,
    isLoading,
  } = useSWR("/api/rooms", fetcher);

  // add plant logic
  const handleAddPlant = (event) => {
    event.preventDefault();

    if (!title || !room) {
      setError(<StyledRequired>Please Fill in all fields!</StyledRequired>);
      return;
    }

    fetch("/api/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        room,
      }),
    }).then(() => {
      mutate("/api/plants");
    });
    setTitle("");
    setRoom(" ");
  };

  // error handling
  if (gettingRoomsError) {
    return (
      <StyledError>
        <StyledErrorH3>ERROR</StyledErrorH3>Failed to load rooms ☹︎
      </StyledError>
    );
  }

  if (isLoading) {
    return <StyledLoading>Loading...</StyledLoading>;
  }

  // TODO: empty state if no rooms?

  return (
    <>
      <StyledForm onSubmit={handleAddPlant}>
        <StyledLabel htmlFor="plant-name">Give your plant a name!</StyledLabel>
        <StyledInput
          type="text"
          id="plant-name"
          placeholder="Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <StyledLabel htmlFor="room">Choose a room for your plant</StyledLabel>
        <StyledSelect
          id="room"
          name="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        >
          {rooms.map((room, index) => (
            <option key={index} value={room._id}>
              {room.title}
            </option>
          ))}
        </StyledSelect>
        <StyledButton type="submit">Add to my garden!</StyledButton>
        {error && <p>{error}</p>}
      </StyledForm>
    </>
  );
}
