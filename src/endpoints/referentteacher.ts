import { Endpoint } from '../endpoint';
import { ReferentTeacher } from '../types';

export class ReferentteacherEndpoint extends Endpoint {
    constructor(accessToken: string) {
        super('/referentteacher', accessToken);
    }

    /**
     * Get all ReferentTeacher present in the database, ordered by ascending id.
     */
    async all(): Promise<ReferentTeacher[]> {
        const response = await this.query('', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get a specific ReferentTeacher by its id.
     * @param id The id of the ReferentTeacher.
     */
    async get(id: number): Promise<ReferentTeacher> {
        const response = await this.query(`/${id}`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }
}
