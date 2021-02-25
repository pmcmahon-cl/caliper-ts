import Caliper from './../../Caliper';
import { IAgent } from './../../Entities/Agent';
import { IClass } from './../../Entities/Class';
import { IEntity } from './../../Entities/Entity';
import { EntityType } from './../../Entities/EntityType';
import { IGroup } from './../../Entities/Group';
import { IInstructor } from './../../Entities/Instructor';
import { ILtiSession } from './../../Entities/LtiSession';
import { IMembership } from './../../Entities/Membership';
import { IOrganization } from './../../Entities/Organization';
import { IPerson } from './../../Entities/Person';
import { Role } from './../../Entities/Role';
import { ISchool } from './../../Entities/School';
import { ISession } from './../../Entities/Session';
import { ISoftwareApplication } from './../../Entities/SoftwareApplication';
import { Status } from './../../Entities/Status';
import { IStudent } from './../../Entities/Student';
import { IUser } from './../../Entities/User';
import { ISystemIdentifier } from './../../SystemIdentifier';
import { CaliperAction } from './../CaliperAction';
import { CaliperProfile } from './../CaliperProfile';
import { IEvent } from './../Event';
import { EventType } from './../EventType';

export interface IMembershipEvent extends IEvent {
	actor: IAgent | ISoftwareApplication | IUser | IInstructor;
	object: IMembershipEventMembership;
	action: CaliperAction;
}

export interface IMembershipEventMembership extends IMembership {
	id: string;
	member: IUser | IInstructor | IStudent;
	organization: IMembershipEventOrganization | IMembershipEventSchool | IMembershipEventGroup | IMembershipEventClass;
	dateCreated: string;
	dateModified: string;
	roles: Role[];
}

interface IMembershipEventMembershipParams {
	id: string;
	member: IUser | IInstructor | IStudent;
	organization: IMembershipEventOrganization | IMembershipEventSchool | IMembershipEventGroup | IMembershipEventClass;
	dateCreated: string;
	dateModified: string;
	roles: Role[];
	status?: Status;
	name?: string;
	description?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function MembershipEvent_Membership(params: IMembershipEventMembershipParams): IMembershipEventMembership {
	return {
		type: EntityType.Membership,
		...params
	};
}

export interface IMembershipEventOrganization extends IOrganization {
	id: string;
	name: string;
	subOrganizationOf: IOrganization | ISchool | IGroup | IClass;
}

interface IMembershipEventOrganizationParams {
	id: string;
	name: string;
	subOrganizationOf: IOrganization | ISchool | IGroup | IClass;
	members?: IAgent[];
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function MembershipEvent_Organization(params: IMembershipEventOrganizationParams): IMembershipEventOrganization {
	return {
		type: EntityType.Organization,
		...params
	};
}

export interface IMembershipEventSchool extends ISchool {
	id: string;
	name: string;
	subOrganizationOf: IOrganization | ISchool | IGroup | IClass;
}

interface IMembershipEventSchoolParams {
	id: string;
	name: string;
	subOrganizationOf: IOrganization | ISchool | IGroup | IClass;
	status?: Status;
	members?: IAgent[];
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function MembershipEvent_School(params: IMembershipEventSchoolParams): IMembershipEventSchool {
	return {
		type: EntityType.School,
		...params
	};
}

export interface IMembershipEventGroup extends IGroup {
	id: string;
	name: string;
	subOrganizationOf: IOrganization | ISchool | IGroup | IClass;
}

interface IMembershipEventGroupParams {
	id: string;
	name: string;
	subOrganizationOf: IOrganization | ISchool | IGroup | IClass;
	members?: IAgent[];
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function MembershipEvent_Group(params: IMembershipEventGroupParams): IMembershipEventGroup {
	return {
		type: EntityType.Group,
		...params
	};
}

export interface IMembershipEventClass extends IClass {
	id: string;
	name: string;
	subOrganizationOf: ISchool | IOrganization | IGroup | IClass;
}

interface IMembershipEventClassParams {
	id: string;
	name: string;
	subOrganizationOf: ISchool | IOrganization | IGroup | IClass;
	status?: Status;
	members?: IAgent[];
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function MembershipEvent_Class(params: IMembershipEventClassParams): IMembershipEventClass {
	return {
		type: EntityType.Class,
		...params
	};
}
