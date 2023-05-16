import mongoose from "mongoose";
import Plant from "@/utils/db_plants";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (!req.query.id) {
      return res.status(400).json({ error: "Missing room ID" });
    }

    console.log("QUERY", req.query.id);

    const plantsInRoom = await Plant.aggregate([
      { $match: { room: new mongoose.Types.ObjectId(req.query.id) } },
    ]);

    if (!plantsInRoom) {
      return res.status(404).json({ error: "Room not found" });
    }

    return res.status(200).json(plantsInRoom);
  }

  return res.status(405).end({ error: `Method ${req.method} Not Allowed` });
}
