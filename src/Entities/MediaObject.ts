import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAgent } from './Agent';
import { IDigitalResource } from './DigitalResource';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { ILearningObjective } from './LearningObjective';

export interface IMediaObject extends IDigitalResource {
	id: string;
	duration?: string;
}

interface IMediaObjectParams {
	id: string;
	duration?: string;
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

export function MediaObject(params: IMediaObjectParams): IMediaObject {
	return {
		type: EntityType.MediaObject,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params
	};
}
