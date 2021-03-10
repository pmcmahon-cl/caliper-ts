/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IAgent } from './Agent';
import { EntityType } from './EntityType';

export interface IOrganization extends IAgent {
	id: string;
	subOrganizationOf?: IOrganization;
}

export interface IOrganizationParams {
	id: string;
	subOrganizationOf?: IOrganization;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Organization(params: IOrganizationParams): IOrganization {
	return {
		type: EntityType.Organization,
		...params,
	};
}
