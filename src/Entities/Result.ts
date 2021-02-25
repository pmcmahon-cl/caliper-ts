import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAgent } from './Agent';
import { IAttempt } from './Attempt';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';

export interface IResult extends IEntity {
	id: string;
	attempt?: IAttempt;
	maxResultScore?: number;
	resultScore?: number;
	comment?: string;
	scoredBy?: IAgent;
}

interface IResultParams {
	id: string;
	attempt?: IAttempt;
	maxResultScore?: number;
	resultScore?: number;
	comment?: string;
	scoredBy?: IAgent;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Result(params: IResultParams): IResult {
	return {
		type: EntityType.Result,
		resultScore: 0,
		...params
	};
}
