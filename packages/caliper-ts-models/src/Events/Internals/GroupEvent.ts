/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { IAgent } from '../../Entities/Agent';
import { EntityType } from '../../Entities/EntityType';
import { IGroup } from '../../Entities/Group';
import { IInstructor } from '../../Entities/Instructor';
import { IOrganization } from '../../Entities/Organization';
import { ISchool } from '../../Entities/School';
import { ISoftwareApplication } from '../../Entities/SoftwareApplication';
import { Status } from '../../Entities/Status';
import { IStudent } from '../../Entities/Student';
import { IUser } from '../../Entities/User';
import { ISystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { IEvent } from '../Event';

export interface IGroupEvent extends IEvent {
	actor: IAgent | ISoftwareApplication | IUser | IInstructor | IStudent;
	object: IGroupEventGroup | IGroupEventClass;
	action: CaliperAction;
}

export interface IGroupEventGroup extends IGroup {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	subjects: string[];
	subOrganizationOf: IOrganization | ISchool | IGroupEventGroup | IGroupEventClass;
	otherIdentifiers: ISystemIdentifier[];
}

export interface IGroupEventGroupParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	subjects: string[];
	subOrganizationOf: IOrganization | ISchool | IGroupEventGroup | IGroupEventClass;
	otherIdentifiers: ISystemIdentifier[];
	description?: string;
	extensions?: Record<string, any>;
}

export function GroupEvent_Group(params: IGroupEventGroupParams): IGroupEventGroup {
	return {
		type: EntityType.Group,
		...params,
	};
}

export interface IGroupEventClass extends IGroupEventGroup {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	subjects: string[];
	subOrganizationOf: IOrganization | ISchool | IGroupEventGroup | IGroupEventClass;
	otherIdentifiers: ISystemIdentifier[];
}

export interface IGroupEventClassParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	subjects: string[];
	subOrganizationOf: IOrganization | ISchool | IGroupEventGroup | IGroupEventClass;
	otherIdentifiers: ISystemIdentifier[];
	description?: string;
	extensions?: Record<string, any>;
}

export function GroupEvent_Class(params: IGroupEventClassParams): IGroupEventClass {
	return {
		type: EntityType.Class,
		...params,
	};
}
