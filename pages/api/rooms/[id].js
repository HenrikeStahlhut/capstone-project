import { getRoom } from "@/utils/db";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (!req.query.id) {
      return res.status(400).json({ error: "Missing room ID" });
    }

    console.log("QUERY", req.query.id);

    const room = await getRoom(req.query.id);

    console.log("room", room);

    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    return res.status(200).json(room);
  }

  // TODO: PUT method to update

  return res.status(405).end({ error: `Method ${req.method} Not Allowed` });
}
