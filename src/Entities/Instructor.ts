import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { EntityType } from './EntityType';
import { InstructorPermissions } from './InstructorPermissions';
import { IOrganization } from './Organization';
import { Role } from './Role';
import { Status } from './Status';
import { IUser } from './User';

export interface IInstructor extends IUser {
	id: string;
	permissions?: InstructorPermissions;
}

interface IInstructorParams {
	id: string;
	permissions?: InstructorPermissions;
	roles?: Role[];
	status?: Status;
	organizations?: IOrganization[];
	name?: string;
	firstName?: string;
	lastName?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Instructor(params: IInstructorParams): IInstructor {
	return {
		type: EntityType.Instructor,
		...params
	};
}
