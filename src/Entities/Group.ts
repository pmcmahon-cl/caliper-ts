import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAgent } from './Agent';
import { EntityType } from './EntityType';
import { IOrganization } from './Organization';

export interface IGroup extends IOrganization {
	id: string;
}

interface IGroupParams {
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

export function Group(params: IGroupParams): IGroup {
	return {
		type: EntityType.Group,
		...params
	};
}
