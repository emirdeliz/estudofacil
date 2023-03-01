export enum ESThemeFontWeight {
  Regular = '100',
  Medium = '200',
  Semibold = '300',
  Bold = '800',
}

export interface ESThemeFontWeightDefinition {
  Regular: 'Regular';
  Medium: 'Medium';
  Semibold: 'Semibold';
  Bold: 'Bold';
}

export interface ESThemeFontWeightProps {
  'fw-1'?: boolean;
  'fw-2'?: boolean;
  'fw-3'?: boolean;
  'fw-4'?: boolean;
}

export const getFontWeight = ({
  'fw-1': fw1,
  'fw-2': fw2,
  'fw-3': fw3,
  'fw-4': fw4,
}: ESThemeFontWeightProps) => {
  switch (true) {
    case fw1:
      return ESThemeFontWeight.Regular;
    case fw2:
      return ESThemeFontWeight.Medium;
    case fw3:
      return ESThemeFontWeight.Semibold;
    case fw4:
      return ESThemeFontWeight.Bold;
    default:
      return ESThemeFontWeight.Regular;
  }
};
