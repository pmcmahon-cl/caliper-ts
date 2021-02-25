import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { CredentialType } from './CredentialType';
import { EntityType } from './EntityType';
import { IInstructor } from './Instructor';
import { LoginType } from './LoginType';
import { IPerson } from './Person';
import { ISession } from './Session';
import { IStudent } from './Student';
import { IUser } from './User';

export interface IUserSession extends ISession {
	id: string;
	loginType?: LoginType;
	credentials?: CredentialType[];
	scopes?: string[];
	userAgent?: string;
	ipAddress?: string;
	localTimestamp?: string;
	user?: IPerson | IUser | IInstructor | IStudent;
}

interface IUserSessionParams {
	id: string;
	loginType?: LoginType;
	credentials?: CredentialType[];
	scopes?: string[];
	userAgent?: string;
	ipAddress?: string;
	localTimestamp?: string;
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

export function UserSession(params: IUserSessionParams): IUserSession {
	return {
		type: EntityType.UserSession,
		...params
	};
}
