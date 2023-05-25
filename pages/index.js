import AddRoomModal from "@/components/AddRoomModal/AddRoomModal.js";
import Header from "@/components/Header/Header.js";
import Navigation from "@/components/Navigation/Navigation";
import RoomList from "@/components/RoomList/RoomList.js";
import Link from "next/link";

// Overview of all Rooms Page (atm still homepage)
export default function Homepage() {
  return (
    <div>
      <AddRoomModal />
      <Header>My Rooms</Header>
      <button>
        <Link href="/plants/all">All plants Overview</Link>
      </button>
      <RoomList />
      <Navigation />
    </div>
  );
}
