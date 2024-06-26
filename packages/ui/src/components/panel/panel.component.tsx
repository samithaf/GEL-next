import React from 'react';

import { styles as panelStyles } from './panel.styles.js';
import { type PanelProps } from './panel.types.js';

export function Panel({ className, children, heading, headingTag: Tag = 'h1', look = 'hero', ...props }: PanelProps) {
  const styles = panelStyles({ look });
  return (
    <div className={styles.base({ className })} {...props}>
      {heading && <Tag className={styles.header()}>{heading}</Tag>}
      {children}
    </div>
  );
}
