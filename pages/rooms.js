import Header from "@/components/Header/Header.js";
import RoomList from "@/components/RoomList/RoomList.js";
import { RoomType } from "@/components/RoomTile/RoomTile";
import styled from "styled-components";

// Add room modal

// Overview of all Rooms Page
export default function Rooms() {
  // Dummy array (represents added rooms by the user from the e.g. db/localstorage)
  const rooms = [
    {
      title: "My Kitchen",
      type: RoomType.KITCHEN,
    },
    {
      title: "My Living Room",
      type: RoomType.LIVING_ROOM,
    },
    {
      title: "My Bedroom",
      type: RoomType.BEDROOM,
    },
    {
      title: "My Office",
      type: RoomType.OFFICE,
    },
    {
      title: "My partners office",
      type: RoomType.OFFICE,
    },
    {
      title: "My Bathroom",
      type: RoomType.BATHROOM,
    },
    {
      title: "My Hallway",
      type: RoomType.HALLWAY,
    },
    {
      title: "My Dining Room",
      type: RoomType.DINING_ROOM,
    },
  ];

  // Styled components
  const ModalBtn = styled.button`
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
  `;

  return (
    <div>
      <Header>My Rooms</Header>
      <ModalBtn>Open Modal</ModalBtn>
      <RoomList rooms={rooms} />
    </div>
  );
}
