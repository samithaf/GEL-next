import React, { Fragment } from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function PdfFileIcon({
  look = 'filled',
  'aria-label': ariaLabel = 'Pdf File',
  copyrightYear = '2023',
  ...props
}: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} {...props}>
      {look === 'filled' ? (
        <Fragment>
          <path
            d="M11.3163 7.45663C11.5945 7.45663 11.7527 8.17343 11.7658 8.8453C11.7789 9.51717 11.6254 9.98855 11.4344 10.3366C11.2763 9.82092 11.2002 9.00623 11.2002 8.4745C11.2002 8.4745 11.189 7.45663 11.3163 7.45663Z"
            fill="currentColor"
          />
          <path
            d="M10.2861 15.5063C10.08 15.9026 9.8779 16.2761 9.68432 16.6308C10.7487 16.2124 11.9581 15.8684 13.3577 15.5855C13.2613 15.5117 13.1701 15.4373 13.0848 15.3629C12.3977 14.7688 11.8117 14.0258 11.3419 13.1521C11.1057 13.7764 10.7881 14.5368 10.2861 15.5063Z"
            fill="currentColor"
          />
          <path
            d="M18.0168 16.6362C18.1736 16.6362 18.4171 16.6047 18.503 16.5504C18.5884 16.496 18.5811 16.2325 18.0857 16.1038C17.5934 15.9757 17.4399 15.9757 16.9449 15.9757H16.9295C16.6519 15.9757 16.3422 15.9891 16.0055 16.0146C16.8835 16.3988 17.5102 16.6362 18.0168 16.6362Z"
            fill="currentColor"
          />
          <path
            d="M7.55166 18.2441C6.62772 19.0166 6.00302 19.8889 5.84553 20.3301C6.2714 20.133 6.91776 19.5061 7.8837 17.9317C7.75311 18.0597 7.6094 18.1958 7.55166 18.2441Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 2C2 0.89543 2.89543 0 4 0H16L22 6V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V2ZM16 2L20 6H16V2ZM18.7721 15.6244C18.4932 15.3427 17.8711 15.1925 16.9268 15.1805C16.287 15.1731 15.518 15.2308 14.7089 15.3468C14.3466 15.1322 13.9726 14.9009 13.6806 14.6206C12.8912 13.8682 12.2337 12.8236 11.8235 11.6736C11.8504 11.5663 11.8721 11.4724 11.8938 11.3766C11.8938 11.3766 12.338 8.79769 12.2205 7.92533C12.2041 7.80665 12.1943 7.77178 12.1628 7.67791L12.1247 7.57733C12.0033 7.29235 11.7671 6.99061 11.395 7.00738L11.1772 7H11.1706C10.7572 7 10.4193 7.21658 10.3307 7.53911C10.061 8.55496 10.3392 10.073 10.8425 12.039L10.7139 12.3602C10.353 13.2587 9.90152 14.1633 9.50255 14.9619L9.45071 15.0658C9.03205 15.904 8.65014 16.6161 8.30498 17.2202L7.94866 17.4127C7.92307 17.4261 7.31345 17.7566 7.16975 17.8445C5.95446 18.5861 5.14995 19.4283 5.01674 20.0961C4.97343 20.3087 5.00493 20.5816 5.22148 20.7076L5.56598 20.8853C5.7156 20.9618 5.87309 21 6.03386 21C6.9007 21 7.90469 19.8983 9.28797 17.4301C10.8865 16.8984 12.7061 16.4565 14.3007 16.2131C15.516 16.9124 17.0102 17.3979 17.9531 17.3979C18.1211 17.3979 18.2655 17.3825 18.383 17.3496C18.5641 17.3014 18.7163 17.1961 18.8095 17.0526C18.9926 16.771 19.0293 16.3834 18.9801 15.9864C18.963 15.8698 18.8718 15.7243 18.7721 15.6244Z"
            fill="currentColor"
          />
        </Fragment>
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 2C2 0.89543 2.89543 0 4 0H16L22 6V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V2ZM4 2H16V6H20V22H4V2ZM18.0168 16.6362C18.1736 16.6362 18.4171 16.6047 18.503 16.5504C18.5884 16.496 18.5811 16.2325 18.0857 16.1038C17.5934 15.9757 17.4399 15.9757 16.9449 15.9757H16.9295C16.6519 15.9757 16.3422 15.9891 16.0055 16.0146C16.8835 16.3988 17.5102 16.6362 18.0168 16.6362ZM9.68432 16.6308C9.8779 16.2761 10.08 15.9026 10.2861 15.5063C10.7881 14.5368 11.1057 13.7764 11.3419 13.1521C11.8117 14.0258 12.3977 14.7688 13.0848 15.3629C13.1701 15.4373 13.2613 15.5117 13.3577 15.5855C11.9581 15.8684 10.7487 16.2124 9.68432 16.6308ZM11.7658 8.8453C11.7527 8.17343 11.5945 7.45663 11.3163 7.45663C11.189 7.45663 11.2002 8.4745 11.2002 8.4745C11.2002 9.00623 11.2763 9.82092 11.4344 10.3366C11.6254 9.98855 11.7789 9.51717 11.7658 8.8453ZM5.84553 20.3301C6.00302 19.8889 6.62772 19.0166 7.55166 18.2441C7.6094 18.1958 7.75311 18.0597 7.8837 17.9317C6.91776 19.5061 6.2714 20.133 5.84553 20.3301ZM16.9268 15.1805C17.8711 15.1925 18.4932 15.3427 18.7721 15.6244C18.8718 15.7243 18.963 15.8698 18.9801 15.9864C19.0293 16.3834 18.9926 16.771 18.8095 17.0526C18.7163 17.1961 18.5641 17.3014 18.383 17.3496C18.2655 17.3825 18.1211 17.3979 17.9531 17.3979C17.0102 17.3979 15.516 16.9124 14.3007 16.2131C12.7061 16.4565 10.8865 16.8984 9.28797 17.4301C7.90469 19.8983 6.9007 21 6.03386 21C5.87309 21 5.7156 20.9618 5.56598 20.8853L5.22148 20.7076C5.00493 20.5816 4.97343 20.3087 5.01674 20.0961C5.14995 19.4283 5.95446 18.5861 7.16975 17.8445C7.31345 17.7566 7.92307 17.4261 7.94866 17.4127L8.30498 17.2202C8.65014 16.6161 9.03205 15.904 9.45071 15.0658L9.50255 14.9619C9.90152 14.1633 10.353 13.2587 10.7139 12.3602L10.8425 12.039C10.3392 10.073 10.061 8.55496 10.3307 7.53911C10.4193 7.21658 10.7572 7 11.1706 7H11.1772L11.395 7.00738C11.7671 6.99061 12.0033 7.29235 12.1247 7.57733L12.1628 7.67791C12.1943 7.77178 12.2041 7.80665 12.2205 7.92533C12.338 8.79769 11.8938 11.3766 11.8938 11.3766C11.8721 11.4724 11.8504 11.5663 11.8235 11.6736C12.2337 12.8236 12.8912 13.8682 13.6806 14.6206C13.9726 14.9009 14.3466 15.1322 14.7089 15.3468C15.518 15.2308 16.287 15.1731 16.9268 15.1805Z"
          fill="currentColor"
        />
      )}
    </Icon>
  );
}
