import React from 'react';
import isEqual from 'lodash/isEqual';
import { StitchesResult, VariantGroups, VariantSelection } from './types';

export const stitch = <Variants extends VariantGroups>({
  defaultClassName,
  variantClassNames,
  defaultVariants,
  compoundVariantsValues,
}: StitchesResult<Variants>) => ({
  children,
  ...variants
}: {
  children?: React.ReactNode;
} & VariantSelection<Variants>) => {
  const chosenVariants = { ...defaultVariants, ...variants };
  const variantGroups = Object.keys(chosenVariants ?? {}) as Array<
    keyof Variants
  >;

  const compoundClassName = compoundVariantsValues
    .filter((cp) => {
      const matcher = { ...chosenVariants, ...cp.variantOptions };

      return isEqual(chosenVariants, matcher);
    })
    .reduce((acc, cp) => `${acc} ${cp.className}`, defaultClassName);

  return (
    <div
      // @ts-expect-error
      className={variantGroups.reduce(
        (acc, variantGroup) =>
          `${acc} ${
            // @ts-expect-error
            variantClassNames[variantGroup][chosenVariants[variantGroup]]
          }`,
        compoundClassName,
      )}
    >
      {children}
    </div>
  );
};
