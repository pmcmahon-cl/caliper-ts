/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper, { CaliperSettings } from '../caliper';
import { IAgent } from '../Entities/Agent';
import { IDigitalResource } from '../Entities/DigitalResource';
import { IEntity } from '../Entities/Entity';
import { ILtiSession } from '../Entities/LtiSession';
import { IMembership } from '../Entities/Membership';
import { IOrganization } from '../Entities/Organization';
import { IPerson } from '../Entities/Person';
import { ISession } from '../Entities/Session';
import { ISoftwareApplication } from '../Entities/SoftwareApplication';
import { CaliperAction } from './CaliperAction';
import { CaliperProfile } from './CaliperProfile';
import { IEvent } from './Event';
import { EventType } from './EventType';

export interface ISessionEvent extends IEvent {
	actor: IAgent | IPerson | ISoftwareApplication;
	object: ISoftwareApplication | ISession;
	action: CaliperAction;
	target?: IDigitalResource;
	referrer?: IDigitalResource | ISoftwareApplication;
}

export interface ISessionEventParams {
	actor: IAgent | IPerson | ISoftwareApplication;
	object: ISoftwareApplication | ISession;
	action?: CaliperAction;
	target?: IDigitalResource;
	referrer?: IDigitalResource | ISoftwareApplication;
	profile?: CaliperProfile;
	generated?: IEntity;
	group?: IOrganization;
	membership?: IMembership;
	federatedSession?: ILtiSession;
	session?: ISession;
	extensions?: Record<string, any>;
}

export function SessionEvent(
	params: ISessionEventParams,
	settings?: CaliperSettings
): ISessionEvent {
	return {
		type: EventType.SessionEvent,
		action: CaliperAction.None,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as ISoftwareApplication,
		...params,
	};
}
