import { getAllPlants, createPlant } from "@/utils/db_plants";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const plants = await getAllPlants();

    return res.status(200).json(plants);
  }

  if (req.method === "POST") {
    const { title, room, type } = req.body;

    console.log("req.body", req.body);

    const plant = await createPlant({
      title,
      // room: "646375c2ca61d7b3c9e64f81",
      room,
      type,
    });

    return res.status(201).json(plant);
  }

  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
