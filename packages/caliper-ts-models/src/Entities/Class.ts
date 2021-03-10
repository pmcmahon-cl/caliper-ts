/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { IGroup } from './Group';
import { IOrganization } from './Organization';
import { Status } from './Status';

export interface IClass extends IGroup {
	id: string;
	status?: Status;
}

export interface IClassParams {
	id: string;
	status?: Status;
	subOrganizationOf?: IOrganization;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Class(params: IClassParams): IClass {
	return {
		type: EntityType.Class,
		...params,
	};
}
