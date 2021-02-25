import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAgent } from './Agent';
import { EntityType } from './EntityType';

export interface IOrganization extends IAgent {
	id: string;
	subOrganizationOf?: IOrganization;
	members?: IAgent[];
}

interface IOrganizationParams {
	id: string;
	subOrganizationOf?: IOrganization;
	members?: IAgent[];
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Organization(params: IOrganizationParams): IOrganization {
	return {
		type: EntityType.Organization,
		...params
	};
}
