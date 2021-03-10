/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { CredentialType } from '../../Entities/CredentialType';
import { IDigitalResource } from '../../Entities/DigitalResource';
import { EntityType } from '../../Entities/EntityType';
import { IInstructor } from '../../Entities/Instructor';
import { LoginType } from '../../Entities/LoginType';
import { IPerson } from '../../Entities/Person';
import { ISoftwareApplication } from '../../Entities/SoftwareApplication';
import { IStudent } from '../../Entities/Student';
import { IUser } from '../../Entities/User';
import { IUserSession } from '../../Entities/UserSession';
import { ISystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { ISessionEvent } from '../SessionEvent';

export interface ILoginEvent extends ISessionEvent {
	actor: IUser | IInstructor | IStudent;
	object: ISoftwareApplication;
	action: CaliperAction;
	session: ILoginEventUserSession;
	target?: IDigitalResource;
	referrer?: IDigitalResource | ISoftwareApplication;
}

export interface ILoginEventUserSession extends IUserSession {
	id: string;
	loginType: LoginType;
	credentials: CredentialType[];
	scopes: string[];
	userAgent: string;
	ipAddress: string;
	localTimestamp: string;
	user?: IPerson | IUser | IInstructor | IStudent;
}

export interface ILoginEventUserSessionParams {
	id: string;
	loginType: LoginType;
	credentials: CredentialType[];
	scopes: string[];
	userAgent: string;
	ipAddress: string;
	localTimestamp: string;
	user?: IPerson | IUser | IInstructor | IStudent;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function LoginEvent_UserSession(
	params: ILoginEventUserSessionParams
): ILoginEventUserSession {
	return {
		type: EntityType.UserSession,
		...params,
	};
}
