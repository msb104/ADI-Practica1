import { pb } from '../config/pb.js';

export async function editarEvento(id, datos) {
    try {
        const record = await pb.collection('events').update(id, datos);
        return record;
    } catch (error) {
        console.error('Error al editar evento:', error);
        throw error;
    }
}