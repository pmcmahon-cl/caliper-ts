import Caliper from './../Caliper';
import { Selector } from './Selector';
import { SelectorType } from './SelectorType';

export interface TextPositionSelector extends Selector {
	start: number;
	end: number;
}

interface ITextPositionSelectorParams {
	start: number;
	end: number;
}

export function TextPositionSelector(params: ITextPositionSelectorParams): TextPositionSelector {
	return {
		type: SelectorType.TextPositionSelector,
		...params
	};
}
