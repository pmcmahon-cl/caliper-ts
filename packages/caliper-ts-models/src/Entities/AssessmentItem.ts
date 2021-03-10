/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IAssignableDigitalResource } from './AssignableDigitalResource';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';

export interface IAssessmentItem extends IAssignableDigitalResource {
	id: string;
	isTimeDependent?: boolean;
}

export interface IAssessmentItemParams {
	id: string;
	isTimeDependent?: boolean;
	dateToActivate?: string;
	dateToShow?: string;
	dateToStartOn?: string;
	dateToSubmit?: string;
	maxAttempts?: number;
	maxSubmits?: number;
	maxScore?: number;
	mediaType?: string;
	isPartOf?: IEntity;
	datePublished?: string;
	version?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function AssessmentItem(params: IAssessmentItemParams): IAssessmentItem {
	return {
		type: EntityType.AssessmentItem,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
