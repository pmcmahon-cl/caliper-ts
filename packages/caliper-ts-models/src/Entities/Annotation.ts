/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IDigitalResource } from './DigitalResource';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { IPerson } from './Person';

export interface IAnnotation extends IEntity {
	id: string;
	annotator?: IPerson;
	annotated?: IDigitalResource;
}

export interface IAnnotationParams {
	id: string;
	annotator?: IPerson;
	annotated?: IDigitalResource;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Annotation(params: IAnnotationParams): IAnnotation {
	return {
		type: EntityType.Annotation,
		...params,
	};
}
