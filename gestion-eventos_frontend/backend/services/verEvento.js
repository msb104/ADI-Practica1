import { pb } from '../config/pb.js';

export async function verEvento(id) {
    try {
        const record = await pb.collection('events').getOne(id);
        return record;
    } catch (error) {
        console.error('Error al obtener evento:', error);
        throw error;
    }
}