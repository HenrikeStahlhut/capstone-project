// Based on: https://github.com/neuefische/hh-web-23-2/blob/24a26a1d0bd074917b1ae7e63e54a9adb49d72ad/sessions/backend-mongodb-atlas/assets/db.js
import mongoose, { model, models, Schema } from "mongoose";
import { PlantType } from "@/utils/PlantType";

const { MONGODB_URL } = process.env;

const plantSchema = new Schema({
  title: String,
  room: { type: mongoose.Types.ObjectId, ref: "Room._id" },
  type: {
    type: String,
    enum: Object.keys(PlantType),
  },
});

const Plant = models.Plant || model("Plant", plantSchema);

export default Plant;

async function connectDatabase() {
  await mongoose.connect(MONGODB_URL);
}

async function createPlant(plant) {
  await connectDatabase();
  const newPlant = await Plant.create(plant);
  return newPlant;
}

async function getPlant(id) {
  await connectDatabase();
  const plant = await Plant.findOne({ _id: id });
  return plant;
}

async function getPlantsByRoomId(roomId) {
  await connectDatabase();
  const plants = await Plant.find({ room: roomId });
  return plants;
}

async function getAllPlants() {
  await connectDatabase();
  const elements = await Plant.aggregate([
    {
      $lookup: {
        from: "rooms",
        localField: "room",
        foreignField: "_id",
        as: "rooms",
      },
    },
  ]);
  return elements;
}

async function deletePlant(id) {
  await connectDatabase();
  const plant = await Plant.findOne({ _id: id });
  await Plant.deleteOne({ _id: id });
  return plant;
}

async function updatePlant(id, plant) {
  await connectDatabase();
  await Plant.updateOne({ _id: id }, plant);
  const updatedPlant = await Plant.findOne({ _id: id });
  return updatedPlant;
}

export {
  createPlant,
  getPlant,
  getPlantsByRoomId,
  getAllPlants,
  deletePlant,
  updatePlant,
  Plant,
};
