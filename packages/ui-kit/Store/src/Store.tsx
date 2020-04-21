import React from 'react';

import styles from './Store.module.scss';

export function Store() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.description} />
      <div className={styles.footer} />
    </div>
  );
}
