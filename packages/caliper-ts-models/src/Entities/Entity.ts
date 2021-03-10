/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';

export interface IEntity {
	id: string;
	type: EntityType;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export interface IEntityParams {
	id: string;
	type?: EntityType;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Entity(params: IEntityParams): IEntity {
	return {
		type: EntityType.Entity,
		...params,
	};
}
