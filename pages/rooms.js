import Header from "@/components/Header/Header.js";
import RoomList from "@/components/RoomList/RoomList.js";
import { RoomType } from "@/components/RoomTile/RoomTile";

//Overview of all Rooms Page

export default function Rooms() {
  //Spiegelt DB wieder, aka welche Räume der User angelegt hat
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
      title: "My Bathroom",
      type: RoomType.BATHROOM,
    },
    {
      title: "My partners office",
      type: RoomType.OFFICE,
    },
  ];

  return (
    <div>
      <Header>My Rooms</Header>
      <RoomList rooms={rooms} />
    </div>
  );
}
