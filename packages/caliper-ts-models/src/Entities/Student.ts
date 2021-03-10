/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { ISystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { Status } from './Status';
import { StudentProfileSettings } from './StudentProfileSettings';
import { IUser } from './User';

export interface IStudent extends IUser {
	id: string;
	gradeLevel?: number;
	individualEducationPlan?: boolean;
	englishLanguageLearner?: boolean;
	settings?: StudentProfileSettings;
}

export interface IStudentParams {
	id: string;
	gradeLevel?: number;
	individualEducationPlan?: boolean;
	englishLanguageLearner?: boolean;
	settings?: StudentProfileSettings;
	status?: Status;
	name?: string;
	firstName?: string;
	lastName?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function Student(params: IStudentParams): IStudent {
	return {
		type: EntityType.Student,
		...params,
	};
}
