import AddRoomModal from "@/components/AddRoomModal/AddRoomModal.js";
import Header from "@/components/Header/Header.js";
import Navigation from "@/components/Navigation/Navigation";
import RoomList from "@/components/RoomList/RoomList.js";

// Overview of all Rooms Page (atm still homepage)
export default function Homepage() {
  return (
    <div>
      <AddRoomModal />
      <Header>My Rooms</Header>
      <button>
        <a href="/plants/all">All plants Overview</a>
      </button>
      <RoomList />
      <Navigation />
    </div>
  );
}
