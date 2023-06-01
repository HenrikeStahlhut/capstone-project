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
import { PlantType } from "@/utils/PlantType";

export default function AddPlantForm() {
  const { mutate } = useSWRConfig();

  const [title, setTitle] = useState("");
  const [room, setRoom] = useState(null);
  const [type, setType] = useState(undefined);
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

    if (!title || !room || !type) {
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
        type,
      }),
    }).then(() => {
      mutate("/api/plants");
    });
    setTitle("");
    setRoom(null);
    setType(" ");
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

  return (
    <>
      <StyledForm onSubmit={handleAddPlant}>
        {/* Plant Name */}
        <StyledLabel htmlFor="plant-name">Give your plant a name</StyledLabel>
        <StyledInput
          type="text"
          id="plant-name"
          placeholder="Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Plant type for image */}
        <StyledLabel htmlFor="plants">Choose plant type</StyledLabel>
        <StyledSelect
          id="plants"
          name="plants"
          required="required"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="" disabled selected>
            Select plant type
          </option>
          <option value={PlantType.INVALID}>No plant type</option>
          <option value={PlantType.PHILODENDRON}>Philodendron</option>
          <option value={PlantType.SPIDER_PLANT}>Spider Plant</option>
          <option value={PlantType.STRING_OF_PERLS}>String of perls</option>
          <option value={PlantType.STAGHORN_FERN}>Staghorn fern</option>
          <option value={PlantType.ORCHID}>Orchid</option>
          <option value={PlantType.PEACE_LILY}>Peace lily</option>
          <option value={PlantType.MONSTERA_DELICIOSA}>
            Monstera deliciosa
          </option>
          <option value={PlantType.SNAKE_PLANT}>Snake plant</option>
          <option value={PlantType.JADE_PLANT}>Jade plant</option>
          <option value={PlantType.STING_OF_HEARTS}>Sting of hearts</option>
          <option value={PlantType.RUBBER_PLANT}>Rubber plant</option>
          <option value={PlantType.CALATHEA_ORNATA}>Calathea ornata</option>
          <option value={PlantType.YUCCA_PLANT}>Yucca plant</option>
          <option value={PlantType.ENGLISH_IVY}>English Ivy</option>
          <option value={PlantType.DRACAENA_MARGINATA}>
            Dracaena Marginata
          </option>
          <option value={PlantType.PEPEROMIA}>Peperomia</option>
          <option value={PlantType.ZZ_PLANT}>ZZ Plant</option>
          <option value={PlantType.ARROWHEAD_VINE}>Arrowhead vine</option>
          <option value={PlantType.HOYA}>Hoya</option>
          <option value={PlantType.CORN_PLANT}>Corn Plant</option>
          <option value={PlantType.PONYTAIL_PALM}>Ponytail Palm</option>
          <option value={PlantType.CALATHEA}>Calathea</option>
        </StyledSelect>

        {/* Room */}
        <StyledLabel htmlFor="room">Choose a room for your plant</StyledLabel>
        <StyledSelect
          id="room"
          name="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option value="" disabled selected>
            Select room
          </option>
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
