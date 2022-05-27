import { CacheEndpoint } from './endpoints/cache';
import { CourseEndpoint } from './endpoints/course';
import { CoursetypeEndpoint } from './endpoints/coursetype';
import { GroupEndpoint } from './endpoints/group';
import { LocationEndpoint } from './endpoints/location';
import { ReferentteacherEndpoint } from './endpoints/referentteacher';
import { ReservationEndpoint } from './endpoints/reservation';
import { RoomEndpoint } from './endpoints/room';
import { RoomtypeEndpoint } from './endpoints/roomtype';
import { SchoolEndpoint } from './endpoints/school';
import { TagEndpoint } from './endpoints/tag';
import { TeacherEndpoint } from './endpoints/teacher';

import * as types from './types';

class Zeus {
    public readonly Cache: CacheEndpoint;
    public readonly course: CourseEndpoint;
    public readonly coursetype: CoursetypeEndpoint;
    public readonly group: GroupEndpoint;
    public readonly location: LocationEndpoint;
    public readonly referentteacher: ReferentteacherEndpoint;
    public readonly reservation: ReservationEndpoint;
    public readonly room: RoomEndpoint;
    public readonly roomtype: RoomtypeEndpoint;
    public readonly School: SchoolEndpoint;
    public readonly tag: TagEndpoint;
    public readonly teacher: TeacherEndpoint;

    constructor(accessToken: string) {
        this.Cache           = new CacheEndpoint(accessToken);
        this.course          = new CourseEndpoint(accessToken);
        this.coursetype      = new CoursetypeEndpoint(accessToken);
        this.group           = new GroupEndpoint(accessToken);
        this.location        = new LocationEndpoint(accessToken);
        this.referentteacher = new ReferentteacherEndpoint(accessToken);
        this.reservation     = new ReservationEndpoint(accessToken);
        this.room            = new RoomEndpoint(accessToken);
        this.roomtype        = new RoomtypeEndpoint(accessToken);
        this.School          = new SchoolEndpoint(accessToken);
        this.tag             = new TagEndpoint(accessToken);
        this.teacher         = new TeacherEndpoint(accessToken);
    }
}

export { Zeus, types };
