import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAgent } from './Agent';
import { IDigitalResource } from './DigitalResource';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { ILearningObjective } from './LearningObjective';

export interface IMediaLocation extends IDigitalResource {
	id: string;
	currentTime?: string;
}

interface IMediaLocationParams {
	id: string;
	currentTime?: string;
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

export function MediaLocation(params: IMediaLocationParams): IMediaLocation {
	return {
		type: EntityType.MediaLocation,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params
	};
}
