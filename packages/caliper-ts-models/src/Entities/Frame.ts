/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IDigitalResource } from './DigitalResource';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';

export interface IFrame extends IDigitalResource {
	id: string;
	index?: number;
}

export interface IFrameParams {
	id: string;
	index?: number;
	mediaType?: string;
	isPartOf?: IEntity;
	datePublished?: string;
	version?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Frame(params: IFrameParams): IFrame {
	return {
		type: EntityType.Frame,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
