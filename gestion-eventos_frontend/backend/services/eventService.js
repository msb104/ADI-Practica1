import { pb } from '../config/pb.js';

const createEvent = async (eventData) => {
	try {
		const event = await pb.collection('events').create(eventData);
		return event;
	} catch (error) {
		throw new Error('Error creating event: ' + error.message);
	}
};

export { createEvent };