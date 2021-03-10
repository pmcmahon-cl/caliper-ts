/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { ICourseOffering } from './CourseOffering';
import { EntityType } from './EntityType';
import { IOrganization } from './Organization';

export interface ICourseSection extends ICourseOffering {
	id: string;
	category?: string;
}

export interface ICourseSectionParams {
	id: string;
	category?: string;
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

export function CourseSection(params: ICourseSectionParams): ICourseSection {
	return {
		type: EntityType.CourseSection,
		...params,
	};
}
