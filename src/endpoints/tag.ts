import { Endpoint } from '../endpoint';
import { Tag } from '../types';

export class TagEndpoint extends Endpoint {
    constructor(accessToken: string) {
        super('/tag', accessToken);
    }

    /**
     * Get all tags present in the database, ordered by id.
     */
    async all(): Promise<Tag[]> {
        const response = await this.query('', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get the list of tags of a course.
     * @param id The id of the course.
     */
    async ofcourse(id: number): Promise<Tag[]> {
        const response = await this.query(`/ofcourse/${id}`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }
}
