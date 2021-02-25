import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAgent } from './Agent';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { ILearningObjective } from './LearningObjective';
import { IMediaObject } from './MediaObject';

export interface IVideoObject extends IMediaObject {
	id: string;
}

interface IVideoObjectParams {
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

export function VideoObject(params: IVideoObjectParams): IVideoObject {
	return {
		type: EntityType.VideoObject,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params
	};
}
