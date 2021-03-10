/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IDigitalResourceCollection } from './DigitalResourceCollection';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { IThread } from './Thread';

export interface IForum extends IDigitalResourceCollection {
	id: string;
	items?: IThread[];
}

export interface IForumParams {
	id: string;
	items?: IThread[];
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

export function Forum(params: IForumParams): IForum {
	return {
		type: EntityType.Forum,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
