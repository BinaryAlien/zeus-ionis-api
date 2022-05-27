import { Endpoint } from '../endpoint';

import {
    DetailedReservationInfos,
    FilterReservationByGroupName,
    FilterReservations,
    FilterReservationsWithPaging,
    Reservation,
    ReservationInfosToDisplay,
    ReservationInfosToDisplayWithTeachers,
    ReservationPagingOptions
} from '../types';

export class ReservationEndpoint extends Endpoint {
    constructor(accessToken: string) {
        super('/reservation', accessToken);
    }

    /**
     * Get all reservations with paging and filter, ordered by starting date.
     */
    async withpaging(options: ReservationPagingOptions): Promise<ReservationInfosToDisplay[]> {
        const params = new URLSearchParams();
        Object.entries(options).forEach(option =>
            params.append(option[0], option[1].toString()));

        const response = await this.query(`/withpaging?${params}`, {
            headers: {'Accept': "application/json"}
        });

        const reviver = (key: string, value: any) =>
            (key === 'startDate' || key === 'endDate') ? new Date(value) : value;
        return JSON.parse(response, reviver);
    }

    /**
     * Get a specific Reservation by its id.
     * @param id The id of the Reservation.
     */
    async get(id: number): Promise<Reservation> {
        const response = await this.query(`/${id}`, {
            headers: {'Accept': "application/json"}
        });

        const reviver = (key: string, value: any) =>
            (key === 'startDate' || key === 'endDate') ? new Date(value) : value;
        return JSON.parse(response, reviver);
    }

    /**
     * Get reservations of a specific list of groups, rooms, teachers with a date interval.
     * @param filter The filter to apply to get Reservations.
     */
    async filter(filter: FilterReservations): Promise<Reservation[]> {
        const body = JSON.stringify(filter);

        const response = await this.query('/filter', {
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
     * Get Reservations of a specific list of groups, rooms, teachers with a date interval. Same function than filter but with more informations (course name, rooms). This endpoint is for displaying reservations in the scheduler.
     * @param filter The filter to apply to get Reservations.
     */
    async filter_displayable(filter: FilterReservations): Promise<ReservationInfosToDisplay[]> {
        const body = JSON.stringify(filter);

        const response = await this.query('/filter/displayable', {
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
     * Get all the details of a reservation (course code, name, school, rooms, groups, teachers, ...).
     * @param id The id of the reservation to get the details.
     */
    async details(id: number): Promise<DetailedReservationInfos> {
        const response = await this.query(`/${id}/details`, {
            headers: {'Accept': "application/json"}
        });

        const reviver = (key: string, value: any) =>
            (key === 'startDate' || key === 'endDate') ? new Date(value) : value;
        return JSON.parse(response, reviver);
    }

    /**
     * Get paginated reservations of a specific list of groups, rooms, teachers from a starting date. Results will be reservations after the starting date and ordered by date ascending if the 'order' parameter is "asc", or reservations before the starting date and ordered by date descending if the 'order' parameter is "desc".
     * @param filter The filter to apply to get Reservations.
     */
    async filter_withpaging(filter: FilterReservationsWithPaging): Promise<ReservationInfosToDisplay[]> {
        const body = JSON.stringify(filter);

        const response = await this.query('/filter/withpaging', {
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
     * Get reservations by group name. If multiple groups match the parameters, only reservations affected to the first one found will be returned.
     */
    async byGroupName(filter: FilterReservationByGroupName): Promise<ReservationInfosToDisplayWithTeachers[]> {
        const body = JSON.stringify(filter);

        const response = await this.query('/byGroupName', {
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
}
