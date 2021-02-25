import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAgent } from './Agent';
import { IAttempt } from './Attempt';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';

export interface IScore extends IEntity {
	id: string;
	attempt?: IAttempt;
	maxScore?: number;
	scoreGiven?: number;
	comment?: string;
	scoredBy?: IAgent;
}

interface IScoreParams {
	id: string;
	attempt?: IAttempt;
	maxScore?: number;
	scoreGiven?: number;
	comment?: string;
	scoredBy?: IAgent;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Score(params: IScoreParams): IScore {
	return {
		type: EntityType.Score,
		...params
	};
}
