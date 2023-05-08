import Header from "@/components/Header/Header.js";
import RoomList from "@/components/RoomList/RoomList.js";
import { RoomType } from "@/components/RoomTile/RoomTile";

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

  return (
    <div>
      <Header>My Rooms</Header>
      <RoomList rooms={rooms} />
    </div>
  );
}
