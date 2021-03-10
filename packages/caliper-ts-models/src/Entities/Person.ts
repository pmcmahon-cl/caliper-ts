/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IAgent } from './Agent';
import { EntityType } from './EntityType';

export interface IPerson extends IAgent {
	id: string;
}

export interface IPersonParams {
	id: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Person(params: IPersonParams): IPerson {
	return {
		type: EntityType.Person,
		...params,
	};
}
