/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { IOrganization } from './Organization';

export interface IGroup extends IOrganization {
	id: string;
}

export interface IGroupParams {
	id: string;
	subOrganizationOf?: IOrganization;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Group(params: IGroupParams): IGroup {
	return {
		type: EntityType.Group,
		...params,
	};
}
