/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IDigitalResource } from './DigitalResource';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';

export interface IDocument extends IDigitalResource {
	id: string;
}

export interface IDocumentParams {
	id: string;
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

export function Document(params: IDocumentParams): IDocument {
	return {
		type: EntityType.Document,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
