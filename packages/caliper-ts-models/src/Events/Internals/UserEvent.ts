/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { IAgent } from '../../Entities/Agent';
import { EntityType } from '../../Entities/EntityType';
import { IInstructor } from '../../Entities/Instructor';
import { InstructorPermissions } from '../../Entities/InstructorPermissions';
import { ISoftwareApplication } from '../../Entities/SoftwareApplication';
import { Status } from '../../Entities/Status';
import { StudentProfileSettings } from '../../Entities/StudentProfileSettings';
import { IUser } from '../../Entities/User';
import { ISystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { IEvent } from '../Event';

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
	otherIdentifiers?: ISystemIdentifier[];
}

export interface IUserEventUserParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	otherIdentifiers?: ISystemIdentifier[];
	name?: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function UserEvent_User(params: IUserEventUserParams): IUserEventUser {
	return {
		type: EntityType.User,
		...params,
	};
}

export interface IUserEventInstructor extends IUserEventUser {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	otherIdentifiers?: ISystemIdentifier[];
	permissions?: InstructorPermissions;
}

export interface IUserEventInstructorParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	otherIdentifiers?: ISystemIdentifier[];
	permissions?: InstructorPermissions;
	name?: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function UserEvent_Instructor(params: IUserEventInstructorParams): IUserEventInstructor {
	return {
		type: EntityType.Instructor,
		...params,
	};
}

export interface IUserEventStudent extends IUserEventUser {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	gradeLevel: number;
	individualEducationPlan?: boolean;
	englishLanguageLearner?: boolean;
	otherIdentifiers?: ISystemIdentifier[];
	settings?: StudentProfileSettings;
}

export interface IUserEventStudentParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	gradeLevel: number;
	individualEducationPlan?: boolean;
	englishLanguageLearner?: boolean;
	otherIdentifiers?: ISystemIdentifier[];
	settings?: StudentProfileSettings;
	name?: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function UserEvent_Student(params: IUserEventStudentParams): IUserEventStudent {
	return {
		type: EntityType.Student,
		...params,
	};
}
