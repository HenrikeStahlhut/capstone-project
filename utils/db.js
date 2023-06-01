// Based on: https://github.com/neuefische/hh-web-23-2/blob/24a26a1d0bd074917b1ae7e63e54a9adb49d72ad/sessions/backend-mongodb-atlas/assets/db.js
import { RoomType } from "@/components/RoomTile/RoomTile";
import mongoose, { model, models, Schema } from "mongoose";

const { MONGODB_URL } = process.env;

const roomSchema = new Schema({
  title: String,
  type: {
    type: String,
    enum: Object.keys(RoomType),
  },
  plants: [],
});

const Room = models.Room || model("Room", roomSchema);

async function connectDatabase() {
  await mongoose.connect(MONGODB_URL);
}

async function createRoom(room) {
  await connectDatabase();
  const newRoom = await Room.create(room);
  return newRoom;
}

async function getRoom(id) {
  await connectDatabase();
  const room = await Room.findOne({ _id: id });
  return room;
}

async function getAllRooms() {
  await connectDatabase();
  const elements = await Room.find({});
  return elements;
}

async function deleteRoom(id) {
  await connectDatabase();
  const room = await Room.findOne({ _id: id });
  await Room.deleteOne({ _id: id });
  return room;
}

async function updateRoom(id, room) {
  await connectDatabase();
  await Room.updateOne({ _id: id }, room);
  const updatedRoom = await Room.findOne({ _id: id });
  return updatedRoom;
}

export { createRoom, getRoom, getAllRooms, deleteRoom, updateRoom, Room };
