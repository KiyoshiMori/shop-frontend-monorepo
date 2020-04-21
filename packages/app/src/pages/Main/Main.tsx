import React from 'react';
import { Store } from '@ui-kit/store';

import styles from './Main.module.scss';

export function Main() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>test</div>
      <div className={styles.storesWrapper}>
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
      </div>
    </div>
  );
}
