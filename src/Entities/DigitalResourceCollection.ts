import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAgent } from './Agent';
import { IDigitalResource } from './DigitalResource';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { ILearningObjective } from './LearningObjective';

export interface IDigitalResourceCollection extends IDigitalResource {
	id: string;
	items?: IDigitalResource[];
}

interface IDigitalResourceCollectionParams {
	id: string;
	items?: IDigitalResource[];
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

export function DigitalResourceCollection(params: IDigitalResourceCollectionParams): IDigitalResourceCollection {
	return {
		type: EntityType.DigitalResourceCollection,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params
	};
}
