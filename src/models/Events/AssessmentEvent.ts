/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper, { CaliperSettings } from '../../caliper';
import { IAssessment } from '../Entities/Assessment';
import { IAttempt } from '../Entities/Attempt';
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

export interface IAssessmentEvent extends IEvent {
	actor: IPerson | ISoftwareApplication | IOrganization;
	object: IAssessment;
	action: CaliperAction;
	generated: IAttempt;
}

export interface IAssessmentEventParams {
	actor: IPerson | ISoftwareApplication | IOrganization;
	object: IAssessment;
	action?: CaliperAction;
	generated: IAttempt;
	profile?: CaliperProfile;
	target?: IEntity;
	group?: IOrganization;
	membership?: IMembership;
	federatedSession?: ILtiSession;
	session?: ISession;
	referrer?: IEntity;
	extensions?: Record<string, any>;
}

export function AssessmentEvent(
	params: IAssessmentEventParams,
	settings?: CaliperSettings
): IAssessmentEvent {
	return {
		type: EventType.AssessmentEvent,
		action: CaliperAction.None,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as ISoftwareApplication,
		...params,
	};
}
