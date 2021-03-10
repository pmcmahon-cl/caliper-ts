/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';

export interface IEducationStandard extends IEntity {
	id: string;
}

export interface IEducationStandardParams {
	id: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function EducationStandard(params: IEducationStandardParams): IEducationStandard {
	return {
		type: EntityType.EducationStandard,
		...params,
	};
}
