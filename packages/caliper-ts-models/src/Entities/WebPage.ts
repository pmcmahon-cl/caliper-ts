/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IDigitalResource } from './DigitalResource';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';

export interface IWebPage extends IDigitalResource {
	id: string;
}

export interface IWebPageParams {
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

export function WebPage(params: IWebPageParams): IWebPage {
	return {
		type: EntityType.WebPage,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
