import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAgent } from './Agent';
import { IDigitalResource } from './DigitalResource';
import { IDigitalResourceCollection } from './DigitalResourceCollection';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { ILearningObjective } from './LearningObjective';
import { IMessage } from './Message';

export interface IThread extends IDigitalResourceCollection {
	id: string;
	items?: IMessage[];
}

interface IThreadParams {
	id: string;
	items?: IMessage[];
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

export function Thread(params: IThreadParams): IThread {
	return {
		type: EntityType.Thread,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params
	};
}
