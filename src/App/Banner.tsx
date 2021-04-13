import classNames from 'classnames';
import React, { ReactNode } from 'react';
import * as styles from './Banner.css';

interface BannerProps {
  children: ReactNode;
  variant?: keyof typeof styles.variants;
}

export function Banner({ children, variant = 'primary' }: BannerProps) {
  return (
    <div className={classNames(styles.banner, styles.variants[variant])}>
      {children}
    </div>
  );
}
