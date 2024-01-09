import React from 'react';

import { FilterButtons, FilterInput } from './components/index.js';
import { type FilterProps } from './filter.types.js';

export function Filter({ children, ...props }: FilterProps) {
  return (
    <div {...props} className="flex flex-col gap-3">
      {children}
    </div>
  );
}
Filter.Input = FilterInput;
Filter.Buttons = FilterButtons;
