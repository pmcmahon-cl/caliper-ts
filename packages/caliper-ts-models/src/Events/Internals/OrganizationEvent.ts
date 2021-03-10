/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { IAgent } from '../../Entities/Agent';
import { IDistrict } from '../../Entities/District';
import { EntityType } from '../../Entities/EntityType';
import { IInstructor } from '../../Entities/Instructor';
import { IOrganization } from '../../Entities/Organization';
import { ISchool } from '../../Entities/School';
import { ISoftwareApplication } from '../../Entities/SoftwareApplication';
import { Status } from '../../Entities/Status';
import { IUser } from '../../Entities/User';
import { ISystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { IEvent } from '../Event';

export interface IOrganizationEvent extends IEvent {
	actor: IAgent | ISoftwareApplication | IUser | IInstructor;
	object: IOrganizationEventOrganization | IOrganizationEventDistrict | IOrganizationEventSchool;
	action: CaliperAction;
}

export interface IOrganizationEventOrganization extends IOrganization {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	state: string;
	timezone: string;
	subOrganizationOf?: IOrganization | IDistrict | ISchool;
	otherIdentifiers?: ISystemIdentifier[];
}

export interface IOrganizationEventOrganizationParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	state: string;
	timezone: string;
	subOrganizationOf?: IOrganization | IDistrict | ISchool;
	otherIdentifiers?: ISystemIdentifier[];
	description?: string;
	extensions?: Record<string, any>;
}

export function OrganizationEvent_Organization(
	params: IOrganizationEventOrganizationParams
): IOrganizationEventOrganization {
	return {
		type: EntityType.Organization,
		...params,
	};
}

export interface IOrganizationEventDistrict extends IOrganizationEventOrganization {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	state: string;
	timezone: string;
	subOrganizationOf?: IOrganization | IDistrict | ISchool;
	otherIdentifiers?: ISystemIdentifier[];
}

export interface IOrganizationEventDistrictParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	state: string;
	timezone: string;
	subOrganizationOf?: IOrganization | IDistrict | ISchool;
	otherIdentifiers?: ISystemIdentifier[];
	description?: string;
	extensions?: Record<string, any>;
}

export function OrganizationEvent_District(
	params: IOrganizationEventDistrictParams
): IOrganizationEventDistrict {
	return {
		type: EntityType.District,
		...params,
	};
}

export interface IOrganizationEventSchool extends IOrganizationEventOrganization {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	state: string;
	timezone: string;
	subOrganizationOf?: IOrganization | IDistrict | ISchool;
	otherIdentifiers?: ISystemIdentifier[];
}

export interface IOrganizationEventSchoolParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	state: string;
	timezone: string;
	subOrganizationOf?: IOrganization | IDistrict | ISchool;
	otherIdentifiers?: ISystemIdentifier[];
	description?: string;
	extensions?: Record<string, any>;
}

export function OrganizationEvent_School(
	params: IOrganizationEventSchoolParams
): IOrganizationEventSchool {
	return {
		type: EntityType.School,
		...params,
	};
}
