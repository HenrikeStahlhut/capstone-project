import { getAllPlants, createPlant } from "@/utils/db_plants";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const plants = await getAllPlants();

    return res.status(200).json(plants);
  }

  if (req.method === "POST") {
    const { title, room } = req.body;

    // ------- Notes -------------------
    // const { title, room } = req.body;
    // above is the same as:
    // const title = req.body.title;
    // const room = req.body.room;
    // ---------------------------------

    const plant = await createPlant({ title, room });

    return res.status(201).json(plant);
  }

  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
