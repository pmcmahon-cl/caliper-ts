/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { IOrganization } from './Organization';
import { Status } from './Status';

export interface ISchool extends IOrganization {
	id: string;
	status?: Status;
}

export interface ISchoolParams {
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

export function School(params: ISchoolParams): ISchool {
	return {
		type: EntityType.School,
		...params,
	};
}
