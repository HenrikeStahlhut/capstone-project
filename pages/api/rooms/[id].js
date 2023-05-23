import { getRoom, updateRoom, deleteRoom } from "@/utils/db";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (!req.query.id) {
      return res.status(400).json({ error: "Missing room ID" });
    }

    const room = await getRoom(req.query.id);

    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    return res.status(200).json(room);
  }

  if (req.method === "PUT") {
    const roomData = req.body;
    const id = req.query.id;

    const updatedroom = await updateRoom(id, roomData);
    return res.status(200).json(updatedroom);
  }

  if (req.method === "DELETE") {
    const id = req.query.id;

    const deletedRoom = await deleteRoom(id);
    return res.status(200).json(deletedRoom);
  }

  return res.status(405).end({ error: `Method ${req.method} Not Allowed` });
}
