import { clsx } from 'clsx';
import React from 'react';

import { Symbol } from '../../symbol.component.js';
import { type SymbolProps } from '../../symbol.types.js';

export const STGDragonLogo = ({
  'aria-label': ariaLabel = 'St.George',
  copyrightYear = '2023',
  viewBoxWidth = 54,
  viewBoxHeight = 38,
  className,
  ...props
}: SymbolProps) => (
  <Symbol
    className={clsx('h-[38px] w-[54px]', className)}
    aria-label={ariaLabel}
    copyrightYear={copyrightYear}
    viewBoxWidth={viewBoxWidth}
    viewBoxHeight={viewBoxHeight}
    {...props}
  >
    <path
      d="M30 29.3c1.4 2.2 3.8 3.8 6.3 4.1 4.4 0.6 8.5-1.6 12.9 0.1 2 0.7 3.8 2 4.8 3.7 -0.9-0.4-1.5-0.7-2.6-1 -1.9-0.6-3.5-0.4-5.5-0.1 -3.7 0.5-7.4 1.7-10.9 0C32.3 34.8 30.7 32.1 30 29.3"
      fill="#FFCD00"
    />
    <path
      d="M25.3 12.3c0.3 1.2 0 2.3-0.2 3.7 -0.2 1.2 0.2 2.4 1.3 2.7 0.9 0.3 3 0.2 4.4 1.5 0.4 0.4 0.6 0.5 0.7 1.2 0.1 0.4 0 0.9-0.1 1.2 -0.4 1.1-0.7 2-1.4 2.8 -1 1.1-2 2.1-3.3 2.6 -2.5 0.8-3.9-1.6-5.8-2.7 -0.9-0.5-1.8-0.8-2.6 0.1 -1.3 1.2-1.1 3.2-0.4 4.6 1.3 2.6 4.1 4.9 6 6.8 -3.4 0.9-6.9 1.8-10.3 0.8 -1.6-0.5-3.1-2.5-3.8-4C8.6 31 7.8 25 1.8 20.7c3 0.4 4.2 0.7 6.1-0.6 0.4-0.3 0.6-0.8 0.5-1.3 -0.3-2-2-3.1-3.1-4.5 0.8 0.3 1.6 0.5 2.5 0.6 1.3 0.2 2.4-0.1 3.5-0.8 3.5-2.1-0.5-6.9-0.5-6.9s3.7 2.7 6 2.3c0.8-0.2 1.3-0.4 1.7-1.1 1-1.7 1.9-3.5 2.7-5.3 -0.1 1.7-0.4 3.4 0.1 5 0.4 1.5 1.7 1.8 2.9 2.6C24.7 11 25.1 11.3 25.3 12.3"
      fill="#78BE20"
    />
    <path
      d="M5.4 15.8c0.8 0.5 1.7 1.1 2.4 1.8 0.8 0.8 1.9 2.8 0.5 4.4 -0.5 0.6-1.4 0.9-2.2 0.9 -1.2 0.1-2.8-0.4-3.7-1.1 0.2 0 3 0.5 4.3-0.1 0.4-0.2 0.9-0.8 0.6-2 -0.4-1.5-1.8-2.7-4.2-4.2 -0.3-0.2-0.5-0.5-0.6-0.9C2.5 14.6 3.9 15 5.4 15.8"
      fill="#004833"
    />
    <path
      d="M6.9 25.2c0.5 0.9 0.6 1.3 0.5 2.5 -0.1 0.7-0.6 1.1-1 1.4 0 0 0.4-1.5-0.2-2.6 -0.9-1.8-1.7-1.7-5.3-3.1C0.5 23.2 0 22.6 0 22.5c0-0.1 2.9 0.4 4.5 0.9C5.3 23.6 6.4 24.4 6.9 25.2"
      fill="#004833"
    />
    <path
      d="M18.9 14.4c-0.6 0.8-0.4 2.1 0.6 2.2 0.6 0 1.4-0.3 1.6-1 0.2-0.7-0.1-1.2-0.6-1.7C20.1 13.6 19.3 13.9 18.9 14.4"
      fill="#fff"
    />
    <path
      d="M8 16.3c0.8 0.8 2 0.9 2.9 0.3 1-0.7 1-2.4 0.7-3.4 -0.6-2.7-2.1-5.1-4.1-6.3 1 2.1 2.2 4.4 2.6 6.7 0.1 0.5 0.2 1.1 0 1.6 -0.5 1-2.4 0.4-3.3-0.1C7.2 15.5 8 16.3 8 16.3"
      fill="#004833"
    />
    <path
      d="M14.3 9.7C16 9.5 16 7.9 16.3 6.6c0.2-1.1 0.7-2.2 1.5-3.2 0.6-0.7 0.9-1 1.4-1.6C20.3 0.4 21.1 0 21.1 0s-2.5 3.9-3 5.9c-0.5 1.7 0.1 3.8-1.8 4.9 -1.6 0.9-3.2 0.1-4.4-0.8 -0.6-0.5-1-1.1-1.2-1.9C11.8 8.8 12.8 9.9 14.3 9.7"
      fill="#004833"
    />
    <path
      d="M20.9 9.2c0.7 0.8 1.6 1 2.5 1.6 0.8 0.6 1.3 1.1 1.6 2 0.4 1.3-0.2 2.6-0.2 4C25 19 26.5 19 28.5 19c1.2 0 3.3 1 3.1 2.8 -0.1 0.7-0.2 1.2-0.7 1.7 -0.5 0.4-1.1 0.6-1.6 0.2 1-0.3 1.3-0.7 1.4-1.7 0-0.6-0.3-1.1-0.5-1.3 -0.4-0.4-1-0.9-2.4-0.8 -1.1 0-2 0.1-3.1-0.7 -0.5-0.4-0.7-0.7-1-1.3 -0.7-1.4 0.2-3 0-4.5 -0.1-0.7-0.9-1.5-1.5-2 -1.1-0.7-2.2-1.1-2.9-2.3 -1-1.8-0.1-4 1-5.8C20.3 5.4 19.4 7.6 20.9 9.2"
      fill="#004833"
    />
    <path
      d="M21.6 16.1c0.6-0.8 0.3-1.8-0.6-2.2 -0.5-0.2-1.1-0.3-1.7-0.1 -0.2 0-0.6 0.1-0.8 0.5 0.2-0.1 0.6-0.2 0.9-0.2 0.5 0 0.6 0.2 0.6 0.2s-0.7 0.2-0.8 0.7c-0.2 0.5 0 1 0.4 1.2C20.2 16.8 21.1 16.7 21.6 16.1"
      fill="#004833"
    />
    <path
      d="M12.4 15.7c0.7-1 1.4-1.9 2.2-2.6 -0.1 0.8-0.5 1.6-0.8 2.4 -1.8 3.9-3.4 6.5-4 11.7 -0.6 4.9 0.6 7.4 1.3 8.5 0.3 0.4 0.1 1.2-0.3 1.7C10.3 38 9 37.2 9 37.2S8.8 36.6 8.6 36c-0.5-1.6-0.7-3.3-0.8-5C7.5 25.6 9.1 20.3 12.4 15.7"
      fill="#004833"
    />
    <path
      d="M24.2 22.8c1.8 1.4 3.7 2.1 5.6 2.9 -0.2 0.7-0.4 0.8-1 1.3 -1.3-0.4-2.7-1-3.7-1.9C23.9 24 23 23 22.5 21.4 23.2 21.8 23.6 22.4 24.2 22.8"
      fill="#004833"
    />
    <path
      d="M20.1 24.1c1.9 0.3 2.6 1.5 3.9 2.7 1 0.9 2.2 1.6 3.6 1.2 -0.2 1.1-1.6 1.4-2.8 1.2 -2-0.3-2.4-1.9-3.7-3.2 -0.9-0.9-2.5-0.8-3.5 0.4 -1.3 1.6 0 4.3 1 5.5 1.1 1.3 2.1 2.3 3.2 3.4 0 0 1.5 1.5 2.4 2.6 -3.1-1.6-5.2-3-7.4-5.7 -1-1.3-1.2-2.4-1.3-3.8 0-1.2 0.2-2.2 1-3.2C17.5 24.1 18.7 23.9 20.1 24.1"
      fill="#004833"
    />
    <path
      d="M28.4 21.7c-0.4 0.1-0.7 0.6-0.6 0.9 0.2 0.4 0.7 0.5 1.1 0.2 0.1-0.1 0.3-0.3 0.3-0.5 0-0.3-0.2-0.6-0.6-0.7C28.5 21.6 28.4 21.7 28.4 21.7"
      fill="#fff"
    />
    <path
      d="M28.7 21.3c0.2 0 0.5 0.1 0.6 0.3 0.3 0.2 0.2 0.7-0.1 0.9 -0.4 0.3-0.8 0.3-1.1 0 -0.2-0.3-0.2-0.7 0-1C28.3 21.4 28.5 21.3 28.7 21.3"
      fill="#004833"
    />
  </Symbol>
);