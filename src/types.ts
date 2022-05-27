export interface AppAuthModel {
    /** Your application Id. */
    appId?: string;
}

export interface ProblemDetails {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
}

export interface Course {
    /** The id of the course. */
    id: number;

    /** The full name of the course. */
    name: string;

    /** The code name of the course. */
    code: string;

    /** The total duration of the course in minutes. */
    duration: number;

    /** The id of the school. */
    idSchool: number;
}

export interface CoursePagingOptions {
    /** The page number to get. By default, it's the first page (0). */
    PageNumber?: number;

    /** The page size. It has a maximum of 50, and is set to 10 by default. */
    PageSize?: number;

    /** The name to filter results, not case sensitive (AbC will also match abc and ABC). */
    Name?: string;
}

export interface Reservation {
    /** The id of the reservation. */
    id: number;

    /** The id of the course corresponding to this reservation. */
    idCourse: number;

    /** The name of the reservation, if there is no IdCourse. */
    name: string;

    /** The id corresponding to the type of the course. */
    idType: number;

    /** The starting date of the reservation. */
    startDate: Date;

    /** The ending date of the reservation. */
    endDate: Date;

    /** A boolean indicating if the course is online or not. */
    isOnline: boolean;

    /** Url of the online course. */
    url: string;

    /** A comment about the reservation. */
    comment: string;

    /** The id of the school corresponding to this reservation. */
    idSchool: number;

    /** The id of the group of reservation created with constraint (null if there is no group). */
    constraintGroupId: string;
}

export interface ReservationPagingOptions {
    /** The interval start date. */
    StartDate?: Date;

    /** The interval end date. */
    EndDate?: Date;

    /** The page number to get. By default, it's the first page (0). */
    PageNumber?: number;

    /** The page size. It has a maximum of 50, and is set to 10 by default. */
    PageSize?: number;

    /** The name to filter results, not case sensitive (AbC will also match abc and ABC). */
    Name?: string;
}

export interface CourseType {
    /** The id of the CourseType. */
    id: number;

    /** The type of the course. */
    type: string;
}

export interface Group {
    /** The id of the group. */
    id: number;

    /** The parent group id of the group (null for root node). */
    idParent: number;

    /** The name of the group. */
    name: string;

    /** The full name of the group (path). */
    path: string;

    /** The number of persons in the group. */
    count: number;

    /** A boolean indicating if the group is read only or not. */
    isReadOnly: boolean;

    /** The school id of the group. */
    idSchool: number;

    /** The group's color in RGB hexadecimal format (ex: "#FFAACC"). */
    color: string;

    /** Boolean indicating if the entity is visible by user. By Default is visible. */
    isVisible: boolean;
}

export interface GroupPagingOptions {
    /** The page number to get. By default, it's the first page (0). */
    PageNumber?: number;

    /** The page size. It has a maximum of 50, and is set to 10 by default. */
    PageSize?: number;

    /** The name to filter results, not case sensitive (AbC will also match abc and ABC). */
    Name?: string;
}

export interface HierarchyNode {
    /** The name of the parent entity. */
    name: string;

    /** The id of the entity. */
    id: number;

    /** The school id. */
    id_school: number;

    /** The number of students in the group. */
    count: number;

    /** The id of the parent node. Is null if there is no parent. */
    id_parent: number;

    /** The list of children (like a tree structure). */
    children: HierarchyNode[];

    /** Hide groupe when a user isn't admin. */
    is_visible: boolean;
}

export interface Location {
    /** The id of the location. */
    id: number;

    /** The id of the parent. */
    idParent: number;

    /** The name of the location. */
    name: string;

    /** The fullname of the location (path). */
    path: string;
}

export interface HierarchyNodeWithType {
    /** The name of the location or room. */
    name: string;

    /** The id of the location or room. */
    id: number;

    /** The id of the parent node. */
    id_parent: number;

    /** The capacity of the room (0 for locations). */
    capacity: number;

    /** The type of node (location or room type). */
    type: string;

    /** The id of the type (0 for locations, room type id for rooms). */
    id_type: number;

    /** A list of children (tree structure). */
    children: HierarchyNodeWithType[];

    /** Hide groupe when a user isn't admin. */
    is_visible: boolean;
}

export interface Room {
    /** The id of the Room. */
    id: number;

    /** The capacity of the room. */
    capacity: number;

    /** The name of the room. */
    name: string;

    /** The id corresponding to the type of room. */
    idRoomType: number;

    /** The id corresponding to the location of the room. */
    idLocation: number;

    /** Boolean indicating if the entity is visible by user. By Default is visible. */
    isVisible: boolean;
}

export interface RoomPagingOptions {
    /** The page number to get. By default, it's the first page (0). */
    PageNumber?: number;

    /** The page size. It has a maximum of 50, and is set to 10 by default. */
    PageSize?: number;

    /** The name to filter results, not case sensitive (AbC will also match abc and ABC). */
    Name?: string;
}

export interface ReferentTeacher {
    /** The id of the ReferentTeacher. */
    id: number;

    /** The id of the teacher. */
    idTeacher: number;

    /** The id of the course the teacher is referent. */
    idCourse: number;
}

export interface PublicTeacherInfos {
    /** The id of the Teacher. */
    id: number;

    /** The lastname of the teacher. */
    name: string;

    /** The firstname of the teacher. */
    firstname: string;

    /** A boolean indicating if the teacher is internal. */
    isInternal: boolean;
}

export interface ReservationInfosToDisplayWithTeachers {
    /** Teachers associated with the course. */
    teachers: PublicTeacherInfos[];

    /** The reservation id. */
    idReservation: number;

    /** The id of the course. */
    idCourse: number;

    /** The course or reservation name. */
    name: string;

    /** The type of reservation. */
    idType: number;

    /** The name of the type corresponding to this reservation. */
    typeName: string;

    /** The starting date of the reservation. */
    startDate: Date;

    /** The ending date of the reservation. */
    endDate: Date;

    /** Boolean indicating if the course is online or not. */
    isOnline: boolean;

    /** Rooms associated with the course. */
    rooms: Room[];

    /** Group associated with the course. */
    groups: Group[];

    /** The id of the school corresponding to this reservation. */
    idSchool: number;

    /** The name of the school corresponding to this reservation. */
    schoolName: string;

    /** The Id of constraint group this reservation belong to. */
    constraintGroupId: string;
}

export interface FilterReservations {
    /** A list of groups to search for reservations. */
    groups?: number[];

    /** A list of rooms to search for reservations. */
    rooms?: number[];

    /** A list of teachers to search for reservations. */
    teachers?: number[];

    /** The starting date to find reservations. */
    startDate: Date;

    /** The ending date to find reservations. */
    endDate: Date;
}

export interface Teacher {
    /** The id of the Teacher. */
    id: number;

    /** The lastname of the teacher. */
    name: string;

    /** The firstname of the teacher. */
    firstname: string;

    /** The mail adress of the teacher. */
    mail: string;

    /** A boolean indicating if the teacher is internal. */
    isInternal: boolean;

    /** A boolean indicating if the teacher is Philosophiae doctor. */
    isPhd: boolean;

    /** The phone number of the teacher. */
    phone: string;
}

export interface ReservationInfosToDisplay {
    /** The reservation id. */
    idReservation: number;

    /** The id of the course. */
    idCourse: number;

    /** The course or reservation name. */
    name: string;

    /** The type of reservation. */
    idType: number;

    /** The name of the type corresponding to this reservation. */
    typeName: string;

    /** The starting date of the reservation. */
    startDate: Date;

    /** The ending date of the reservation. */
    endDate: Date;

    /** Boolean indicating if the course is online or not. */
    isOnline: boolean;

    /** Rooms associated with the course. */
    rooms: Room[];

    /** Group associated with the course. */
    groups: Group[];

    /** Teacher associated with the course. */
    teachers: Teacher[];

    /** The id of the school corresponding to this reservation. */
    idSchool: number;

    /** The name of the school corresponding to this reservation. */
    schoolName: string;

    /** The Id of constraint group this reservation belong to. */
    constraintGroupId: string;
}

export interface RoomWithBroadcastInfo {
    room: Room

    /** Boolean indicating if the room is a broadcast room. */
    isBroadcastRoom: boolean;
}

export interface DetailedReservationInfos
{
    /** The reservation id. */
    idReservation: number;

    /** The id of the course. */
    idCourse: number;

    /** The course or reservation name. */
    name: string;

    /** The type of reservation. */
    idType: number;

    /** The starting date. */
    startDate: Date;

    /** The end date. */
    endDate: Date;

    /** Boolean indicating if the course is online or not. */
    isOnline: boolean;

    /** The url of the course (if online). */
    url: string;

    /** Comments on the reservation. */
    comment: string;

    /** The creation date of the reservation. */
    creationDate: Date;

    /** The course code. */
    code: string;

    /** The total duration of the course. */
    duration: number;

    /** The school associated with the course. */
    idSchool: number;

    /** Rooms associated with the reservation. */
    rooms: RoomWithBroadcastInfo[];

    /** Groups associated with the reservation. */
    groups: Group[];

    /** Teachers associated with the reservation. */
    teachers: PublicTeacherInfos[];
}

export interface FilterReservationsWithPaging {
    /** A list of groups to search for reservations. */
    groups?: number[];

    /** A list of rooms to search for reservations. */
    rooms?: number[];

    /** A list of teachers to search for reservations. */
    teachers?: number[];

    /** The starting date to find reservations. */
    startDate: Date;

    /** The sorting order to return data. Must be "asc" or "desc" By default "asc". */
    order: "asc" | "desc";

    /** The page number to get By default it's the first page (0). */
    pageNumber?: number;

    /** The page size If the value is too big, it set to the max page size value (50). */
    pageSize?: number;
}

export interface FilterReservationByGroupName {
    /** Name of one of the wanted group ancester. */
    parentName: string;

    /** Wanted group name. */
    groupName: string;

    /** The starting date to find reservations. */
    startDate: Date;

    /** The ending date to find reservations. */
    endDate: Date;
}

export interface FilterAvailableRoomRequest {
    /** The starting date interval from when to find the room (now by default). */
    startDate?: Date;

    /** The ending date interval when to find the room (the start date + 1 year by default). */
    endDate?: Date;

    /** The starting time interval from when to find the room (in minutes). */
    startTime?: number;

    /** The ending time interval from when to find the room (in minutes). */
    endTime?: number;

    /** The duration for the room availability (in minutes, default = 60). */
    duration?: number;

    /** The list of groups (id) we want to find a room. */
    groups?: number[];

    /** The list of teachers (id) we want to find a room. */
    teachers?: number[];

    /** The location (id) where we want the room (can be a parent location). */
    location?: number;

    /** Optional parameter, by default the capacity is the sum of groups size. Use this parameter to add extra capacity. */
    capacity?: number;

    /** The room type (id) to search for. */
    roomType?: number;

    /** The room (id) to search for. Use this parameter to found availability for a specific room. Overwrites all other parameters (type, capacity, location). */
    room?: number;

    /** The list of devices (id) that the wanted room must have. */
    devices?: number[];

    /** The day of week (0 sunday, 1 monday, 2 tuesday, etc.) the recurrence will apply. Set to null if no recurrence is needed. */
    recurrence_day?: number;

    /** Boolean asking if the search should ignore possible group reservation conflict. */
    ignoreGroupConflict?: boolean;
}

export interface FilterAvailableRoomResponse {
    /** The starting date when the room is available for the requested groups. */
    weekIndex?: number;

    /** The starting date when the room is available for the requested groups. */
    startDate?: Date;

    /** The ending date when the room is available for the requested groups. */
    endDate?: Date;

    room?: Room;

    /** The group conflicts that will be generated if the reservation is created. */
    conflicts?: string[];
}

export interface FilterAllAvailableRooms {
    /** The starting date interval from where to find the room. */
    startDate?: Date;

    /** The ending date to find the room. */
    endDate?: Date;

    /** The list of groups (id) we want to find a room. */
    groups?: number[];

    /** The location id where we want the room (if parent location, also search in children locations). */
    location?: number;

    /** The room type id. */
    roomType?: number;

    /** The wanted minimum capacity (optional). Useful when we don't want the capacity to be calculated with groups size. */
    capacity?: number;
}

export interface AssignRoom {
    /** The id of the AssignRoom. */
    id: number;

    /** The id of the room that is assigned. */
    idRoom: number;

    /** The id of the reservation the room is assigned to. */
    idReservation: number;

    /** Boolean indicating if the room is online or not. */
    isBroadcastRoom: boolean;
}

export interface RoomType {
    /** The id of the RoomType. */
    id: number;

    /** The type of room. */
    type: string;
}

export interface School {
    /** The id of the school. */
    id: number;

    /** The name of the school. */
    name: string;
}

export interface AssignSchool {
    /** The id of the AssignSchool. */
    id: number;

    /** The id of the school. */
    idSchool: number;

    /** The id of the teacher assigned to a school. */
    idTeacher: number;
}

export interface Tag {
    /** The id of the tag. */
    id: number;

    /** The name of the tag. */
    name: string;
}

export interface AssignTeacher {
    /** The id of the AssignTeacher. */
    id: number;

    /** he id of the teacher assigned. */
    idTeacher: number;

    /** The id of the reservation the teacher is assigned to. */
    idReservation: number;
}

export interface TeacherUsedBy {
    /** A list of AssignTeacher that uses a teacher. */
    assignTeacher: AssignTeacher[];

    /** A list of AssignSchool that uses a teacher. */
    assignSchool: AssignSchool[];
}

export interface AuthViewModel {
    accessToken?: string;
}
