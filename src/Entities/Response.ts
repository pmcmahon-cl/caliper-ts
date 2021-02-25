import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAttempt } from './Attempt';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';

export interface IResponse extends IEntity {
	id: string;
	attempt?: IAttempt;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
}

interface IResponseParams {
	id: string;
	attempt?: IAttempt;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Response(params: IResponseParams): IResponse {
	return {
		type: EntityType.Response,
		...params
	};
}
