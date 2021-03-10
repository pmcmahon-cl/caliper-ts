/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IDigitalResource } from './DigitalResource';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { IInstructor } from './Instructor';
import { IPerson } from './Person';
import { IStudent } from './Student';
import { IUser } from './User';

export interface IAttempt extends IEntity {
	id: string;
	assignable?: IDigitalResource;
	assignee?: IPerson | IUser | IInstructor | IStudent;
	count?: number;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
	isPartOf?: IAttempt;
}

export interface IAttemptParams {
	id: string;
	assignable?: IDigitalResource;
	assignee?: IPerson | IUser | IInstructor | IStudent;
	count?: number;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
	isPartOf?: IAttempt;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Attempt(params: IAttemptParams): IAttempt {
	return {
		type: EntityType.Attempt,
		...params,
	};
}
