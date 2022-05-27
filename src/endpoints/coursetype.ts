import { Endpoint } from '../endpoint';
import { CourseType, Reservation } from '../types';

export class CoursetypeEndpoint extends Endpoint {
    constructor(accessToken: string) {
        super('/coursetype', accessToken);
    }

    /**
     * Get all course types present in the database, ordered by ascending id.
     */
    async all(): Promise<CourseType[]> {
        const response = await this.query('', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get a specific course type by its id.
     * @param id The id of the course type.
     */
    async get(id: number): Promise<CourseType> {
        const response = await this.query(`/${id}`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get all reservations that uses this course type.
     * @param id The course type id.
     */
    async usedby(id: number): Promise<Reservation[]> {
        const response = await this.query(`/${id}/usedby`, {
            headers: {'Accept': "application/json"}
        });

        const reviver = (key: string, value: any) =>
            (key === 'startDate' || key === 'endDate') ? new Date(value) : value;
        return JSON.parse(response, reviver);
    }
}
