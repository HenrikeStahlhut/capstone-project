// Based on: https://github.com/neuefische/hh-web-23-2/blob/24a26a1d0bd074917b1ae7e63e54a9adb49d72ad/sessions/backend-mongodb-atlas/assets/db.js
// import { RoomType } from "@/components/RoomTile/RoomTile";
import mongoose, { model, models, Schema } from "mongoose";

const { MONGODB_URL } = process.env;

const plantSchema = new Schema({
  title: String,
  type: {
    type: String,
    enum: Object.keys(RoomType),
  },
});

const Plant = models.Plant || model("Plant", roomSchema);

async function connectDatabase() {
  await mongoose.connect(MONGODB_URL);
}

async function createPlant(room) {
  await connectDatabase();
  const newPlant = await Plant.create(plant);
  return newPlant;
}

async function getPlant(id) {
  await connectDatabase();
  const plant = await Plant.findOne({ id });
  return plant;
}

async function getAllPlants() {
  await connectDatabase();
  const elements = await Plant.find({});
  return elements;
}

async function deletePlant(id) {
  await connectDatabase();
  const plant = await Plant.findOne({ id });
  await Plant.deleteOne({ id });
  return plant;
}

async function updatePlant(id, plant) {
  await connectDatabase();
  await Plant.updateOne({ id }, room);
  const updatedPlant = await Plant.findOne({ id });
  return updatedPlant;
}

export { createPlant, getPlant, getAllPlants, deletePlant, updatePlant };
