/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { IInstructor } from './Instructor';
import { IPerson } from './Person';
import { IStudent } from './Student';
import { IUser } from './User';

export interface ISession extends IEntity {
	id: string;
	user?: IPerson | IUser | IInstructor | IStudent;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
}

export interface ISessionParams {
	id: string;
	user?: IPerson | IUser | IInstructor | IStudent;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Session(params: ISessionParams): ISession {
	return {
		type: EntityType.Session,
		...params,
	};
}
