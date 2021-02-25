import Caliper from './Caliper';
import { ISoftwareApplication, SoftwareApplication } from './Entities/SoftwareApplication';
import { SystemIdentifierType } from './SystemIdentifierType';

export interface ISystemIdentifier {
	identifier: string;
	identifierType: SystemIdentifierType;
	type: string;
	source: ISoftwareApplication;
	extensions?: Record<string, any>;
}

interface ISystemIdentifierParams {
	sourceUrl: string;
	identifier: string;
	identifierType: SystemIdentifierType;
	extensions?: Record<string, any>;
}

export function SystemIdentifier(params: ISystemIdentifierParams): ISystemIdentifier {
	const source = SoftwareApplication({ id: params.sourceUrl });
	const args: any = { ...params };
	delete args.sourceUrl;

	return {
		type: 'SystemIdentifier',
		source,
		...args
	};
}
