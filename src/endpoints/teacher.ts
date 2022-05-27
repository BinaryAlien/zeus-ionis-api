import { Endpoint } from '../endpoint';
import { PublicTeacherInfos, School, TeacherUsedBy } from '../types';

export class TeacherEndpoint extends Endpoint {
    constructor(accessToken: string) {
        super('/teacher', accessToken);
    }

    /**
     * Get public list of teachers, in no particular order.
     */
    async all(): Promise<PublicTeacherInfos[]> {
        const response = await this.query('/public', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get all the schools of a teacher.
     * @param id The teacher id.
     */
    async schools(id: number): Promise<School[]> {
        const response = await this.query(`/${id}/schools`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get all AssignTeacher and AssignSchool that uses this teacher.
     * @param id The teacher id.
     */
    async usedby(id: number): Promise<TeacherUsedBy> {
        const response = await this.query(`/${id}/usedby`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get ICS export for teacher courses.
     * @param id The Teacher id.
     * @param token The user's token.
     */
    async ics(id: number, token?: string): Promise<string> {
        const target = (token === undefined) ? `/${id}/ics` : `/${id}/ics/${token}`;

        return await this.query(target, {
            headers: {'Accept': "application/calendar"}
        });
    }
}
