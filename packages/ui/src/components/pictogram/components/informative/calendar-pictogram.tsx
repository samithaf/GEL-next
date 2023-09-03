import { clsx } from 'clsx';
import React from 'react';

import { Pictogram } from '../../pictogram.component.js';
import { fill } from '../../pictogram.styles.js';
import { type PictogramProps } from '../../pictogram.types.js';

export function CalendarPictogram({
  mode = 'duo',
  viewBoxWidth = 78,
  viewBoxHeight = 78,
  'aria-label': ariaLabel = 'Calendar',
  copyrightYear = '2023',
  className,
  ...props
}: PictogramProps) {
  return (
    <Pictogram
      className={clsx('h-13 w-13', className)}
      viewBoxWidth={viewBoxWidth}
      viewBoxHeight={viewBoxHeight}
      aria-label={ariaLabel}
      copyrightYear={copyrightYear}
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path
          className={fill({ mode, highlight: true })}
          d="M32.2896 38.1076L25.7016 38.1076C25.5346 38.1076 25.3996 37.9726 25.3996 37.8056L25.3996 31.3976C25.3996 31.2316 25.5346 31.0956 25.7016 31.0956L32.2896 31.0956C32.4566 31.0956 32.5916 31.2316 32.5916 31.3976L32.5916 37.8056C32.5916 37.9726 32.4566 38.1076 32.2896 38.1076M44.0454 38.1076L37.4574 38.1076C37.2904 38.1076 37.1554 37.9726 37.1554 37.8056L37.1554 31.3976C37.1554 31.2316 37.2904 31.0956 37.4574 31.0956L44.0454 31.0956C44.2124 31.0956 44.3474 31.2316 44.3474 31.3976L44.3474 37.8056C44.3474 37.9726 44.2124 38.1076 44.0454 38.1076M55.8013 38.1076L49.2133 38.1076C49.0473 38.1076 48.9113 37.9726 48.9113 37.8056L48.9113 31.3976C48.9113 31.2316 49.0473 31.0956 49.2133 31.0956L55.8013 31.0956C55.9683 31.0956 56.1033 31.2316 56.1033 31.3976L56.1033 37.8056C56.1033 37.9726 55.9683 38.1076 55.8013 38.1076M20.5332 49.5344L13.9452 49.5344C13.7792 49.5344 13.6432 49.3994 13.6432 49.2324L13.6432 42.8244C13.6432 42.6584 13.7792 42.5224 13.9452 42.5224L20.5332 42.5224C20.7002 42.5224 20.8352 42.6584 20.8352 42.8244L20.8352 49.2324C20.8352 49.3994 20.7002 49.5344 20.5332 49.5344M32.2896 49.5344L25.7016 49.5344C25.5346 49.5344 25.3996 49.3994 25.3996 49.2324L25.3996 42.8244C25.3996 42.6584 25.5346 42.5224 25.7016 42.5224L32.2896 42.5224C32.4566 42.5224 32.5916 42.6584 32.5916 42.8244L32.5916 49.2324C32.5916 49.3994 32.4566 49.5344 32.2896 49.5344M44.0454 49.5344L37.4574 49.5344C37.2904 49.5344 37.1554 49.3994 37.1554 49.2324L37.1554 42.8244C37.1554 42.6584 37.2904 42.5224 37.4574 42.5224L44.0454 42.5224C44.2124 42.5224 44.3474 42.6584 44.3474 42.8244L44.3474 49.2324C44.3474 49.3994 44.2124 49.5344 44.0454 49.5344M55.8013 49.5344L49.2133 49.5344C49.0473 49.5344 48.9113 49.3994 48.9113 49.2324L48.9113 42.8244C48.9113 42.6584 49.0473 42.5224 49.2133 42.5224L55.8013 42.5224C55.9683 42.5224 56.1033 42.6584 56.1033 42.8244L56.1033 49.2324C56.1033 49.3994 55.9683 49.5344 55.8013 49.5344M20.5332 60.6814L13.9452 60.6814C13.7792 60.6814 13.6432 60.5464 13.6432 60.3794L13.6432 53.9714C13.6432 53.8054 13.7792 53.6694 13.9452 53.6694L20.5332 53.6694C20.7002 53.6694 20.8352 53.8054 20.8352 53.9714L20.8352 60.3794C20.8352 60.5464 20.7002 60.6814 20.5332 60.6814M32.2896 60.6814L25.7016 60.6814C25.5346 60.6814 25.3996 60.5464 25.3996 60.3794L25.3996 53.9714C25.3996 53.8054 25.5346 53.6694 25.7016 53.6694L32.2896 53.6694C32.4566 53.6694 32.5916 53.8054 32.5916 53.9714L32.5916 60.3794C32.5916 60.5464 32.4566 60.6814 32.2896 60.6814"
        />
        <path
          className={fill({ mode, outline: true })}
          d="M61.1548,65.6721 L61.1548,65.6801 L12.0888,65.6801 C10.1098,65.6801 8.4998,64.0711 8.4998,62.0921 L8.4998,26.0971 L61.1548,26.0971 L61.1548,60.9291 C61.1798,64.3711 62.1378,65.6721 64.1338,65.6721 L61.1548,65.6721 Z M8.4998,16.7971 L12.8098,16.7971 L12.8098,19.0181 C12.8098,20.2631 13.8188,21.2731 15.0638,21.2731 C16.3098,21.2731 17.3188,20.2631 17.3188,19.0181 L17.3188,16.7971 L52.5078,16.7971 L52.5078,19.0181 C52.5078,20.2631 53.5168,21.2731 54.7618,21.2731 C56.0068,21.2731 57.0168,20.2631 57.0168,19.0181 L57.0168,16.7971 L61.1548,16.7971 L61.1548,23.5971 L8.4998,23.5971 L8.4998,16.7971 Z M63.6548,56.2941 L63.6548,14.2971 L57.0168,14.2971 L57.0168,12.2551 C57.0168,11.0091 56.0068,10.0001 54.7618,10.0001 C53.5168,10.0001 52.5078,11.0091 52.5078,12.2551 L52.5078,14.2971 L17.3188,14.2971 L17.3188,12.2551 C17.3188,11.0091 16.3098,10.0001 15.0638,10.0001 C13.8188,10.0001 12.8098,11.0091 12.8098,12.2551 L12.8098,14.2971 L5.9998,14.2971 L5.9998,62.0921 C5.9998,65.4491 8.7318,68.1801 12.0888,68.1801 L63.6548,68.1801 L63.6548,68.1701 L67.7998,68.1701 C70.6558,68.1701 72.9708,65.8551 72.9708,62.9991 L72.9708,56.2941 L63.6548,56.2941 Z"
        />
      </g>
    </Pictogram>
  );
}
