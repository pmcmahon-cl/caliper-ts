/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper, { CaliperSettings } from '../../caliper';
import { Entity } from '../Entities/Entity';
import { LtiSession } from '../Entities/LtiSession';
import { MediaObject } from '../Entities/MediaObject';
import { Membership } from '../Entities/Membership';
import { Organization } from '../Entities/Organization';
import { Person } from '../Entities/Person';
import { Session } from '../Entities/Session';
import { SoftwareApplication } from '../Entities/SoftwareApplication';
import { CaliperAction } from './CaliperAction';
import { CaliperProfile } from './CaliperProfile';
import { Event } from './Event';
import { EventType } from './EventType';

export interface MediaEvent extends Event {
	actor: Person | SoftwareApplication | Organization;
	object: MediaObject;
	action: CaliperAction;
}

export interface MediaEventParams {
	actor: Person | SoftwareApplication | Organization;
	object: MediaObject;
	action?: CaliperAction;
	profile?: CaliperProfile;
	target?: Entity;
	generated?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	session?: Session;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createMediaEvent(params: MediaEventParams, settings?: CaliperSettings): MediaEvent {
	return {
		type: EventType.MediaEvent,
		action: CaliperAction.None,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as ISoftwareApplication,
		...params,
	};
}
