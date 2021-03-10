/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IAgent } from './Agent';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { ILearningObjective } from './LearningObjective';

export interface IDigitalResource extends IEntity {
	id: string;
	learningObjectives?: ILearningObjective[];
	keywords?: string[];
	creators?: IAgent[];
	mediaType?: string;
	isPartOf?: IEntity;
	datePublished?: string;
	version?: string;
}

export interface IDigitalResourceParams {
	id: string;
	learningObjectives?: ILearningObjective[];
	keywords?: string[];
	creators?: IAgent[];
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

export function DigitalResource(params: IDigitalResourceParams): IDigitalResource {
	return {
		type: EntityType.DigitalResource,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
