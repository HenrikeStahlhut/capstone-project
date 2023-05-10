import Header from "@/components/Header/Header";
import BackButton from "@/components/BackButton/BackButton";
import Navigation from "@/components/Navigation/Navigation";
import AddPlantsForm from "@/components/AddPlantForm/AddPlantForm";

export default function AddPlants() {
  return (
    <>
      <BackButton href="/add-plants" />
      <Header>Add your own Plant</Header>
      <AddPlantsForm />
      <Navigation />
    </>
  );
}
