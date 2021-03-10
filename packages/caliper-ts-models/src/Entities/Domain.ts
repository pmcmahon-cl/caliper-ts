/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';

export interface IDomain extends IEntity {
	standard: string;
	code: string;
	name: string;
}

export interface IDomainParams {
	standard: string;
	code: string;
	name: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Domain(params: IDomainParams): IDomain {
	return {
		id: `urn:domain:${params.standard.toLocaleUpperCase()}${params.code.toLocaleUpperCase()}`,
		type: EntityType.Domain,
		...params,
	};
}
