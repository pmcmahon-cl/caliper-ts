/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { IOrganization } from './Organization';

export interface ICourseOffering extends IOrganization {
	id: string;
	courseNumber?: string;
	academicSession?: string;
}

export interface ICourseOfferingParams {
	id: string;
	courseNumber?: string;
	academicSession?: string;
	subOrganizationOf?: IOrganization;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function CourseOffering(params: ICourseOfferingParams): ICourseOffering {
	return {
		type: EntityType.CourseOffering,
		...params,
	};
}
