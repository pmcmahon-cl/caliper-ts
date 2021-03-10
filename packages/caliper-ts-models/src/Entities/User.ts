/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { IPerson } from './Person';
import { Status } from './Status';

export interface IUser extends IPerson {
	id: string;
	status?: Status;
	firstName?: string;
	lastName?: string;
}

export interface IUserParams {
	id: string;
	status?: Status;
	firstName?: string;
	lastName?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function User(params: IUserParams): IUser {
	return {
		type: EntityType.User,
		...params,
	};
}
