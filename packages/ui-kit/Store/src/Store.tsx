/**
 * TODO: replace mocks, add chevron icon, add arrow icon
 */

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

import styles from './Store.module.scss';

type Props = {
  name: string;
  logo: string;
  description: string;
  onRedirectClick: (name: string) => void;
};

const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

export function Store({ name, logo, description, onRedirectClick }: Props) {
  const [isOpened, setOpen] = useState<boolean>(false);

  const toggleOpen = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    stopPropagation(e);
    setOpen(prev => !prev);
  }, []);
  const handleRedirect = useCallback(() => onRedirectClick(name), []);

  return (
    <div className={styles.wrapper}>
      <div role='link' className={styles.image} style={{ backgroundImage: `url(${logo})` }} onClick={handleRedirect}>
        <div className={clsx(styles.description, { [styles.descriptionOpened]: isOpened })} onClick={stopPropagation}>
          <div role='button' className={clsx(styles.icon, { [styles.iconOpened]: isOpened })} onClick={toggleOpen}>
            {isOpened ? 'down' : 'up'}
          </div>
          <div className={styles.descriptionText}>{description}</div>
        </div>
      </div>
      <div className={styles.footer}>
        <div>{name}</div>
        <div role='button' className={styles.button} onClick={handleRedirect}>
          ->
        </div>
      </div>
    </div>
  );
}

Store.defaultProps = {
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt ducimus earum neque quod sunt ullam unde! Amet dolorem doloribus esse illum incidunt maiores unde.`,
  name: 'Test',
  logo: 'https://via.placeholder.com/300/ACD8E6',
  onRedirectClick: () => console.log('redirect'),
};
