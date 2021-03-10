/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IAttempt } from './Attempt';
import { EntityType } from './EntityType';
import { IResponse } from './Response';

export interface IFillInBlankResponse extends IResponse {
	id: string;
	values?: string[];
}

export interface IFillInBlankResponseParams {
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

export function FillInBlankResponse(params: IFillInBlankResponseParams): IFillInBlankResponse {
	return {
		type: EntityType.FillinBlankResponse,
		...params,
	};
}
