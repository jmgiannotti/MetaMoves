export type StarRating = 1 | 2 | 3 | 4 | 5;

export type SkillCategory =
  | 'basic'
  | 'flicks'
  | 'spins'
  | 'juggles'
  | 'advanced'
  | 'meta';

export type Platform = 'ps' | 'xbox';
export type ControlScheme = 'classic' | 'alternative';

export type InputAction = 'flick' | 'hold' | 'rotate' | 'press' | 'tap';

export type StickDirection =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'up-left'
  | 'up-right'
  | 'down-left'
  | 'down-right';

export type ControlElement =
  | 'RS'
  | 'LS'
  | 'L1'
  | 'L2'
  | 'R1'
  | 'R2'
  | 'R3'
  | 'X'
  | 'Square'
  | 'Triangle'
  | 'Circle';

export interface LocalizedString {
  es: string;
  en: string;
}

export type InputTokenType = 'text' | 'button' | 'stick' | 'direction';

export interface InputToken {
  type: InputTokenType;
  value: string; // e.g. 'L1', 'RS', 'up', '+', 'o', 'luego'
  label?: LocalizedString; // for localized text if needed
}

export interface ControllerInputs {
  classic: InputToken[];
  alternative: InputToken[];
  note?: LocalizedString;
}

export type AnimationType =
  | 'lateral-shift'
  | 'forward-flick'
  | 'spin-360'
  | 'snap-back'
  | 'behind-leg'
  | 'chop'
  | 'nutmeg'
  | 'rainbow'
  | 'juggle'
  | 'drag-back';

export interface SkillMove {
  id: string;
  name: string;
  stars: StarRating;
  category: SkillCategory;
  isNew: boolean;
  description: LocalizedString;
  inputs: ControllerInputs;
  animationType: AnimationType;
}

export interface FilterState {
  stars: StarRating | null;
  search: string;
  newOnly: boolean;
}
