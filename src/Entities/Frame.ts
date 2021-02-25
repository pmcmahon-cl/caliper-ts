import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAgent } from './Agent';
import { IDigitalResource } from './DigitalResource';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { ILearningObjective } from './LearningObjective';

export interface IFrame extends IDigitalResource {
	id: string;
	index?: number;
}

interface IFrameParams {
	id: string;
	index?: number;
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

export function Frame(params: IFrameParams): IFrame {
	return {
		type: EntityType.Frame,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params
	};
}
