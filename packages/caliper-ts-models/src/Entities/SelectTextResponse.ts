/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IAttempt } from './Attempt';
import { EntityType } from './EntityType';
import { IResponse } from './Response';

export interface ISelectTextResponse extends IResponse {
	id: string;
	values?: string[];
}

export interface ISelectTextResponseParams {
	id: string;
	values?: string[];
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

export function SelectTextResponse(params: ISelectTextResponseParams): ISelectTextResponse {
	return {
		type: EntityType.SelectTextResponse,
		...params,
	};
}
