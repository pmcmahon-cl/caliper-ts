/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';

export interface ILearningObjective extends IEntity {
	id: string;
}

export interface ILearningObjectiveParams {
	id: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function LearningObjective(params: ILearningObjectiveParams): ILearningObjective {
	return {
		type: EntityType.LearningObjective,
		...params,
	};
}
