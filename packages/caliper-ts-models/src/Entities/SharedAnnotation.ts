/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IAgent } from './Agent';
import { IAnnotation } from './Annotation';
import { IDigitalResource } from './DigitalResource';
import { EntityType } from './EntityType';
import { IPerson } from './Person';

export interface ISharedAnnotation extends IAnnotation {
	id: string;
	withAgents?: IAgent[];
}

export interface ISharedAnnotationParams {
	id: string;
	withAgents?: IAgent[];
	annotator?: IPerson;
	annotated?: IDigitalResource;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function SharedAnnotation(params: ISharedAnnotationParams): ISharedAnnotation {
	return {
		type: EntityType.SharedAnnotation,
		withAgents: [],
		...params,
	};
}
