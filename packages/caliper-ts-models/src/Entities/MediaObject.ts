/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IDigitalResource } from './DigitalResource';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';

export interface IMediaObject extends IDigitalResource {
	id: string;
	duration?: string;
}

export interface IMediaObjectParams {
	id: string;
	duration?: string;
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

export function MediaObject(params: IMediaObjectParams): IMediaObject {
	return {
		type: EntityType.MediaObject,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
