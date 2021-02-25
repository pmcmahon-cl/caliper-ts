import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { ILesson } from './Lesson';
import { IStudent } from './Student';

export interface IIndividualizedLearningPath extends IEntity {
	id: string;
	state?: string;
	student?: IStudent;
	subject?: string;
	highestGradeLevel?: number;
	lowestPlacementGrade?: number;
	lessons?: ILesson[];
}

interface IIndividualizedLearningPathParams {
	id: string;
	state?: string;
	student?: IStudent;
	subject?: string;
	highestGradeLevel?: number;
	lowestPlacementGrade?: number;
	lessons?: ILesson[];
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function IndividualizedLearningPath(params: IIndividualizedLearningPathParams): IIndividualizedLearningPath {
	return {
		type: EntityType.ILP,
		...params
	};
}
