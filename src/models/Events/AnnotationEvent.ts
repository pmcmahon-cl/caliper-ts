/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper, { CaliperSettings } from '../../caliper';
import { IBookmarkAnnotation } from '../Entities/BookmarkAnnotation';
import { IDigitalResource } from '../Entities/DigitalResource';
import { IEntity } from '../Entities/Entity';
import { IHighlightAnnotation } from '../Entities/HighlightAnnotation';
import { ILtiSession } from '../Entities/LtiSession';
import { IMembership } from '../Entities/Membership';
import { IOrganization } from '../Entities/Organization';
import { IPerson } from '../Entities/Person';
import { ISession } from '../Entities/Session';
import { ISharedAnnotation } from '../Entities/SharedAnnotation';
import { ISoftwareApplication } from '../Entities/SoftwareApplication';
import { ITagAnnotation } from '../Entities/TagAnnotation';
import { CaliperAction } from './CaliperAction';
import { CaliperProfile } from './CaliperProfile';
import { IEvent } from './Event';
import { EventType } from './EventType';

export interface IAnnotationEvent extends IEvent {
	actor: IPerson | ISoftwareApplication | IOrganization;
	object: IDigitalResource;
	generated: IBookmarkAnnotation | IHighlightAnnotation | ISharedAnnotation | ITagAnnotation;
	action: CaliperAction;
}

export interface IAnnotationEventParams {
	actor: IPerson | ISoftwareApplication | IOrganization;
	object: IDigitalResource;
	generated: IBookmarkAnnotation | IHighlightAnnotation | ISharedAnnotation | ITagAnnotation;
	action?: CaliperAction;
	profile?: CaliperProfile;
	target?: IEntity;
	group?: IOrganization;
	membership?: IMembership;
	federatedSession?: ILtiSession;
	session?: ISession;
	referrer?: IEntity;
	extensions?: Record<string, any>;
}

export function AnnotationEvent(
	params: IAnnotationEventParams,
	settings?: CaliperSettings
): IAnnotationEvent {
	return {
		type: EventType.AnnotationEvent,
		action: CaliperAction.None,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as ISoftwareApplication,
		...params,
	};
}
