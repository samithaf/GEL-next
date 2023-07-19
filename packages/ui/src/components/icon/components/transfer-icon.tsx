import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function TransferIcon({ 'aria-label': ariaLabel = 'Transfer', copyrightYear = '2020', ...props }: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12,12 L16,12 L16,8 L24,16 L16,24 L16,20 L12,20 L12,12 Z M0,8 L8,0 L8,4 L12,4 L12,12 L8,12 L8,16 L0,8 Z"
      />
    </Icon>
  );
}