import { pb } from '../config/pb.js';

export async function listarEventos() {
    try {
        const records = await pb.collection('events').getFullList();

        // Filtrar por owner específico
        const ownerToFilter = pb.authStore.model.id;
        const eventosFiltrados = records.filter(item => item.owner === ownerToFilter);

        return eventosFiltrados;
    } catch (error) {
        throw error;
    }
}
