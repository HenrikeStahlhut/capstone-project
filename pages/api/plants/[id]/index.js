import Plant from "@/utils/db_plants";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (!req.query.id) {
      return res.status(400).json({ error: "Missing room ID" });
    }

    const plantsInRoom = await Plant.aggregate([
      { $match: { room: new mongoose.Types.ObjectId(req.query.id) } },
      {
        $lookup: {
          from: "rooms",
          localField: "room",
          foreignField: "_id",
          as: "rooms",
        },
      },
    ]);

    if (!plantsInRoom) {
      return res.status(404).json({ error: "Room not found" });
    }

    return res.status(200).json(plantsInRoom);
  }

  if (req.method === "PUT") {
    const plantData = req.body;
    const id = req.query.id;

    const updatedPlant = await updatePlant(id, plantData);
    return res.status(200).json(updatedPlant);
  }

  if (req.method === "DELETE") {
    const id = req.query.id;

    const deletePlant = await deletePlant(id);
    return res.status(200).json(deletePlant);
  }

  return res.status(405).end({ error: `Method ${req.method} Not Allowed` });
}
