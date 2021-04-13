import { StyleRule } from '@vanilla-extract/css';

export type EnumVariant = Record<string | number, StyleRule>;
export type VariantTypes = EnumVariant;

export type VariantGroups = Record<string, VariantTypes>;
export type VariantSelection<Variants extends VariantGroups> = {
  [variantGroup in keyof Variants]?: keyof Variants[variantGroup];
};

export interface StitchesResult<Variants extends VariantGroups> {
  defaultClassName: string;
  variantClassNames: {
    [P in keyof Variants]: { [V in keyof Variants[keyof Variants]]: string };
  };
  defaultVariants?: VariantSelection<Variants>;
  compoundVariantsValues: Array<{
    className: string;
    variantOptions: Omit<CompoundVariant<Variants>, 'css'>;
  }>;
}

export type CompoundVariant<
  Variants extends VariantGroups
> = VariantSelection<Variants> & {
  css: StyleRule;
};

export type StitchesOptions<Variants extends VariantGroups> = StyleRule & {
  variants?: Variants;
  defaultVariants?: VariantSelection<Variants>;
  compoundVariants?: Array<CompoundVariant<Variants>>;
};
