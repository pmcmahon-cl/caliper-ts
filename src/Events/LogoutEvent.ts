import Caliper from './../Caliper';
import { IAgent } from './../Entities/Agent';
import { IDigitalResource } from './../Entities/DigitalResource';
import { IEntity } from './../Entities/Entity';
import { ILtiSession } from './../Entities/LtiSession';
import { IMembership } from './../Entities/Membership';
import { IOrganization } from './../Entities/Organization';
import { ISession } from './../Entities/Session';
import { ISoftwareApplication } from './../Entities/SoftwareApplication';
import { CaliperAction } from './CaliperAction';
import { CaliperProfile } from './CaliperProfile';
import { EventType } from './EventType';
import { ILoginEvent, ILoginEventUser, ILoginEventUserSession, ILoginEventInstructor, ILoginEventStudent } from './Internals/LoginEvent';

export interface ILogoutEvent extends ILoginEvent {
	actor: ILoginEventUser | ILoginEventInstructor | ILoginEventStudent;
	object: ISoftwareApplication;
	session: ILoginEventUserSession;
	target?: IDigitalResource;
	referrer?: IDigitalResource | ISoftwareApplication;
}

interface ILogoutEventParams {
	actor: ILoginEventUser | ILoginEventInstructor | ILoginEventStudent;
	object: ISoftwareApplication;
	session: ILoginEventUserSession;
	target?: IDigitalResource;
	referrer?: IDigitalResource | ISoftwareApplication;
	profile?: CaliperProfile;
	generated?: IEntity;
	group?: IOrganization;
	membership?: IMembership;
	federatedSession?: ILtiSession;
	extensions?: Record<string, any>;
}

export function LogoutEvent(params: ILogoutEventParams): ILogoutEvent {
	return {
		['@context']: ['http://edgenuity.com/events/logout/0-0-2', 'http://purl.imsglobal.org/ctx/caliper/v1p2'],
		action: CaliperAction.LoggedOut,
		type: EventType.SessionEvent,
		id: Caliper.guid(),
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(),
		...params
	};
}
