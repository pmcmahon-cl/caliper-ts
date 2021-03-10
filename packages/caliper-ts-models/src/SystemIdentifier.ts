/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISoftwareApplication, SoftwareApplication } from './Entities/SoftwareApplication';
import { SystemIdentifierType } from './SystemIdentifierType';

export interface ISystemIdentifier {
	identifier: string;
	identifierType: SystemIdentifierType;
	type: string;
	source: ISoftwareApplication;
	extensions?: Record<string, any>;
}

export interface ISystemIdentifierParams {
	sourceUrl: string;
	identifier: string;
	identifierType: SystemIdentifierType;
	extensions?: Record<string, any>;
}

export function SystemIdentifier(params: ISystemIdentifierParams): ISystemIdentifier {
	const { sourceUrl, ...args } = params;
	const source = SoftwareApplication({ id: sourceUrl });

	return {
		type: 'SystemIdentifier',
		source,
		...args,
	};
}
