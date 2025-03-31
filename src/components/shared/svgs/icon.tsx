// import React, { SVGProps } from "react";
/* interface Iprop {
  stroke?: string;
} */

import { SVGProps } from "react";

export function ClockIcon({
  stroke = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>clock</title>
      <g id="Page-1" stroke={stroke} strokeWidth="1" fillRule="evenodd">
        <g id="Clock" transform="translate(70, 50)">
          <circle
            cx="186"
            cy="186"
            r="180"
            fill="none"
            stroke={stroke}
            strokeWidth="40"
          />
          <line
            x1="186"
            y1="60"
            x2="186"
            y2="200"
            stroke={stroke}
            strokeWidth="40"
            strokeLinecap="round"
          />
          <line
            x1="186"
            y1="186"
            x2="280"
            y2="270"
            stroke={stroke}
            strokeWidth="40"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
}

export function TasksIcon({
  stroke = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>tasks-all</title>
      <g id="Page-1" stroke={stroke} strokeWidth="1" fillRule="evenodd">
        <g id="Combined-Shape" transform="translate(70.530593, 46.125620)">
          <path d="M185.469407,39.207713 L356.136074,39.207713 L356.136074,81.8743797 L185.469407,81.8743797 L185.469407,39.207713 Z M185.469407,188.541046 L356.136074,188.541046 L356.136074,231.207713 L185.469407,231.207713 L185.469407,188.541046 Z M185.469407,337.87438 L356.136074,337.87438 L356.136074,380.541046 L185.469407,380.541046 L185.469407,337.87438 Z M119.285384,-7.10542736e-15 L144.649352,19.5107443 L68.6167605,118.353113 L2.84217094e-14,58.3134476 L21.0721475,34.2309934 L64.0400737,71.8050464 L119.285384,-7.10542736e-15 Z M119.285384,149.333333 L144.649352,168.844078 L68.6167605,267.686446 L2.84217094e-14,207.646781 L21.0721475,183.564327 L64.0400737,221.13838 L119.285384,149.333333 Z M119.285384,298.666667 L144.649352,318.177411 L68.6167605,417.01978 L2.84217094e-14,356.980114 L21.0721475,332.89766 L64.0400737,370.471713 L119.285384,298.666667 Z"></path>
        </g>
      </g>
    </svg>
  );
}

export const SettingsIcon = ({
  fill = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 600 600"
      width="24px"
      height="24px"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M 447.70881 -12.781343 A 42.041451 42.041451 0 0 0 405.66786 29.260344 L 405.66786 50.301721 L 27.434765 50.301721 A 42.041302 42.041302 0 0 0 -14.606185 92.341354 A 42.041302 42.041302 0 0 0 27.434765 134.38304 L 405.66786 134.38304 L 405.66786 155.44906 A 42.041451 42.041451 0 0 0 447.70881 197.49075 A 42.041451 42.041451 0 0 0 489.74976 155.44906 L 489.74976 134.38304 L 573.78036 134.38304 A 42.041302 42.041302 0 0 0 615.82336 92.341354 A 42.041302 42.041302 0 0 0 573.78036 50.301721 L 489.74976 50.301721 L 489.74976 29.260344 A 42.041451 42.041451 0 0 0 447.70881 -12.781343 z M 143.0012 197.48869 A 42.041451 42.041451 0 0 0 100.9582 239.53038 L 100.9582 260.5697 L 27.447078 260.5697 A 42.041302 42.041302 0 0 0 -14.593872 302.61139 A 42.041302 42.041302 0 0 0 27.447078 344.65308 L 100.9582 344.65308 L 100.9582 365.7191 A 42.041451 42.041451 0 0 0 143.0012 407.76078 A 42.041451 42.041451 0 0 0 185.04215 365.7191 L 185.04215 344.65308 L 573.79472 344.65308 A 42.041302 42.041302 0 0 0 615.83567 302.61139 A 42.041302 42.041302 0 0 0 573.79472 260.5697 L 185.04215 260.5697 L 185.04215 239.53038 A 42.041451 42.041451 0 0 0 143.0012 197.48869 z M 279.59427 407.76078 A 42.041451 42.041451 0 0 0 237.55332 449.80042 L 237.55332 470.83974 L 27.447078 470.83974 A 42.041302 42.041302 0 0 0 -14.593872 512.88143 A 42.041302 42.041302 0 0 0 27.447078 554.92106 L 237.55332 554.92106 L 237.55332 575.98913 A 42.041451 42.041451 0 0 0 279.59427 618.02877 A 42.041451 42.041451 0 0 0 321.63522 575.98913 L 321.63522 554.92106 L 573.79472 554.92106 A 42.041302 42.041302 0 0 0 615.83567 512.88143 A 42.041302 42.041302 0 0 0 573.79472 470.83974 L 321.63522 470.83974 L 321.63522 449.80042 A 42.041451 42.041451 0 0 0 279.59427 407.76078 z" />
      </g>
    </svg>
  );
};

export const RestartIcon = ({
  stroke = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="-7.5 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      stroke={stroke}
      strokeWidth="0.352"
      transform="rotate(-45)"
      {...props}
    >
      <title>Restart</title>
      <path d="M15.88 13.84c-1.68-3.48-5.44-5.24-9.040-4.6l0.96-1.8c0.24-0.4 0.080-0.92-0.32-1.12-0.4-0.24-0.92-0.080-1.12 0.32l-1.96 3.64c0 0-0.44 0.72 0.24 1.040l3.64 1.96c0.12 0.080 0.28 0.12 0.4 0.12 0.28 0 0.6-0.16 0.72-0.44 0.24-0.4 0.080-0.92-0.32-1.12l-1.88-1.040c2.84-0.48 5.8 0.96 7.12 3.68 1.6 3.32 0.2 7.32-3.12 8.88-1.6 0.76-3.4 0.88-5.080 0.28s-3.040-1.8-3.8-3.4c-0.76-1.6-0.88-3.4-0.28-5.080 0.16-0.44-0.080-0.92-0.52-1.080-0.4-0.080-0.88 0.16-1.040 0.6-0.72 2.12-0.6 4.36 0.36 6.36s2.64 3.52 4.76 4.28c0.92 0.32 1.84 0.48 2.76 0.48 1.24 0 2.48-0.28 3.6-0.84 4.16-2 5.92-7 3.92-11.12z" />
    </svg>
  );
};

export const GlobeIcon = ({
  fill = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      // fill="none"
      width="24px"
      height="24px"
      fill={fill}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Globe Icon</title>
      <path d="M22.658 10.988h5.172c0.693 1.541 1.107 3.229 1.178 5.012h-5.934c-0.025-1.884-0.181-3.544-0.416-5.012zM20.398 3.896c2.967 1.153 5.402 3.335 6.928 6.090h-4.836c-0.549-2.805-1.383-4.799-2.092-6.090zM16.068 9.986v-6.996c1.066 0.047 2.102 0.216 3.092 0.493 0.75 1.263 1.719 3.372 2.33 6.503h-5.422zM9.489 22.014c-0.234-1.469-0.396-3.119-0.421-5.012h5.998v5.012h-5.577zM9.479 10.988h5.587v5.012h-6.004c0.025-1.886 0.183-3.543 0.417-5.012zM11.988 3.461c0.987-0.266 2.015-0.435 3.078-0.469v6.994h-5.422c0.615-3.148 1.591-5.265 2.344-6.525zM3.661 9.986c1.551-2.8 4.062-4.993 7.096-6.131-0.715 1.29-1.559 3.295-2.114 6.131h-4.982zM8.060 16h-6.060c0.066-1.781 0.467-3.474 1.158-5.012h5.316c-0.233 1.469-0.39 3.128-0.414 5.012zM8.487 22.014h-5.29c-0.694-1.543-1.139-3.224-1.204-5.012h6.071c0.024 1.893 0.188 3.541 0.423 5.012zM8.651 23.016c0.559 2.864 1.416 4.867 2.134 6.142-3.045-1.133-5.557-3.335-7.11-6.142h4.976zM15.066 23.016v6.994c-1.052-0.033-2.067-0.199-3.045-0.46-0.755-1.236-1.736-3.363-2.356-6.534h5.401zM21.471 23.016c-0.617 3.152-1.592 5.271-2.344 6.512-0.979 0.271-2.006 0.418-3.059 0.465v-6.977h5.403zM16.068 17.002h5.998c-0.023 1.893-0.188 3.542-0.422 5.012h-5.576v-5.012zM22.072 16h-6.004v-5.012h5.586c0.235 1.469 0.393 3.126 0.418 5.012zM23.070 17.002h5.926c-0.066 1.787-0.506 3.468-1.197 5.012h-5.152c0.234-1.471 0.398-3.119 0.423-5.012zM27.318 23.016c-1.521 2.766-3.967 4.949-6.947 6.1 0.715-1.276 1.561-3.266 2.113-6.1h4.834z" />
    </svg>
  );
};

export const ArrowRightIcon = ({
  stroke = "currentColor",
  fill = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width="104px"
    height="104px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g clipPath="url(#clip0_429_11254)">
        <path
          d="M10 17L15 12"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15 12L10 7"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_429_11254">
          <rect width="24" height="24" fill={fill}></rect>
        </clipPath>
      </defs>
    </g>
  </svg>
);

export const ClockBoldIcon = ({
  stroke = "currentColor",
  fill = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width="20px"
    height="20px"
    viewBox="-1.6 -1.6 19.20 19.20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke={stroke}
    strokeWidth="0.00016"
    transform="matrix(1, 0, 0, 1, 0, 0)"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#CCCCCC"
      strokeWidth="0.224"
    />
    <g id="SVGRepo_iconCarrier">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7 3V8.41421L10.2929 11.7071L11.7071 10.2929L9 7.58579V3H7Z"
        fill={fill}
      />
    </g>
  </svg>
);

export const NotificationIcon = ({
  fill = "currentColor",
  // fill = "none",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        fill={fill}
      ></path>
      <path
        d="M19.8 9.42C19.78 9.42 19.76 9.43 19.74 9.43C19.64 9.45 19.54 9.46 19.43 9.48C19.01 9.52 18.56 9.5 18.1 9.41C17.98 9.38 17.88 9.36 17.77 9.32C17.44 9.24 17.13 9.11 16.84 8.94C16.72 8.88 16.6 8.8 16.49 8.73C16.01 8.4 15.6 7.99 15.27 7.51C15.2 7.4 15.12 7.28 15.06 7.16C14.89 6.87 14.76 6.56 14.68 6.23C14.64 6.12 14.62 6.02 14.59 5.9C14.5 5.44 14.48 4.99 14.52 4.57C14.54 4.46 14.55 4.36 14.57 4.26C14.57 4.24 14.58 4.22 14.58 4.2C14.7 3.58 14.24 3 13.6 3H7.52C7.38 3 7.24 3.01 7.11 3.02C6.99 3.03 6.88 3.04 6.76 3.06C6.64 3.07 6.52 3.09 6.41 3.11C4 3.46 2.46 4.99 2.11 7.41C2.09 7.52 2.07 7.64 2.06 7.76C2.04 7.88 2.03 7.99 2.02 8.11C2.01 8.24 2 8.38 2 8.52V16.48C2 16.62 2.01 16.76 2.02 16.89C2.03 17.01 2.04 17.12 2.06 17.24C2.07 17.36 2.09 17.48 2.11 17.59C2.46 20.01 4 21.54 6.41 21.89C6.52 21.91 6.64 21.93 6.76 21.94C6.88 21.96 6.99 21.97 7.11 21.98C7.24 21.99 7.38 22 7.52 22H15.48C15.62 22 15.76 21.99 15.89 21.98C16.01 21.97 16.12 21.96 16.24 21.94C16.36 21.93 16.48 21.91 16.59 21.89C19 21.54 20.54 20.01 20.89 17.59C20.91 17.48 20.93 17.36 20.94 17.24C20.96 17.12 20.97 17.01 20.98 16.89C20.99 16.76 21 16.62 21 16.48V10.4C21 9.76 20.42 9.3 19.8 9.42ZM6.75 12.5H11.75C12.16 12.5 12.5 12.84 12.5 13.25C12.5 13.66 12.16 14 11.75 14H6.75C6.34 14 6 13.66 6 13.25C6 12.84 6.34 12.5 6.75 12.5ZM15.75 18H6.75C6.34 18 6 17.66 6 17.25C6 16.84 6.34 16.5 6.75 16.5H15.75C16.16 16.5 16.5 16.84 16.5 17.25C16.5 17.66 16.16 18 15.75 18Z"
        fill={fill}
      ></path>
    </g>
  </svg>
);

export const AlarmIcon = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>alarm</title>
    <path d="M27.013 25.278v1.825h-22.026v-1.825c0 0-0.471-1.009 2.085-3.429 2.554-2.419 2.218-8.672 2.218-12.907s5.948-4.325 5.948-4.325h0.204c0 0.002 0-0.029 0-0.688 0-0.423-1.42-1.955-1.42-1.955l-0.021-0.927h4.010l-0.027 0.962c0 0-1.539 1.531-1.539 1.982 0 0.436 0 0.582 0 0.625h0.317c0 0 5.948 0.090 5.948 4.325s-0.336 10.489 2.219 12.909 2.084 3.428 2.084 3.428zM18.512 28.070c0 1.385-1.122 2.883-2.506 2.883s-2.506-1.498-2.506-2.883c0 0.031 5.012-0.032 5.012 0z"></path>
  </svg>
);

export const RestartBoldIcon = ({
  fill = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000000"
    strokeWidth="0.00024000000000000003"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.9346 5.59158C16.217 5.70662 16.4017 5.98121 16.4017 6.28616V9.00067C16.4017 9.41489 16.0659 9.75067 15.6517 9.75067H13C12.6983 9.75067 12.4259 9.56984 12.3088 9.29174C12.1917 9.01364 12.2527 8.69245 12.4635 8.47659L13.225 7.69705C11.7795 7.25143 10.1467 7.61303 9.00097 8.78596C7.33301 10.4935 7.33301 13.269 9.00097 14.9765C10.6593 16.6742 13.3407 16.6742 14.999 14.9765C15.6769 14.2826 16.0805 13.4112 16.2069 12.5045C16.2651 12.0865 16.5972 11.7349 17.0192 11.7349C17.4246 11.7349 17.7609 12.0595 17.7217 12.463C17.5957 13.7606 17.0471 15.0265 16.072 16.0247C13.8252 18.3248 10.1748 18.3248 7.92796 16.0247C5.69068 13.7344 5.69068 10.0281 7.92796 7.7378C9.66551 5.95905 12.244 5.55465 14.3647 6.53037L15.1152 5.76208C15.3283 5.54393 15.6522 5.47653 15.9346 5.59158Z"
        fill={fill}
      ></path>
    </g>
  </svg>
);

export const ArrowBackIcon = ({
  stroke = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M11 6L5 12M5 12L11 18M5 12H19"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

export const CheckIcon = ({
  stroke = "currentColor",
  fill = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M9 12L10.5 13.5V13.5C10.7761 13.7761 11.2239 13.7761 11.5 13.5V13.5L15 10"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

export const PlusIcon = ({
  stroke = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width="64px"
    height="64px"
    viewBox="0 0 24.00 24.00"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M6 12H18M12 6V18"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);
{
  /* <svg
    width="64px"
    height="64px"
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M9 12L10.5 13.5V13.5C10.7761 13.7761 11.2239 13.7761 11.5 13.5V13.5L15 10"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg> */
}
