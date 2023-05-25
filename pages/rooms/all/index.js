import AddRoomModal from "@/components/AddRoomModal/AddRoomModal.js";
import BackButton from "@/components/BackButton/BackButton";
import Header from "@/components/Header/Header.js";
import Navigation from "@/components/Navigation/Navigation";
import RoomList from "@/components/RoomList/RoomList.js";
import Link from "next/link";

// Overview of all Rooms Page (atm still homepage)
export default function AllRooms() {
  return (
    <>
      <BackButton href="/" />

      <Header>My Rooms</Header>
      <AddRoomModal />
      <RoomList />
      <Navigation />
    </>
  );
}
