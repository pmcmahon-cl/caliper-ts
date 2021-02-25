import Caliper from './../../Caliper';
import { IAgent } from './../../Entities/Agent';
import { IEntity } from './../../Entities/Entity';
import { EntityType } from './../../Entities/EntityType';
import { IInstructor } from './../../Entities/Instructor';
import { InstructorPermissions } from './../../Entities/InstructorPermissions';
import { ILtiSession } from './../../Entities/LtiSession';
import { IMembership } from './../../Entities/Membership';
import { IOrganization } from './../../Entities/Organization';
import { Role } from './../../Entities/Role';
import { ISession } from './../../Entities/Session';
import { ISoftwareApplication } from './../../Entities/SoftwareApplication';
import { Status } from './../../Entities/Status';
import { StudentProfileSettings } from './../../Entities/StudentProfileSettings';
import { IUser } from './../../Entities/User';
import { ISystemIdentifier } from './../../SystemIdentifier';
import { CaliperAction } from './../CaliperAction';
import { CaliperProfile } from './../CaliperProfile';
import { IEvent } from './../Event';
import { EventType } from './../EventType';

export interface IUserEvent extends IEvent {
	actor: IAgent | ISoftwareApplication | IUser | IInstructor;
	object: IUserEventUser | IUserEventInstructor | IUserEventStudent;
	action: CaliperAction;
}

export interface IUserEventUser extends IUser {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	roles: Role[];
	organizations: IOrganization[];
	otherIdentifiers: ISystemIdentifier[];
}

interface IUserEventUserParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	roles: Role[];
	organizations: IOrganization[];
	otherIdentifiers: ISystemIdentifier[];
	name?: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function UserEvent_User(params: IUserEventUserParams): IUserEventUser {
	return {
		type: EntityType.Person,
		...params
	};
}

export interface IUserEventInstructor extends IUserEventUser {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	roles: Role[];
	organizations: IOrganization[];
	otherIdentifiers: ISystemIdentifier[];
	permissions: InstructorPermissions;
}

interface IUserEventInstructorParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	roles: Role[];
	organizations: IOrganization[];
	otherIdentifiers: ISystemIdentifier[];
	permissions: InstructorPermissions;
	name?: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function UserEvent_Instructor(params: IUserEventInstructorParams): IUserEventInstructor {
	return {
		type: EntityType.Instructor,
		...params
	};
}

export interface IUserEventStudent extends IUserEventUser {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	roles: Role[];
	organizations: IOrganization[];
	gradeLevel: number;
	otherIdentifiers: ISystemIdentifier[];
	settings: StudentProfileSettings;
}

interface IUserEventStudentParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	roles: Role[];
	organizations: IOrganization[];
	gradeLevel: number;
	otherIdentifiers: ISystemIdentifier[];
	settings: StudentProfileSettings;
	name?: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function UserEvent_Student(params: IUserEventStudentParams): IUserEventStudent {
	return {
		type: EntityType.Student,
		...params
	};
}
