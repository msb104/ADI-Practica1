import { pb } from "../config/pb.js";
export async function borrarEvento(id) {
  try {
    await pb.collection("events").delete(id);
  } catch (error) {
    console.error("Error al borrar evento:", error);
    throw error;
  }
}
