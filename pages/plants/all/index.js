import AllPlantsList from "@/components/AllPlantsList/AllPlantsList";
import BackButton from "@/components/BackButton/BackButton";
import Header from "@/components/Header/Header";
import PlantList from "@/components/PlantList/PlantList";

export default function AllPlants() {
  return (
    <>
      <BackButton href="/" />
      <Header>Your Plants</Header>
      <AllPlantsList />
      <PlantList />
    </>
  );
}
