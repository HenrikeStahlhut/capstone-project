import { getAllRooms, createRoom } from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const rooms = await getAllRooms();

    return res.status(200).json(rooms);
  }

  if (req.method === "POST") {
    const { title, type } = req.body;

    // const room = await createRoom({ title, type, rooms });
    const room = await createRoom({ title, type });

    return res.status(201).json(room);
  }

  return res.status(405).end({ error: `Method ${req.method} Not Allowed` });
}
