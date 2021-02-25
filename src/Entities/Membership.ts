import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IClass } from './Class';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { IGroup } from './Group';
import { IInstructor } from './Instructor';
import { IOrganization } from './Organization';
import { IPerson } from './Person';
import { Role } from './Role';
import { ISchool } from './School';
import { Status } from './Status';
import { IStudent } from './Student';
import { IUser } from './User';

export interface IMembership extends IEntity {
	id: string;
	member?: IPerson | IUser | IInstructor | IStudent;
	organization?: IOrganization | ISchool | IGroup | IClass;
	roles?: Role[];
	status?: Status;
}

interface IMembershipParams {
	id: string;
	member?: IPerson | IUser | IInstructor | IStudent;
	organization?: IOrganization | ISchool | IGroup | IClass;
	roles?: Role[];
	status?: Status;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Membership(params: IMembershipParams): IMembership {
	return {
		type: EntityType.Membership,
		...params
	};
}
