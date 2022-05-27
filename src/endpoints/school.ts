import { Endpoint } from '../endpoint';
import { AssignSchool, School } from '../types';

export class SchoolEndpoint extends Endpoint {
    constructor(accessToken: string) {
        super('/School', accessToken);
    }

    /**
     * Get all schools, ordered by id.
     */
    async all(): Promise<School[]> {
        const response = await this.query('', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get a specific school by its id.
     * @param id The id of the school.
     */
    async get(id: number): Promise<School> {
        const response = await this.query(`/${id}`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get all AssignSchool of a school.
     * @param id The school id.
     */
    async usedby(id: number): Promise<AssignSchool[]> {
        const response = await this.query(`/${id}/usedby`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }
}
