/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper, { CaliperSettings } from '../caliper';
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

export interface IToolUseEvent extends IEvent {
	actor: IPerson | ISoftwareApplication | IOrganization;
	object: ISoftwareApplication;
}

export interface IToolUseEventParams {
	actor: IPerson | ISoftwareApplication | IOrganization;
	object: ISoftwareApplication;
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

export function ToolUseEvent(
	params: IToolUseEventParams,
	settings?: CaliperSettings
): IToolUseEvent {
	return {
		type: EventType.ToolUseEvent,
		action: CaliperAction.Used,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as ISoftwareApplication,
		...params,
	};
}
