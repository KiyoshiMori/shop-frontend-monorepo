import React from 'react';
import { Test } from '@ui-kit/test';

import styles from './Main.module.scss';

export function Main() {
  return (
    <div className={styles.wrapper}>
      <Test />
    </div>
  );
}
