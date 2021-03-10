/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IAnnotation } from './Annotation';
import { IDigitalResource } from './DigitalResource';
import { EntityType } from './EntityType';
import { IPerson } from './Person';

export interface ITagAnnotation extends IAnnotation {
	id: string;
	tags?: string[];
}

export interface ITagAnnotationParams {
	id: string;
	tags?: string[];
	annotator?: IPerson;
	annotated?: IDigitalResource;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function TagAnnotation(params: ITagAnnotationParams): ITagAnnotation {
	return {
		type: EntityType.TagAnnotation,
		tags: [],
		...params,
	};
}
