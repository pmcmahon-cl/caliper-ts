import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAgent } from './Agent';
import { EntityType } from './EntityType';
import { IOrganization } from './Organization';

export interface ICourseOffering extends IOrganization {
	id: string;
	courseNumber?: string;
	academicSession?: string;
}

interface ICourseOfferingParams {
	id: string;
	courseNumber?: string;
	academicSession?: string;
	subOrganizationOf?: IOrganization;
	members?: IAgent[];
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
		...params
	};
}
