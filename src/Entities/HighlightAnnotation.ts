import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAnnotation } from './Annotation';
import { IDigitalResource } from './DigitalResource';
import { EntityType } from './EntityType';
import { IPerson } from './Person';
import { TextPositionSelector } from './TextPositionSelector';

export interface IHighlightAnnotation extends IAnnotation {
	id: string;
	selection?: TextPositionSelector;
	selectionText?: string;
}

interface IHighlightAnnotationParams {
	id: string;
	selection?: TextPositionSelector;
	selectionText?: string;
	annotator?: IPerson;
	annotated?: IDigitalResource;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function HighlightAnnotation(params: IHighlightAnnotationParams): IHighlightAnnotation {
	return {
		type: EntityType.HighlightAnnotation,
		...params
	};
}
