import { pb } from '../config/pb.js';

export async function listarEventos() {
    try {
        const records = await pb.collection('events').getList(1, 10, {
            sort: '-created'
        });
        
        return records.items;
    } catch (error) {
        throw error;
    }
}
