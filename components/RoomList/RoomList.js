import RoomTile, { RoomType } from "@/components/RoomTile/RoomTile.js";

// List of Rooms

export default function RoomList({ rooms }) {
  return (
    <>
      {rooms.map((room, index) => (
        <RoomTile key={index} title={room.title} type={room.type} />
      ))}
    </>
  );
}
