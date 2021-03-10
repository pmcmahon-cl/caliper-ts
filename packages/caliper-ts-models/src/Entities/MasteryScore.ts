/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IAgent } from './Agent';
import { IAttempt } from './Attempt';
import { EntityType } from './EntityType';
import { LessonStatus } from './LessonStatus';
import { IScore } from './Score';

export interface IMasteryScore extends IScore {
	id: string;
	passThreshold?: number;
	lessonStatus?: LessonStatus;
}

export interface IMasteryScoreParams {
	id: string;
	passThreshold?: number;
	lessonStatus?: LessonStatus;
	attempt?: IAttempt;
	maxScore?: number;
	scoreGiven?: number;
	comment?: string;
	scoredBy?: IAgent;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function MasteryScore(params: IMasteryScoreParams): IMasteryScore {
	return {
		type: EntityType.MasteryScore,
		...params,
	};
}
