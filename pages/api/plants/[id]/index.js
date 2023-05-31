import { getRoom } from "@/utils/db";
import Plant, { getPlant } from "@/utils/db_plants";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (!req.query.id) {
      return res.status(400).json({ error: "Missing room ID" });
    }

    const plant = await getPlant(req.query.id);

    if (!plant) {
      return res.status(404).json({ error: "Plant not found" });
    }

    const room = await getRoom(plant.room);

    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    return res.status(200).json({ ...plant.toJSON(), room });
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
