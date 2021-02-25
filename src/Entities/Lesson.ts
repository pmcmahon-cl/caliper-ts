import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAgent } from './Agent';
import { IAssignableDigitalResource } from './AssignableDigitalResource';
import { IDomain } from './Domain';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { ILearningObjective } from './LearningObjective';

export interface ILesson extends IAssignableDigitalResource {
	id: string;
	domain?: IDomain;
	gradeLevel?: number;
	domainOrder?: number;
	lessonOrder?: number;
}

interface ILessonParams {
	id: string;
	domain?: IDomain;
	gradeLevel?: number;
	domainOrder?: number;
	lessonOrder?: number;
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

export function Lesson(params: ILessonParams): ILesson {
	return {
		type: EntityType.Lesson,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params
	};
}
