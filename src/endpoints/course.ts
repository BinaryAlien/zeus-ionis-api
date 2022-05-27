import { Endpoint } from '../endpoint';
import { Course, CoursePagingOptions, Reservation } from '../types';

export class CourseEndpoint extends Endpoint {
    constructor(accessToken: string) {
        super('/course', accessToken);
    }

    /**
     * Get all courses present in the database, ordered by ascending name.
     */
    async all(): Promise<Course[]> {
        const response = await this.query('', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get courses with paging and filter, ordered by ascending name.
     * @param groups The list of groups filter. Leave empty to accept all groups.
     */
    async withpaging(groups: number[], options: CoursePagingOptions): Promise<Course[]> {
        const params = new URLSearchParams(); 
        Object.entries(options).forEach(option =>
            params.append(option[0], option[1].toString()));
        const body = JSON.stringify(groups);

        const response = await this.query(`/withpaging?${params}`, {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",
                'Content-Length': body.length
            }
        }, body);

        return JSON.parse(response);
    }

    /**
     * Get a specific course by its id.
     * @param id The id of the course.
     */
    async get(id: number): Promise<Course> {
        const response = await this.query(`/${id}`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get all reservations that uses the given course id.
     * @param id The course id.
     */
    async usedby(id: number): Promise<Reservation[]> {
        const response = await this.query(`/${id}/usedby`, {
            headers: {'Accept': "application/json"}
        });

        const reviver = (key: string, value: any) =>
            (key === 'startDate' || key === 'endDate') ? new Date(value) : value;
        return JSON.parse(response, reviver);
    }

    /**
     * Get all courses by teacher id.
     * @param idTeacher The teacher id.
     */
    async teacher(idTeacher: number): Promise<Course[]> {
        const response = await this.query(`/teacher/${idTeacher}`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }
}
