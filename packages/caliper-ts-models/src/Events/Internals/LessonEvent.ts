/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper, { CaliperSettings } from '../../caliper';
import { IAgent } from '../../Entities/Agent';
import { IAttempt } from '../../Entities/Attempt';
import { IDomain } from '../../Entities/Domain';
import { IEntity } from '../../Entities/Entity';
import { EntityType } from '../../Entities/EntityType';
import { IIndividualizedLearningPath } from '../../Entities/IndividualizedLearningPath';
import { ILesson } from '../../Entities/Lesson';
import { LessonStatus } from '../../Entities/LessonStatus';
import { ILtiSession } from '../../Entities/LtiSession';
import { IMasteryScore } from '../../Entities/MasteryScore';
import { IMembership } from '../../Entities/Membership';
import { IOrganization } from '../../Entities/Organization';
import { IPerson } from '../../Entities/Person';
import { ISession } from '../../Entities/Session';
import { ISoftwareApplication } from '../../Entities/SoftwareApplication';
import { IStudent } from '../../Entities/Student';
import { ISystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { CaliperProfile } from '../CaliperProfile';
import { IEvent } from '../Event';
import { EventType } from '../EventType';

export interface ILessonEvent extends IEvent {
	actor: IAgent | IPerson | ISoftwareApplication | IOrganization;
	object: ILessonEventLesson;
	action: CaliperAction;
}

export interface ILessonEventParams {
	actor: IAgent | IPerson | ISoftwareApplication | IOrganization;
	object: ILessonEventLesson;
	action?: CaliperAction;
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

export function LessonEvent(params: ILessonEventParams, settings?: CaliperSettings): ILessonEvent {
	return {
		type: EventType.LessonEvent,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		action: CaliperAction.None,
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as ISoftwareApplication,
		...params,
	};
}

export interface ILessonEventLesson extends ILesson {
	id: string;
	isPartOf: ILessonEventIndividualizedLearningPath;
}

export interface ILessonEventLessonParams {
	id: string;
	isPartOf: ILessonEventIndividualizedLearningPath;
	domain?: IDomain;
	gradeLevel?: number;
	domainOrder?: number;
	lessonOrder?: number;
	dateToActivate?: string;
	dateToShow?: string;
	dateToStartOn?: string;
	dateToSubmit?: string;
	maxAttempts?: number;
	maxSubmits?: number;
	maxScore?: number;
	mediaType?: string;
	datePublished?: string;
	version?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function LessonEvent_Lesson(params: ILessonEventLessonParams): ILessonEventLesson {
	return {
		type: EntityType.Lesson,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}

export interface ILessonEventIndividualizedLearningPath extends IIndividualizedLearningPath {
	id: string;
	student: IStudent;
	highestGradeLevel?: number;
	lowestPlacementGrade?: number;
}

export interface ILessonEventIndividualizedLearningPathParams {
	id: string;
	student: IStudent;
	highestGradeLevel?: number;
	lowestPlacementGrade?: number;
	state?: string;
	subject?: string;
	lessons?: ILesson[];
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function LessonEvent_IndividualizedLearningPath(
	params: ILessonEventIndividualizedLearningPathParams
): ILessonEventIndividualizedLearningPath {
	return {
		type: EntityType.ILP,
		...params,
	};
}

export interface ILessonEventMasteryScore extends IMasteryScore {
	id: string;
	maxScore: number;
	scoreGiven: number;
	passThreshold: number;
	lessonStatus: LessonStatus;
}

export interface ILessonEventMasteryScoreParams {
	id: string;
	maxScore: number;
	scoreGiven: number;
	passThreshold: number;
	lessonStatus: LessonStatus;
	attempt?: IAttempt;
	comment?: string;
	scoredBy?: IAgent;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function LessonEvent_MasteryScore(
	params: ILessonEventMasteryScoreParams
): ILessonEventMasteryScore {
	return {
		type: EntityType.MasteryScore,
		...params,
	};
}
