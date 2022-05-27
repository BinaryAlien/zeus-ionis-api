import { Endpoint } from '../endpoint';
import { RoomType, Room } from '../types';

export class RoomtypeEndpoint extends Endpoint {
    constructor(accessToken: string) {
        super('/roomtype', accessToken);
    }

    /**
     * Get all rooms present in the database, ordered by ascending id.
     */
    async all(): Promise<RoomType[]> {
        const response = await this.query('', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get a specific room type by its id.
     * @param id The id of the room type.
     */
    async get(id: number): Promise<RoomType> {
        const response = await this.query(`/${id}`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get all rooms that uses this room type.
     * @param id The room type id.
     */
    async usedby(id: number): Promise<Room[]> {
        const response = await this.query(`/${id}/usedby`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }
}
