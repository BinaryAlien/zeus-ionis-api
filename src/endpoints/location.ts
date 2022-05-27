import { Endpoint } from '../endpoint';

import {
    HierarchyNode,
    HierarchyNodeWithType,
    Location,
    Room
} from '../types';

export class LocationEndpoint extends Endpoint {
    constructor(accessToken: string) {
        super('/location', accessToken);
    }

    /**
     * Get all locations present in the database, ordered by ascending id.
     */
    async all(): Promise<Location[]> {
        const response = await this.query('', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get all locations present in the database, with hierarchy structure.
     */
    async hierarchy(): Promise<HierarchyNode[]> {
        const response = await this.query('/hierarchy', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get all locations present in the database, with their rooms in a hierarchy structure.
     */
    async hierarchy_withrooms(): Promise<HierarchyNodeWithType[]> {
        const response = await this.query('/hierarchy/withrooms', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get all rooms of a location from a location id.
     * @param id The id of the location.
     */
    async rooms(id: number): Promise<Room[]> {
        const response = await this.query(`/${id}/rooms`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get a specific location by its id.
     * @param id The location id.
     */
    async get(id: number): Promise<Location> {
        const response = await this.query(`/${id}`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get children of a location from the parent id.
     * @param id The location id.
     */
    async children(id: number): Promise<Location[]> {
        const response = await this.query(`/${id}/children`, {
            headers: {'Accept': "application/json"}
        });

        return (response.length !== 0) ? JSON.parse(response) : [];
    }

    /**
     * Get all rooms that uses this location.
     * @param id The location id.
     */
    async usedby(id: number): Promise<Room[]> {
        const response = await this.query(`/${id}/usedby`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }
}
