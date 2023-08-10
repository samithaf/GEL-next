import React from 'react';

import { Icon } from '../icon.component.js';
import { type IconProps } from '../icon.types.js';

export function STGLogoIcon({
  'aria-label': ariaLabel = 'St.George',
  copyrightYear = '2023',
  viewBox = '0 0 170 51',
  ...props
}: IconProps) {
  return (
    <Icon aria-label={ariaLabel} copyrightYear={copyrightYear} viewBox={viewBox} {...props}>
      <path
        d="M165.952 32.2529C165.583 30.0189 164.705 28.8399 162.749 28.8399C160.198 28.8399 159.46 31.0109 159.404 32.2529H165.952ZM169.723 37.0319C168.588 40.8179 166.18 42.4329 162.861 42.4329C158.24 42.4329 155.378 38.9569 155.378 33.9899C155.378 29.1809 158.41 25.5189 162.861 25.5189C167.851 25.5189 170.263 30.1109 169.977 35.0459H159.404C159.516 37.8399 160.765 39.1109 163.005 39.1109C164.186 39.1109 165.201 38.5299 165.76 37.8299C166.129 37.3459 166.711 37.0319 167.368 37.0319H169.723ZM149.374 33.7803C149.374 31.1733 148.553 28.8453 145.944 28.8453C143.676 28.8453 142.684 31.0163 142.684 33.4083C142.684 35.7043 143.478 38.2173 145.944 38.2173C148.24 38.2173 149.374 36.0773 149.374 33.7803ZM150.666 27.1683C151.357 26.1363 152.24 25.5173 153.202 25.5173V40.9803C153.202 43.6183 152.352 48.0873 145.603 48.0873C142.712 48.0873 139.339 46.5973 139.141 42.9343H141.794C142.525 42.9343 143.167 43.3243 143.52 43.9063C144.079 44.8083 145.053 45.1373 146.143 45.1373C148.383 45.1373 149.403 43.4643 149.374 41.1663V39.0553H149.318C148.439 40.7323 146.682 41.5393 144.923 41.5393C140.529 41.5393 138.658 37.9143 138.658 33.5073C138.658 28.6563 141.512 25.5173 145.916 25.5173C147.826 25.5173 149.444 26.1083 150.666 27.1683ZM131.452 34.4204V41.9954H127.424V25.5154C127.424 25.5154 128.812 25.3124 130.232 27.5294C130.906 26.6874 132.673 25.5154 134.923 25.5154C137.641 25.5154 139.098 26.8494 139.098 26.8494C139.098 26.8494 138.547 27.6714 138.077 28.6224C137.62 29.5484 137.242 30.5504 137.242 30.5504C137.242 30.5504 136.247 29.6294 135.038 29.6294C133.829 29.6294 131.452 30.6534 131.452 34.4204ZM117.766 25.5186C122.387 25.5186 125.364 28.8696 125.364 33.9916C125.364 39.0806 122.387 42.4306 117.766 42.4306C113.174 42.4306 110.198 39.0806 110.198 33.9916C110.198 28.8696 113.174 25.5186 117.766 25.5186ZM117.766 39.1126C120.515 39.1126 121.338 36.5356 121.338 33.9916C121.338 31.4146 120.515 28.8386 117.766 28.8386C115.045 28.8386 114.223 31.4146 114.223 33.9916C114.223 36.5356 115.045 39.1126 117.766 39.1126ZM104.103 32.2529C103.734 30.0189 102.856 28.8399 100.899 28.8399C98.3479 28.8399 97.6099 31.0109 97.5539 32.2529H104.103ZM107.874 37.0319C106.74 40.8179 104.331 42.4329 101.013 42.4329C96.3909 42.4329 93.5279 38.9569 93.5279 33.9899C93.5279 29.1809 96.5609 25.5189 101.013 25.5189C106.002 25.5189 108.413 30.1109 108.127 35.0459H97.5539C97.6659 37.8399 98.9149 39.1109 101.154 39.1109C102.336 39.1109 103.352 38.5299 103.911 37.8299C104.279 37.3459 104.862 37.0319 105.519 37.0319H107.874ZM87.6624 33.7803C87.6624 31.1733 86.8424 28.8453 84.2324 28.8453C81.9654 28.8453 80.9724 31.0163 80.9724 33.4083C80.9724 35.7043 81.7664 38.2173 84.2324 38.2173C86.5294 38.2173 87.6624 36.0773 87.6624 33.7803ZM88.9554 27.1683C89.6464 26.1363 90.5294 25.5173 91.4904 25.5173V40.9803C91.4904 43.6183 90.6414 48.0873 83.8924 48.0873C81.0024 48.0873 77.6284 46.5973 77.4294 42.9343H80.0834C80.8164 42.9343 81.4574 43.3243 81.8084 43.9063C82.3674 44.8083 83.3414 45.1373 84.4324 45.1373C86.6724 45.1373 87.6914 43.4643 87.6624 41.1663V39.0553H87.6074C86.7284 40.7323 84.9704 41.5393 83.2134 41.5393C78.8184 41.5393 76.9474 37.9143 76.9474 33.5073C76.9474 28.6563 79.8024 25.5173 84.2054 25.5173C86.1154 25.5173 87.7344 26.1083 88.9554 27.1683ZM76.2786 40.2178C76.2786 41.4408 75.2826 42.4338 74.0506 42.4338C72.8236 42.4338 71.8266 41.4408 71.8266 40.2178C71.8266 38.9948 72.8236 38.0028 74.0506 38.0028C75.2826 38.0028 76.2786 38.9948 76.2786 40.2178ZM56.8763 30.6397C56.1053 30.6397 55.4383 30.2097 55.0983 29.5777C54.6473 28.7267 53.7083 28.4677 52.6233 28.4677C51.7153 28.4677 50.3833 28.6537 50.3833 29.9557C50.3833 31.5387 52.6503 31.7547 54.9473 32.3457C57.3013 32.9357 59.5973 33.8677 59.5973 36.8477C59.5973 41.0677 56.2513 42.4327 52.9063 42.4327C49.5043 42.4327 46.1883 41.0357 46.0163 36.7837H49.8443C49.8723 38.7077 51.3463 39.4847 52.9363 39.4847C54.0973 39.4847 55.5703 38.9877 55.5703 37.4357C55.5703 36.1007 53.8983 35.6367 51.0063 34.9527C48.6823 34.3947 46.3553 33.4937 46.3553 30.6697C46.3553 26.5737 49.5893 25.5187 52.7343 25.5187C55.9393 25.5187 58.8893 26.6987 59.1993 30.6397H56.8763ZM67.1038 25.9531H70.0528V26.8981C70.0528 28.0051 69.1508 28.9011 68.0398 28.9011H67.1038V36.8481C67.1038 38.3361 67.4448 38.7091 68.8048 38.7091C69.2308 38.7091 69.6268 38.6771 70.0528 38.5851V42.0281C69.3718 42.1531 68.4948 42.1831 67.6998 42.1831C65.2328 42.1831 63.0788 41.5621 63.0788 38.3651V28.9011H60.6398V27.9561C60.6398 26.8491 61.5418 25.9531 62.6528 25.9531H63.0788V21.1411H65.0898C66.2038 21.1411 67.1038 22.0401 67.1038 23.1441V25.9531Z"
        fill="#E30000"
      />
      <path
        d="M40.473 39.2979C42.295 42.2189 45.602 44.3369 48.91 44.8159C54.789 45.5609 60.397 42.7349 66.268 44.9109C69.025 45.9049 71.338 47.5469 72.797 49.9269C71.637 49.4059 70.815 49.0249 69.307 48.5469C66.736 47.7429 64.526 48.0179 61.949 48.4609C56.983 49.1709 52.01 50.7869 47.236 48.4709C43.569 46.7339 41.376 43.0769 40.473 39.2979Z"
        fill="#FFCD00"
      />
      <path
        d="M34.139 16.4717C34.49 18.0487 34.164 19.5247 33.906 21.4327C33.684 23.0757 34.207 24.6037 35.698 25.0757C36.93 25.4647 39.681 25.3707 41.625 27.0297C42.207 27.6097 42.385 27.7617 42.502 28.6397C42.577 29.1817 42.498 29.8047 42.385 30.2817C41.887 31.7267 41.393 33.0077 40.565 34.0387C39.239 35.5797 37.869 36.9157 36.106 37.4997C32.783 38.6027 30.799 35.3057 28.23 33.8567C27.082 33.2477 25.752 32.8117 24.67 33.9417C22.928 35.6177 23.201 38.2657 24.09 40.1687C25.887 43.6367 29.578 46.7797 32.174 49.3197C27.533 50.5307 22.895 51.7427 18.237 50.4367C16.084 49.8307 14.059 47.1187 13.125 45.0197C11.556 41.5867 10.516 33.4967 2.38098 27.8147C6.40998 28.3017 8.04098 28.7037 10.66 26.9577C11.237 26.5457 11.41 25.8297 11.369 25.1897C10.971 22.4657 8.73898 21.0117 7.18298 19.1137C8.28098 19.5157 9.39098 19.8017 10.618 19.9497C12.355 20.1577 13.871 19.7917 15.305 18.9417C20.037 16.1287 14.584 9.6547 14.584 9.6547C14.584 9.6547 19.578 13.2127 22.705 12.7247C23.768 12.4777 24.479 12.1647 25.045 11.2027C26.412 8.8867 27.652 6.5037 28.66 4.0807C28.508 6.3267 28.143 8.6427 28.74 10.7517C29.313 12.7577 31.067 13.1587 32.662 14.2747C33.321 14.7137 33.856 15.2007 34.139 16.4717Z"
        fill="#78BE20"
      />
      <path
        d="M25.5145 19.3711C24.7105 20.5051 24.9415 22.1431 26.3455 22.3051C27.1995 22.3421 28.2425 21.9171 28.5455 21.0201C28.8505 20.1301 28.4475 19.3551 27.7775 18.7671C27.0315 18.3021 26.0565 18.6031 25.5145 19.3711Z"
        fill="white"
      />
      <path
        d="M7.32448 21.2559C8.43548 21.8809 9.64348 22.7259 10.6015 23.7069C11.6705 24.8039 13.1115 27.5109 11.2795 29.5859C10.5745 30.3749 9.41848 30.7469 8.31448 30.7889C6.66048 30.8979 4.48248 30.2679 3.26648 29.3559C3.53348 29.3509 7.25248 30.0559 9.03348 29.1529C9.59748 28.8679 10.2585 28.1099 9.85248 26.5339C9.32448 24.4729 7.38148 22.9319 4.13548 20.8689C3.75548 20.6269 3.48848 20.1629 3.33048 19.6299C3.33048 19.6299 5.29948 20.1159 7.32448 21.2559ZM10.8411 21.8252C11.9761 22.8732 13.5221 23.0572 14.7771 22.2002C16.1121 21.2922 16.0691 19.0262 15.7811 17.7012C14.9831 14.0212 12.9801 10.8162 10.3101 9.2732C11.6351 12.1272 13.2521 15.1972 13.7771 18.2752C13.9001 18.9952 13.9941 19.8022 13.7181 20.3632C13.0601 21.7202 10.5081 20.8342 9.23008 20.1692C9.70708 20.7752 10.8411 21.8252 10.8411 21.8252ZM19.3192 12.9766C21.5922 12.7056 21.6292 10.5446 21.9462 8.8576C22.2342 7.3306 22.9262 5.8826 23.9842 4.5556C24.7582 3.5816 25.2022 3.2126 25.8792 2.3906C27.3972 0.5466 28.4312 -0.000400543 28.4312 -0.000400543C28.4312 -0.000400543 25.1192 5.2936 24.4202 7.9176C23.7952 10.2466 24.4982 12.9746 21.9382 14.4856C19.7442 15.6496 17.5802 14.6466 16.0652 13.3966C15.2292 12.6866 14.7542 11.9806 14.4712 10.8566C15.9182 11.8026 17.2542 13.2246 19.3192 12.9766ZM28.1165 12.3535C29.0725 13.3945 30.3245 13.7145 31.5175 14.5195C32.6155 15.2595 33.3165 16.0085 33.7005 17.1965C34.2015 18.8975 33.3685 20.7045 33.4745 22.5395C33.6425 25.5615 35.7435 25.4365 38.4825 25.5325C40.0665 25.5895 42.9295 26.9025 42.6135 29.2555C42.4845 30.2255 42.3375 30.8645 41.7065 31.5145C41.0475 32.0565 40.2385 32.2675 39.6055 31.7875C40.9335 31.3455 41.3735 30.8665 41.4885 29.5155C41.5545 28.7715 41.0785 28.0295 40.8105 27.7875C40.2695 27.2975 39.4935 26.6255 37.5435 26.6865C36.0355 26.7305 34.7825 26.7565 33.3775 25.7655C32.6645 25.2615 32.4025 24.8165 32.0125 24.0695C31.1275 22.1665 32.2735 19.9775 32.0545 18.0745C31.9515 17.1185 30.8775 16.0415 29.9705 15.4495C28.5215 14.5005 26.9765 14.0285 26.0665 12.3615C24.7675 9.9775 25.8785 6.9575 27.4515 4.5685C27.3905 7.2265 26.1815 10.2595 28.1165 12.3535ZM29.0731 21.6358C29.9311 20.6108 29.4971 19.2728 28.2911 18.7118C27.6431 18.3948 26.8161 18.3548 26.0521 18.5348C25.8211 18.5888 25.2401 18.6998 24.9711 19.2308C25.2561 19.1398 25.8131 18.9878 26.2391 18.9738C26.9081 18.9598 27.0861 19.2348 27.0861 19.2348C27.0861 19.2348 26.2061 19.4748 25.9561 20.2388C25.7461 20.8768 25.9971 21.5658 26.4731 21.8758C27.1721 22.5578 28.4351 22.4018 29.0731 21.6358ZM16.7093 21.0801C17.6453 19.7901 18.5983 18.5921 19.7033 17.5671C19.6213 18.6901 19.0843 19.7461 18.6483 20.7711C16.1563 25.9881 14.0843 29.5381 13.2933 36.4381C12.5353 43.0571 14.0543 46.3141 15.0743 47.8421C15.4203 48.3821 15.1473 49.4951 14.6153 50.1271C13.9053 50.9761 12.1703 49.9931 12.1703 49.9931C12.1703 49.9931 11.8553 49.1501 11.5633 48.3651C10.9453 46.1581 10.5583 43.9791 10.4593 41.5991C10.1393 34.3511 12.2093 27.2991 16.7093 21.0801ZM32.598 30.6113C35.027 32.4373 37.615 33.4523 40.195 34.4633C39.864 35.4573 39.62 35.5933 38.881 36.2723C37.094 35.7703 35.223 34.9663 33.941 33.7443C32.247 32.2203 30.989 30.9263 30.371 28.7163C31.262 29.1903 31.786 30.0043 32.598 30.6113ZM27.0526 32.3545C29.6246 32.7845 30.5976 34.3705 32.3086 35.9925C33.7016 37.1735 35.2516 38.0865 37.1666 37.6685C36.8476 39.2015 35.0706 39.5195 33.4536 39.2825C30.7856 38.8585 30.2226 36.7575 28.4626 34.9265C27.2786 33.6755 25.0836 33.8525 23.7846 35.4895C22.0356 37.6095 23.7796 41.1995 25.1936 42.9105C26.6746 44.7025 27.9606 45.9665 29.4556 47.4475C29.4556 47.4475 31.5426 49.4825 32.6936 50.9155C28.5156 48.7925 25.6706 46.9555 22.7306 43.2585C21.3306 41.4985 21.0546 39.9825 20.9686 38.1455C21.0356 36.4785 21.1956 35.2485 22.3296 33.8795C23.5606 32.3925 25.2086 32.0425 27.1856 32.3755"
        fill="#004833"
      />
      <path
        d="M38.2327 29.1084C37.6977 29.2864 37.2807 29.8694 37.3987 30.3774C37.6467 30.9594 38.3437 31.0674 38.9217 30.6514C39.1077 30.4754 39.2677 30.2004 39.3297 29.9614C39.3357 29.5184 39.0337 29.1764 38.5457 29.0054C38.4397 29.0384 38.3387 29.0734 38.2327 29.1084Z"
        fill="white"
      />
      <path
        d="M38.7523 28.582C39.0743 28.577 39.4003 28.734 39.6113 28.933C39.9513 29.249 39.8223 29.853 39.4513 30.199C38.9753 30.578 38.4333 30.65 37.9983 30.24C37.6953 29.895 37.6813 29.352 38.0333 28.904C38.2013 28.693 38.4153 28.586 38.7523 28.582ZM9.25418 33.8545C9.88118 35.0325 10.1292 35.6545 9.92018 37.1815C9.79318 38.1015 9.12518 38.6235 8.51718 39.0175C8.51718 39.0175 9.08018 37.0285 8.30418 35.4835C7.06318 33.0115 6.06218 33.1445 1.12518 31.2935C0.631177 31.1085 -0.00982339 30.3455 0.000176607 30.2265C0.0101766 30.1065 3.97318 30.7905 6.00018 31.3795C7.13518 31.7085 8.68518 32.7805 9.25418 33.8545Z"
        fill="#004833"
      />
    </Icon>
  );
}