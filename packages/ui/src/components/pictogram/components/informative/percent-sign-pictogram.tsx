'use client';

import { clsx } from 'clsx';
import React from 'react';

import { Pictogram } from '../../pictogram.component.js';
import { fill } from '../../pictogram.styles.js';
import { type PictogramProps } from '../../pictogram.types.js';

export function PercentSignPictogram({
  mode = 'duo',
  viewBoxWidth = 78,
  viewBoxHeight = 78,
  'aria-label': ariaLabel = 'Percent sign',
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
          className={fill({ mode, outline: true })}
          d="M37.7109,67.9121 C21.2969,67.9121 7.9429,54.5581 7.9429,38.1441 C7.9429,21.7301 21.2969,8.3771 37.7109,8.3771 C54.1239,8.3771 67.4779,21.7301 67.4779,38.1441 C67.4779,54.5581 54.1239,67.9121 37.7109,67.9121 M64.8799,20.7701 C59.1389,11.8221 49.1089,5.8751 37.7109,5.8751 C19.9189,5.8751 5.4429,20.3501 5.4429,38.1431 C5.4429,45.2761 7.7739,51.8731 11.7089,57.2211 C17.4489,66.1751 27.4819,72.1251 38.8849,72.1251 C56.6769,72.1251 71.1519,57.6501 71.1519,39.8581 C71.1519,32.7201 68.8179,26.1201 64.8799,20.7701"
        />
        <path
          className={fill({ mode, highlight: true })}
          d="M45.749,46.3555 C45.749,48.2365 45.966,49.4935 46.4,50.1245 C46.729,50.6115 47.183,50.8545 47.762,50.8545 C48.354,50.8545 48.808,50.6185 49.124,50.1445 C49.558,49.4995 49.774,48.2365 49.774,46.3555 C49.774,44.4745 49.564,43.2115 49.143,42.5665 C48.814,42.0935 48.354,41.8565 47.762,41.8565 C47.17,41.8565 46.716,42.0935 46.4,42.5665 C45.966,43.2115 45.749,44.4745 45.749,46.3555 L45.749,46.3555 Z M41.428,46.3755 C41.428,43.7835 41.997,41.8635 43.134,40.6135 C44.272,39.3635 45.828,38.7385 47.801,38.7385 C49.788,38.7385 51.35,39.3635 52.488,40.6135 C53.626,41.8635 54.195,43.7835 54.195,46.3755 C54.195,48.9805 53.626,50.9075 52.488,52.1575 C51.35,53.4065 49.808,54.0315 47.86,54.0315 C45.848,54.0315 44.272,53.4065 43.134,52.1575 C41.997,50.9075 41.428,48.9805 41.428,46.3755 L41.428,46.3755 Z M31.892,53.9725 L27.402,53.9725 L44.738,23.4455 L49.109,23.4455 L31.892,53.9725 Z M26.233,31.0425 C26.233,32.9235 26.45,34.1875 26.884,34.8315 C27.213,35.3055 27.667,35.5425 28.246,35.5425 C28.838,35.5425 29.298,35.3055 29.627,34.8315 C30.048,34.1875 30.259,32.9235 30.259,31.0425 C30.259,29.1615 30.048,27.9055 29.627,27.2735 C29.298,26.7875 28.838,26.5435 28.246,26.5435 C27.667,26.5435 27.213,26.7805 26.884,27.2535 C26.45,27.8985 26.233,29.1615 26.233,31.0425 L26.233,31.0425 Z M21.912,31.0825 C21.912,28.4905 22.48,26.5695 23.619,25.3205 C24.756,24.0705 26.299,23.4455 28.246,23.4455 C30.259,23.4455 31.834,24.0675 32.972,25.3105 C34.11,26.5535 34.679,28.4775 34.679,31.0825 C34.679,33.6735 34.11,35.5945 32.972,36.8445 C31.834,38.0945 30.291,38.7185 28.345,38.7185 C26.332,38.7185 24.756,38.0975 23.619,36.8545 C22.48,35.6105 21.912,33.6875 21.912,31.0825 L21.912,31.0825 Z"
        />
      </g>
    </Pictogram>
  );
}
