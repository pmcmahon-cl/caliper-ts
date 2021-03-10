/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IAgent } from './Agent';
import { EntityType } from './EntityType';

export interface ISoftwareApplication extends IAgent {
	id: string;
	version?: string;
}

export interface ISoftwareApplicationParams {
	id: string;
	version?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function SoftwareApplication(params: ISoftwareApplicationParams): ISoftwareApplication {
	return {
		type: EntityType.SoftwareApplication,
		...params,
	};
}
