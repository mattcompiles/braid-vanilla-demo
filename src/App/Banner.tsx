import React, { ReactNode } from 'react';
import * as styles from './Banner.css';

interface BannerProps {
  children: ReactNode;
}

export function Banner({ children }: BannerProps) {
  return <div className={styles.banner}>{children}</div>;
}
