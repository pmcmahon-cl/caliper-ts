import { DEFAULT_CONFIG, getJsonLdContext, JsonLdContextVersion } from '../../config/config';
import { EntityType } from '../entityType';
import { Organization } from './organization';

export type CourseOffering = {
	courseNumber?: string;
	academicSession?: string;
} & Organization;

export type CourseOfferingParams = Omit<CourseOffering, '@context' | 'type'>;

export function createCourseOffering(
	delegate: CourseOfferingParams,
	contextVersion: JsonLdContextVersion = JsonLdContextVersion.v1p1
): CourseOffering {
	return {
		'@context': getJsonLdContext(DEFAULT_CONFIG, contextVersion),
		type: EntityType.courseOffering,
		...delegate
	} as CourseOffering;
}
