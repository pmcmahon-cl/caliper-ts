/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { InstructorPermissions } from './InstructorPermissions';
import { Status } from './Status';
import { IUser } from './User';

export interface IInstructor extends IUser {
	id: string;
	permissions?: InstructorPermissions;
}

export interface IInstructorParams {
	id: string;
	permissions?: InstructorPermissions;
	status?: Status;
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
		...params,
	};
}
