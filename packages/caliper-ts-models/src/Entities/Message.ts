/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IDigitalResource } from './DigitalResource';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';

export interface IMessage extends IDigitalResource {
	id: string;
	replyTo?: IMessage;
	body?: string;
	attachments?: IDigitalResource[];
}

export interface IMessageParams {
	id: string;
	replyTo?: IMessage;
	body?: string;
	attachments?: IDigitalResource[];
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

export function Message(params: IMessageParams): IMessage {
	return {
		type: EntityType.Message,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
