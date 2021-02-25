import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';

export interface IAgent extends IEntity {
	id: string;
}

interface IAgentParams {
	id: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Agent(params: IAgentParams): IAgent {
	return {
		type: EntityType.Agent,
		...params
	};
}
