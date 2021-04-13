import mapValues from 'lodash/mapValues';
import { style, mapToStyles } from '@vanilla-extract/css';
import { StitchesOptions, StitchesResult, VariantGroups } from './types';

export default function createPattern<Variants extends VariantGroups>(
  options: StitchesOptions<Variants>,
): StitchesResult<Variants> {
  const { variants, defaultVariants, compoundVariants = [], ...rest } = options;

  const defaultClassName = style(rest);

  const variantClassNames = mapValues(variants, (variantGroup) =>
    mapToStyles(variantGroup),
  ) as StitchesResult<Variants>['variantClassNames'];

  const compoundVariantsValues = compoundVariants.map((cp) => {
    const { css, ...variantOptions } = cp;

    const className = style(css);

    return {
      className,
      variantOptions,
    };
  });

  return {
    defaultClassName,
    variantClassNames,
    defaultVariants,
    compoundVariantsValues,
  };
}
