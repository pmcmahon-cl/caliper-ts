import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAgent } from './Agent';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { ILearningObjective } from './LearningObjective';
import { IMediaObject } from './MediaObject';

export interface IAudioObject extends IMediaObject {
	id: string;
	volumeMin?: string;
	volumeMax?: string;
	volumeLevel?: string;
	muted?: Boolean;
}

interface IAudioObjectParams {
	id: string;
	volumeMin?: string;
	volumeMax?: string;
	volumeLevel?: string;
	muted?: Boolean;
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

export function AudioObject(params: IAudioObjectParams): IAudioObject {
	return {
		type: EntityType.AudioObject,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params
	};
}
