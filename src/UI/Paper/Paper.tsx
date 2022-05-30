import React from 'react';
import styles from './Paper.module.css';

export function Paper({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.paper}>
      {children}
    </div>
  );
}
