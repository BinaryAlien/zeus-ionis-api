import { Endpoint } from '../endpoint';
import { Group, GroupPagingOptions, HierarchyNode } from '../types';

export class GroupEndpoint extends Endpoint {
    constructor(accessToken: string) {
        super('/group', accessToken);
    }

    /**
     * Get all groups present in the database, in no particular order.
     */
    async all(): Promise<Group[]> {
        const response = await this.query('', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get groups with paging and filter, ordered by hierarchy.
     */
    async withpaging(options: GroupPagingOptions): Promise<Group[]> {
        const params = new URLSearchParams();
        Object.entries(options).forEach(option =>
            params.append(option[0], option[1].toString()));

        const response = await this.query(`/withpaging?${params}`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get all groups present in the database, with hierarchy structure.
     */
    async hierarchy(): Promise<HierarchyNode[]> {
        const response = await this.query('/hierarchy', {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get a specific group by its id.
     * @param id The id of the group.
     */
    async get(id: number): Promise<Group> {
        const response = await this.query(`/${id}`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get children of a group from the parent id.
     * @param id The parent group id.
     */
    async children(id: number): Promise<Group[]> {
        const response = await this.query(`/${id}/children`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }

    /**
     * Get an ICS export of courses of the given group.
     *
     * @param id    The group id.
     * @param token The user's token.
     */
    async ics(id: number, token?: string): Promise<string> {
        const target = (token === undefined) ? `/${id}/ics` : `/${id}/ics/${token}`;

        return await this.query(target, {
            headers: {'Accept': "application/calendar"}
        });
    }

    /**
     * Get all assigned groups to a specific course.
     * @param id The course id.
     */
    async ByCourseId(id: number): Promise<Group[]> {
        const params = new URLSearchParams();
        params.append('id', id.toString());

        const response = await this.query(`/ByCourseId?${params}`, {
            headers: {'Accept': "application/json"}
        });

        return JSON.parse(response);
    }
}
