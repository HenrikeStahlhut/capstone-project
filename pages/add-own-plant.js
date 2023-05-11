import Header from "@/components/Header/Header";
import BackButton from "@/components/BackButton/BackButton";
import Navigation from "@/components/Navigation/Navigation";
import AddPlantForm from "@/components/AddPlantForm/AddPlantForm";

export default function AddPlants() {
  return (
    <>
      <BackButton href="/add-plants" />
      <Header>Add your own Plant</Header>
      <AddPlantForm />
      <Navigation />
    </>
  );
}
