import { Endpoint } from '../endpoint';

import {
    AssignRoom,
    FilterAllAvailableRooms,
    FilterAvailableRoomRequest,
    FilterAvailableRoomResponse,
    Room,
    RoomPagingOptions
} from '../types';

export class RoomEndpoint extends Endpoint {
    constructor(accessToken: string) {
        super('/room', accessToken);
    }

    /**
     * Get all rooms present in the database, ordered by ascending id.
     */
    async all(): Promise<Room[]> {
        const response = await this.query('', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get rooms with paging and filter, ordered by ascending name.
     */
    async withpaging(options: RoomPagingOptions): Promise<Room[]> {
        const params = new URLSearchParams();
        Object.entries(options).forEach(option =>
            params.append(option[0], option[1].toString()));

        const response = await this.query(`/withpaging?${params}`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get a specific room by its id.
     * @param id The id of the room.
     */
    async get(id: number): Promise<Room> {
        const response = await this.query(`/${id}`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Search for the first available room with filters when we don't know an available date interval for groups and teachers.
     * @param filter Filter with dates interval, hours interval, groups, teachers, capacity, location, room, roomType.
     */
    async available(filter: FilterAvailableRoomRequest): Promise<FilterAvailableRoomResponse> {
        const body = JSON.stringify(filter);

        const response = await this.query('/available', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Content-Length': body.length
            }
        }, body);

        const reviver = (key: string, value: any) =>
            (key === 'startDate' || key === 'endDate') ? new Date(value) : value;
        return JSON.parse(response, reviver);
    }

    /**
     * Get all available rooms with filters on an already known valid date interval for groups.
     * @param filter Filter with dates intervals, groups (only used for calculating capacity), location and more.
     */
    async available_all(filter: FilterAllAvailableRooms): Promise<Room[]> {
        const body = JSON.stringify(filter);

        const response = await this.query('/available/all', {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",
                'Content-Length': body.length
            }
        }, body);

        const reviver = (key: string, value: any) =>
            (key === 'startDate' || key === 'endDate') ? new Date(value) : value;
        return JSON.parse(response, reviver);
    }

    /**
     * Get all AssignRoom and AssignBroadcastRoom that uses this room.
     * @param id The room id.
     */
    async usedby(id: number): Promise<AssignRoom[]> {
        const params = new URLSearchParams();
        params.append('id', id.toString());

        const response = await this.query(`/${id}/usedby?${params}`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get an ICS export of courses of the given room.
     *
     * @param id    The room id.
     * @param token The user's token.
     */
    async ics(id: number, token: string): Promise<string> {
        return await this.query(`/${id}/ics/${token}`, {
            headers: {'Accept': "application/calendar"}
        });
    }
}
