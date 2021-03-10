/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper, { CaliperSettings } from '../caliper';
import { IAgent } from '../Entities/Agent';
import { IEntity } from '../Entities/Entity';
import { ILtiSession } from '../Entities/LtiSession';
import { IMembership } from '../Entities/Membership';
import { IOrganization } from '../Entities/Organization';
import { IPerson } from '../Entities/Person';
import { ISession } from '../Entities/Session';
import { ISoftwareApplication } from '../Entities/SoftwareApplication';
import { CaliperAction } from './CaliperAction';
import { CaliperProfile } from './CaliperProfile';
import { EventType } from './EventType';

export interface IEvent {
	actor: IAgent | IPerson | ISoftwareApplication | IOrganization;
	object: IEntity;
	action: CaliperAction;
	'@context': string[];
	id: string;
	type: EventType;
	eventTime: string;
	edApp: ISoftwareApplication;
	profile?: CaliperProfile;
	target?: IEntity;
	generated?: IEntity;
	group?: IOrganization;
	membership?: IMembership;
	federatedSession?: ILtiSession;
	session?: ISession;
	referrer?: IEntity;
	extensions?: Record<string, any>;
}

export interface IEventParams {
	actor: IAgent | IPerson | ISoftwareApplication | IOrganization;
	object: IEntity;
	action?: CaliperAction;
	'@context'?: string[];
	id?: string;
	type?: EventType;
	eventTime?: string;
	edApp?: ISoftwareApplication;
	profile?: CaliperProfile;
	target?: IEntity;
	generated?: IEntity;
	group?: IOrganization;
	membership?: IMembership;
	federatedSession?: ILtiSession;
	session?: ISession;
	referrer?: IEntity;
	extensions?: Record<string, any>;
}

export function Event(params: IEventParams, settings?: CaliperSettings): IEvent {
	return {
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		type: EventType.Event,
		action: CaliperAction.None,
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as ISoftwareApplication,
		...params,
	};
}
