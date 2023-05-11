import { useState } from "react";
import Header from "@/components/Header/Header.js";
import RoomList from "@/components/RoomList/RoomList.js";
import AddRoomModal from "@/components/AddRoomModal/AddRoomModal.js";
import { RoomType } from "@/components/RoomTile/RoomTile";
import Navigation from "@/components/Navigation/Navigation";

// Dummy array (represents added rooms by the user from the e.g. db/localstorage)
const initialUserRooms = [
  {
    title: "Dummy Kitchen",
    type: RoomType.KITCHEN,
  },
  {
    title: "Dummy Living Room",
    type: RoomType.LIVING_ROOM,
  },
  {
    title: "Dummy Bedroom",
    type: RoomType.BEDROOM,
  },
  {
    title: "Dummy Office",
    type: RoomType.OFFICE,
  },
  {
    title: "Dummy Bathroom",
    type: RoomType.BATHROOM,
  },
  {
    title: "Dummy Hallway",
    type: RoomType.HALLWAY,
  },
  {
    title: "Dummy Dining Room",
    type: RoomType.DINING_ROOM,
  },
];

// Overview of all Rooms Page (atm still homepage)
export default function Homepage() {
  const [roomsList, setRoomsList] = useState(initialUserRooms);

  const addRoom = (room) => setRoomsList([...roomsList, room]);

  return (
    <div>
      <AddRoomModal rooms={roomsList} addRoom={addRoom} />
      <Header>My Rooms</Header>
      <RoomList rooms={roomsList} />
      <Navigation />
    </div>
  );
}
