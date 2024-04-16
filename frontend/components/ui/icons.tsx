type IconProps = React.HTMLAttributes<SVGElement>


export const Icons = {
  anthropic: (props: IconProps) => (
    <svg className="icon" width={46} height={32} viewBox="0 0 46 32" {...props}>
      <path d="M32.73 0h-6.945L38.45 32h6.945L32.73 0ZM12.665 0 0 32h7.082l2.59-6.72h13.25l2.59 6.72h7.082L19.929 0h-7.264Zm-.702 19.337 4.334-11.246 4.334 11.246h-8.668Z" />
    </svg>
  ),
  sorting: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 32 32" {...props}>
      <path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4zm0 2a9.98 9.98 0 0 1 5.344 1.563l-.813.093l.188 2l-1.063-.469l-.875.75l.157 2.063l2.156-.688l2.687.876l-.687 1.25l-1.625-1l-1.75.25L18 13.967l-.969 3l1.938 1.595s1.988-.344 2.093-.344c.106 0 .844 1.812.844 1.812l-1.593 5c-1.301.621-2.77.969-4.313.969c-.316 0-.629-.035-.938-.063l-1.093-1.906l1.062-4L11 17H7.281l-.968-1.969L9 12.906L13 11l-.594-2.656l1.719-.375l.813 1.125l3-.563l-.532-2.312l-2.218-.157C15.453 6.043 15.726 6 16 6zm-1.125.063l-1.563.656l-.75-.125a9.867 9.867 0 0 1 2.313-.532zM6.062 16.78l.97 1.125v2.063l1.874 2.062h1.156l2.844 3.5c-3.773-1.222-6.527-4.64-6.844-8.75z" />
    </svg>
  ),
  analysis: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 32 32" {...props}>
      <path fill="currentColor" d="m30.336 12.547l-10.172-1.074L16 2.133l-4.164 9.34l-10.172 1.074l7.598 6.848L7.14 29.398L16 24.29l8.86 5.11l-2.122-10.004z" />
    </svg>
  ),
  gathering: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 32 32" {...props}>
      <path fill="currentColor" d="M5 5c2.614 8.976 2.362 13.181 6.896 16.693c3.97 3.026 7.94 2.237 10.112 1.914L25.398 27h2l-3.98-3.98C23.393 20.613 29.01 5 5 5zm3.084 2.002c.135.011.45.121 1.047.396c3.999 1.85 5.408 4.592 6.931 7.4c1.096 2.023 3.019 5.103 4.374 6.095c1.356.983 2.836 1.709-.288.398c-3.134-1.311-5.417-5.032-6.931-7.85c-1.164-2.162-2.163-4.153-4.336-5.613c0 0-1.203-.86-.797-.826z" />
    </svg>
  ),
  send: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fill-rule="evenodd" d="M13.854.146a.5.5 0 0 1 .113.534l-5 13a.5.5 0 0 1-.922.027l-2.091-4.6L9.03 6.03a.75.75 0 0 0-1.06-1.06L4.893 8.046l-4.6-2.09a.5.5 0 0 1 .028-.923l13-5a.5.5 0 0 1 .533.113" clip-rule="evenodd" />
    </svg>
  ),
  leftArrow: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 15 15" {...props}>
      <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" />
    </svg>
  ),

  tab: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fill-rule="evenodd" d="M6.375 0H2.5A1.5 1.5 0 0 0 1 1.5v11A1.5 1.5 0 0 0 2.5 14h3.875zm1.25 14H11.5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 11.5 0H7.625zM9.5 5.837c.345 0 .625.28.625.625v1.076a.625.625 0 1 1-1.25 0V6.462c0-.346.28-.625.625-.625m-4.375.625a.625.625 0 1 0-1.25 0v1.076a.625.625 0 1 0 1.25 0z" clip-rule="evenodd" />
    </svg>
  ),
  avatar: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 15 15" {...props}>
      <path fill="currentColor" fill-rule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 0 0-4.193 9.494A4.971 4.971 0 0 1 7.5 9.025a4.97 4.97 0 0 1 4.193 2.296A5.673 5.673 0 0 0 7.5 1.827Zm3.482 10.152A4.023 4.023 0 0 0 7.5 9.975a4.023 4.023 0 0 0-3.482 2.004A5.648 5.648 0 0 0 7.5 13.173c1.312 0 2.52-.446 3.482-1.194ZM5.15 6.505a2.35 2.35 0 1 1 4.7 0a2.35 2.35 0 0 1-4.7 0Zm2.35-1.4a1.4 1.4 0 1 0 0 2.8a1.4 1.4 0 0 0 0-2.8Z" clip-rule="evenodd" />
    </svg>
  ),
  newWindow: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fill-rule="evenodd" d="M8.375 14H1.5A1.5 1.5 0 0 1 0 12.5v-11A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5v6.875H9A.625.625 0 0 0 8.375 9zm1.25-.625l3.75-3.75h-3.75z" clip-rule="evenodd" />
    </svg>
  ),
  trash: (props: IconProps) => (

    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 32 32" {...props} >
      <path fill="currentColor" d="M15 4c-.523 0-1.059.184-1.438.563C13.184 4.94 13 5.476 13 6v1H7v2h1v16c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V9h1V7h-6V6c0-.523-.184-1.059-.563-1.438C20.06 4.184 19.523 4 19 4zm0 2h4v1h-4zm-5 3h14v16c0 .555-.445 1-1 1H11c-.555 0-1-.445-1-1zm2 3v11h2V12zm4 0v11h2V12zm4 0v11h2V12z" />
    </svg>
  ),
  arrowDropdown: (props: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props} >
      <path
        d="M16 7.25L10 12.75L4 7.25"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"

      // style={{ stroke: "var(--icon-color)" }}
      ></path>
    </svg>

  ),
  ribbonCheck: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      ></path>
    </svg>
  ),
  pacman: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"

    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      ></path>
    </svg>
  ),
  tool: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      height={16}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  checkArrow: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      height={14}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  plusItem: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8 1a1 1 0 0 0-2 0v5H1a1 1 0 0 0 0 2h5v5a1 1 0 1 0 2 0V8h5a1 1 0 1 0 0-2H8z" clipRule="evenodd" />
    </svg>
  ),
  learnArrow: (props: IconProps) => (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="icon-animated-arrow-right--chevron"
        d="M8 13L13 8L8 3"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
        style={{ stroke: "var(--icon-base-color)" }}
      ></path>
      <path
        className="icon-animated-arrow-right--stem"
        d="M12 8L2 8"
        strokeWidth="1.5"
        style={{ stroke: "var(--icon-base-color)" }}
      ></path>
    </svg>
  ),

  warning: (props: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.62967 3.05027C8.69296 1.24268 11.307 1.24268 12.3703 3.05027L18.8735 14.1057C19.9518 15.9389 18.63 18.25 16.5032 18.25H3.49682C1.36993 18.25 0.0481211 15.9389 1.1265 14.1057L7.62967 3.05027ZM11.0774 3.81081C10.5941 2.98917 9.40588 2.98917 8.92257 3.8108L2.4194 14.8662C1.92923 15.6995 2.53005 16.75 3.49682 16.75H16.5032C17.4699 16.75 18.0707 15.6995 17.5806 14.8662L11.0774 3.81081Z"
        style={{ fill: "var(--icon-color)" }}
      ></path>
      <path
        d="M10.75 13.65C10.75 14.0642 10.4142 14.4 9.99998 14.4C9.58577 14.4 9.24998 14.0642 9.24998 13.65C9.24998 13.2358 9.58577 12.9 9.99998 12.9C10.4142 12.9 10.75 13.2358 10.75 13.65Z"
        style={{ fill: "var(--icon-color)" }}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99998 7.24996C10.4142 7.24996 10.75 7.58575 10.75 7.99996V11.5C10.75 11.9142 10.4142 12.25 9.99998 12.25C9.58577 12.25 9.24998 11.9142 9.24998 11.5V7.99996C9.24998 7.58575 9.58577 7.24996 9.99998 7.24996Z"
        style={{ fill: "var(--icon-color)" }}
      ></path>
    </svg>
  ),
  addPhone: (props: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

      {...props}>
      <g
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="style-weE8T"
        className="style-weE8T"
      >
        <path d="M8.44248 11.5575C7.5203 10.644 6.77499 9.56789 6.24415 8.38336C6.19544 8.26787 6.18258 8.14039 6.20725 8.01749C6.23192 7.89459 6.29297 7.78195 6.38248 7.6942L7.06498 7.0117C7.62415 6.45253 7.62415 5.6617 7.13581 5.17336L6.15831 4.19586C5.84577 3.88341 5.42192 3.70789 4.97998 3.70789C4.53804 3.70789 4.11419 3.88341 3.80165 4.19586L3.25831 4.73836C2.64081 5.35586 2.38331 6.2467 2.54998 7.13003C2.96165 9.30753 4.22665 11.6917 6.26748 13.7325C8.30831 15.7734 10.6925 17.0384 12.87 17.45C13.7533 17.6167 14.6441 17.3592 15.2616 16.7417L15.8041 16.1992C16.1166 15.8866 16.2921 15.4628 16.2921 15.0209C16.2921 14.5789 16.1166 14.1551 15.8041 13.8425L14.8266 12.865C14.5922 12.6307 14.2744 12.499 13.9429 12.499C13.6114 12.499 13.2936 12.6307 13.0591 12.865L12.3066 13.6184C12.219 13.708 12.1063 13.7691 11.9834 13.7938C11.8605 13.8184 11.733 13.8055 11.6175 13.7567C10.433 13.225 9.35669 12.4794 8.44248 11.5575V11.5575Z"></path>
        <path d="M17.5 5H12.5"></path>
        <path d="M15 7.5V2.5"></path>
      </g>
    </svg>
  ),
  delete: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14"  {...props}>
      <path fill="currentColor" fill-rule="evenodd" d="M3.316 10.463a2 2 0 0 0 1.523.703h6.182a2 2 0 0 0 2-2V4.834a2 2 0 0 0-2-2H4.839a2 2 0 0 0-1.523.703L1.471 5.703a2 2 0 0 0 0 2.594zm2.165-5.718a.625.625 0 0 1 .884 0l1.35 1.35l1.349-1.35a.625.625 0 1 1 .884.884l-1.35 1.35l1.35 1.35a.625.625 0 1 1-.884.884l-1.35-1.35l-1.35 1.35a.625.625 0 0 1-.883-.884l1.35-1.35l-1.35-1.35a.625.625 0 0 1 0-.884" clip-rule="evenodd" />
    </svg>
  ),
  ToolTip: (props: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=" czNkMi"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3.25C6.27208 3.25 3.25 6.27208 3.25 10C3.25 13.7279 6.27208 16.75 10 16.75C13.7279 16.75 16.75 13.7279 16.75 10C16.75 6.27208 13.7279 3.25 10 3.25ZM1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.25 14.5563 14.5563 18.25 10 18.25C5.44365 18.25 1.75 14.5563 1.75 10ZM9.97804 5.91605C10.6677 5.88714 11.3423 6.12711 11.859 6.58621C12.3849 7.05336 12.7046 7.7095 12.7485 8.41149C12.7495 8.42703 12.75 8.44259 12.75 8.45816C12.7501 8.90202 12.6315 9.33784 12.4064 9.72042C12.1814 10.103 11.8581 10.4184 11.4701 10.634L10.3642 11.2482C10.002 11.4493 9.54545 11.3188 9.34434 10.9566C9.14323 10.5945 9.27374 10.1379 9.63586 9.93684L10.7416 9.3227C10.7416 9.32269 10.7416 9.32272 10.7416 9.3227C10.8957 9.23709 11.0242 9.11179 11.1135 8.95986C11.199 8.81451 11.2459 8.64981 11.2497 8.48148C11.225 8.18369 11.0866 7.90644 10.8628 7.70757C10.633 7.50344 10.3318 7.39845 10.025 7.41551C10.0008 7.41685 9.97658 7.41703 9.95239 7.41603C9.67227 7.40446 9.39689 7.49107 9.17382 7.66091C8.95074 7.83074 8.79398 8.07314 8.73058 8.34625C8.63692 8.74973 8.23391 9.0009 7.83042 8.90724C7.42694 8.81358 7.17577 8.41057 7.26943 8.00708C7.41185 7.39354 7.76403 6.84898 8.26517 6.46744C8.75669 6.09322 9.36124 5.89886 9.97804 5.91605Z"
        style={{ fill: "var(--icon-color)" }}
      ></path>
      <path
        d="M10.875 13.25C10.875 13.7332 10.4832 14.125 10 14.125C9.51675 14.125 9.125 13.7332 9.125 13.25C9.125 12.7668 9.51675 12.375 10 12.375C10.4832 12.375 10.875 12.7668 10.875 13.25Z"
        style={{ fill: "var(--icon-color)" }}
      ></path>
    </svg>
  ),
  newVid: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m8.616-1.077l1.519-.673a.27.27 0 0 1 .366.253v2.994a.27.27 0 0 1-.366.254l-1.52-.674v.808a.539.539 0 0 1-.538.539h-4.04a.539.539 0 0 1-.538-.539v-3.77a.539.539 0 0 1 .539-.539h4.04a.539.539 0 0 1 .538.539z" clip-rule="evenodd" />
    </svg>
  ),
  feedbackList: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.25 3.5L11.956.795A1.5 1.5 0 0 1 14 2.193v8.226a1.5 1.5 0 0 1-1.974 1.423L5.25 9.5zM3 3.5h1v7a1 1 0 0 0 1 1h.5a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V9.33A3.001 3.001 0 0 1 3 3.5" clip-rule="evenodd" />
    </svg>
  ),
  cancel: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14"  {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M.375 7A6.625 6.625 0 0 1 12.64 3.523a.5.5 0 0 1-.163.689L7.953 7l4.524 2.788a.5.5 0 0 1 .163.689A6.625 6.625 0 0 1 .375 7M6 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd" />
    </svg>
  ),
  change: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14"  {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.854 1.646A.5.5 0 0 0 11 2v1H8.5a1 1 0 1 0 0 2H11v1a.5.5 0 0 0 .854.354l2-2a.5.5 0 0 0 0-.708zM0 4a1 1 0 0 1 1-1h3.25a1 1 0 0 1 .832.445L8.785 9H11V8a.5.5 0 0 1 .854-.354l2 2a.5.5 0 0 1 0 .708l-2 2A.5.5 0 0 1 11 12v-1H8.25a1 1 0 0 1-.832-.445L3.715 5H1a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1" clip-rule="evenodd" />
    </svg>

  ),
  uncancel: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.92 2.57h-.687a.838.838 0 0 0-.78.537l-.36.93l-1.24.703l-.988-.15a.838.838 0 0 0-.838.41l-.335.587a.838.838 0 0 0 .067.946l.628.78V8.72l-.611.78a.838.838 0 0 0-.067.946l.335.586a.838.838 0 0 0 .838.411l.988-.15l1.223.703l.36.93a.838.838 0 0 0 .78.536h.704a.838.838 0 0 0 .779-.536l.36-.93l1.223-.704l.989.151a.838.838 0 0 0 .838-.41l.335-.587a.838.838 0 0 0-.067-.947l-.629-.779v-.907m-5.864.203a1.676 1.676 0 1 0 3.351 0a1.676 1.676 0 0 0-3.351 0M8.1 3.542c-.306-.053-.306-.494 0-.547A2.779 2.779 0 0 0 10.34.85l.018-.085c.067-.303.499-.305.568-.002l.023.098a2.793 2.793 0 0 0 2.244 2.131c.309.054.309.497 0 .55a2.793 2.793 0 0 0-2.244 2.131l-.023.099c-.069.303-.501.3-.568-.003l-.018-.084a2.779 2.779 0 0 0-2.238-2.144Z" />
    </svg>),
  moderation: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.88 8.388a1.25 1.25 0 0 1-.664.348l-3 .54A1.25 1.25 0 0 1 4.76 7.843l.5-3.04a1.25 1.25 0 0 1 .351-.683L9.75 0H2.5A1.5 1.5 0 0 0 1 1.5v8.919l-.974 2.923a.5.5 0 0 0 .595.643L4.561 13H12.5a1.5 1.5 0 0 0 1.5-1.5V4.25zM12.319.077a1 1 0 0 0-1.095.219l-4.73 4.71l-.5 3.04l3-.54l4.71-4.73a1 1 0 0 0 0-1.42l-1.06-1.06a1 1 0 0 0-.325-.22Z" clip-rule="evenodd" />
    </svg>
  ),
  anger1: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0M3.343 8.223a.25.25 0 0 1 .25-.25h6.782a.25.25 0 0 1 .25.25c0 .552-.27 1.337-.852 1.983c-.59.656-1.504 1.173-2.79 1.173c-1.284 0-2.198-.517-2.789-1.173c-.581-.646-.85-1.43-.85-1.983Zm1.239-2.247a1.024 1.024 0 0 1 .002-2.049h.003a1.024 1.024 0 0 1-.003 2.049zm4.831 0a1.024 1.024 0 0 1 .003-2.049h.002a1.024 1.024 0 0 1-.002 2.049z" clip-rule="evenodd" />
    </svg>
  ),
  anger2: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14"  {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m3.56-2.324c0 .565.457 1.024 1.022 1.025h.002a1.025 1.025 0 0 0 .003-2.049h-.003c-.565 0-1.024.459-1.024 1.024m4.831 0c0 .565.457 1.024 1.022 1.025h.003a1.024 1.024 0 0 0 .002-2.049h-.002c-.566 0-1.025.459-1.025 1.024m-.34 5.156a.8.8 0 0 0 .32-.067a2.056 2.056 0 0 0 .928-.71c.112-.156.144-.26.148-.291a.625.625 0 0 1 1.24.16c-.041.318-.2.618-.372.859a3.304 3.304 0 0 1-1.507 1.153c-.278.104-.609.178-.927.134a.625.625 0 1 1 .17-1.238" clip-rule="evenodd" />
    </svg>
  ),

  anger3: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props} >
      <path fill="currentColor" fillRule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m9.331 2.582a.625.625 0 0 0 1.208-.325a3.665 3.665 0 0 0-7.077 0a.625.625 0 1 0 1.207.325a2.415 2.415 0 0 1 4.662 0m-6.39-5.174c0-.345.28-.625.625-.625h1.303c.346 0 .625.28.625.625v.595a.625.625 0 0 1-1.249.03h-.68a.625.625 0 0 1-.624-.625m6.19-.625a.625.625 0 0 0 0 1.25h.679a.625.625 0 0 0 1.25-.03v-.595a.625.625 0 0 0-.626-.625z" clip-rule="evenodd" />
    </svg>
  ),

  star: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props} >
      <path fill="currentColor" fillRule="evenodd" d="M7 .277a1.04 1.04 0 0 0-.94.596L4.472 4.078a.495.495 0 0 0-.012.023a.486.486 0 0 0-.023.004L.94 4.623a1.04 1.04 0 0 0-.617 1.788l2.56 2.469l.006.005a.03.03 0 0 1 .009.027v.004l-.61 3.568v.001a1.05 1.05 0 0 0 1.526 1.107l3.15-1.665a.09.09 0 0 1 .072 0l3.15 1.664a1.049 1.049 0 0 0 1.527-1.106l-.61-3.57v-.003c-.002-.004-.001-.01 0-.014a.03.03 0 0 1 .008-.013l.006-.005l2.559-2.47a1.04 1.04 0 0 0-.617-1.787l-3.496-.518a.486.486 0 0 0-.023-.004a.495.495 0 0 0-.012-.023L7.94.873A1.04 1.04 0 0 0 7 .277" clip-rule="evenodd" />
    </svg >
  ),
  profile: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" className="czNkMi" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1.573 1.573A.25.25 0 0 1 1.75 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5A1.75 1.75 0 0 0 0 1.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.25.25 0 0 1 .073-.177M14 10.75a.75.75 0 0 0-1.5 0v1.5a.25.25 0 0 1-.25.25h-1.5a.75.75 0 0 0 0 1.5h1.5A1.75 1.75 0 0 0 14 12.25zM.75 10a.75.75 0 0 1 .75.75v1.5a.25.25 0 0 0 .25.25h1.5a.75.75 0 0 1 0 1.5h-1.5A1.75 1.75 0 0 1 0 12.25v-1.5A.75.75 0 0 1 .75 10m10-10a.75.75 0 0 0 0 1.5h1.5a.25.25 0 0 1 .25.25v1.5a.75.75 0 0 0 1.5 0v-1.5A1.75 1.75 0 0 0 12.25 0zM7 7.776a4.423 4.423 0 0 0-4.145 2.879c-.112.299.127.595.446.595h7.396c.32 0 .558-.296.447-.595a4.423 4.423 0 0 0-4.145-2.879Zm2.208-3.315a2.21 2.21 0 1 1-4.421 0a2.21 2.21 0 0 1 4.421 0" clip-rule="evenodd" />
    </svg>
  ),
  phone: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" d="M5.17 13.24a3.317 3.317 0 0 1-4.161-.457l-.468-.458a1.123 1.123 0 0 1 0-1.57l1.986-1.966a1.113 1.113 0 0 1 1.56 0a1.123 1.123 0 0 0 1.571 0l3.12-3.12a1.103 1.103 0 0 0 0-1.571a1.113 1.113 0 0 1 0-1.56L10.756.56a1.123 1.123 0 0 1 1.57 0l.458.468a3.318 3.318 0 0 1 .458 4.16A30.103 30.103 0 0 1 5.17 13.24" />
    </svg>
  ),
  recs: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" className=" czNkMi" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M0 1A.75.75 0 0 1 .75.25h12.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 1m.75 2.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zM0 7a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 0 7m0 3a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 0 10m.75 2.25a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd" />
    </svg>),
  home: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" className=" czNkMi" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M.318 6.045A1 1 0 0 0 0 6.776V12.5A1.5 1.5 0 0 0 1.5 14H6v-3a1 1 0 1 1 2 0v3h4.5a1.5 1.5 0 0 0 1.5-1.5V6.776a1 1 0 0 0-.318-.731L7.325.12a.5.5 0 0 0-.65 0z" clip-rule="evenodd" />
    </svg>),
  billing: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" className=" czNkMi" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M0 3.675c0-.824.696-1.45 1.5-1.45h11c.804 0 1.5.626 1.5 1.45v6.65c0 .824-.696 1.45-1.5 1.45h-11c-.804 0-1.5-.626-1.5-1.45zM4.9 7a2.1 2.1 0 1 1 4.2 0a2.1 2.1 0 0 1-4.2 0M3.004 7A.752.752 0 1 1 1.5 7a.752.752 0 0 1 1.504 0m8.744.752a.752.752 0 1 0 0-1.504a.752.752 0 0 0 0 1.504" clip-rule="evenodd" />
    </svg>
  ),
  hammer: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" className=" czNkMi"{...props}>
      <path fill="currentColor" fillRule="evenodd" d="M3.877 6.266a1.5 1.5 0 0 1 0-2.122L7.462.56a1.5 1.5 0 0 1 2.122 0l1.583 1.584a1.5 1.5 0 0 1 0 2.121L9.91 5.521L13.7 9.31a.75.75 0 1 1-1.062 1.06L8.85 6.583L7.582 7.85a1.5 1.5 0 0 1-2.12 0zM1.331 12.38h-.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-.5v-1.75a.5.5 0 0 0-.5-.5h-5.5a.5.5 0 0 0-.5.5z" clip-rule="evenodd" />
    </svg>
  ),
  heart: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" className=" czNkMi" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.024 1.085c.98.071 2.002.55 2.98 1.517c.978-.968 1.999-1.445 2.978-1.514c1.106-.079 2.083.368 2.79 1.073c1.39 1.386 1.827 3.895.102 5.62a.48.48 0 0 1-.018.017L7.34 12.795a.5.5 0 0 1-.672 0L1.152 7.798a.495.495 0 0 1-.018-.017c-1.734-1.734-1.3-4.243.095-5.628c.709-.704 1.688-1.148 2.795-1.068" clip-rule="evenodd" />
    </svg>),
  user: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" className=" czNkMi" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h10.5C13.216 0 14 .783 14 1.75v3.257a9.307 9.307 0 0 1-6.57 8.895a1.45 1.45 0 0 1-.86 0A9.307 9.307 0 0 1 0 5.007zM7 6.5A2.25 2.25 0 1 0 7 2a2.25 2.25 0 0 0 0 4.5m4.152 2.893A5.487 5.487 0 0 0 7 7.5a5.487 5.487 0 0 0-4.152 1.893A7.798 7.798 0 0 0 7 12.465a7.798 7.798 0 0 0 4.152-3.072" clip-rule="evenodd" />
    </svg>),
  mail: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" className=" czNkMi" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M0 2.75a1.5 1.5 0 0 1 1.5-1.5h11a1.5 1.5 0 0 1 1.5 1.5v.342L7.383 7.504A.72.72 0 0 1 7 7.607a.72.72 0 0 1-.383-.103L0 3.092zm0 1.844v6.656a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V4.594L8.073 8.546l-.005.004A1.966 1.966 0 0 1 7 8.857c-.375 0-.753-.102-1.068-.307l-.005-.004z" clip-rule="evenodd" />
    </svg>),
  youtube: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" className=" czNkMi" viewBox="0 0 32 32" {...props}>
      <path fill="currentColor" d="M29.41 9.26a3.5 3.5 0 0 0-2.47-2.47C24.76 6.2 16 6.2 16 6.2s-8.76 0-10.94.59a3.5 3.5 0 0 0-2.47 2.47A36.13 36.13 0 0 0 2 16a36.13 36.13 0 0 0 .59 6.74a3.5 3.5 0 0 0 2.47 2.47c2.18.59 10.94.59 10.94.59s8.76 0 10.94-.59a3.5 3.5 0 0 0 2.47-2.47A36.13 36.13 0 0 0 30 16a36.13 36.13 0 0 0-.59-6.74ZM13.2 20.2v-8.4l7.27 4.2Z" />
    </svg>),
  tiktok: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" className=" czNkMi" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" d="M9.422 1.14a1 1 0 0 0-2 0v8.58a1.893 1.893 0 1 1-1.893-1.892a1 1 0 1 0 0-2a3.893 3.893 0 1 0 3.893 3.893V5.283a5.266 5.266 0 0 0 3.288 1.146a1 1 0 1 0 0-2a3.288 3.288 0 0 1-3.288-3.288Z" />
    </svg>
  ),
  check: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.637 1.198a1 1 0 0 1 .134 1.408l-8.04 9.73l-.003.002a1.922 1.922 0 0 1-1.5.693a1.923 1.923 0 0 1-1.499-.748l-.001-.002L.21 9.045a1 1 0 1 1 1.578-1.228l2.464 3.167l7.976-9.652a1 1 0 0 1 1.408-.134Z" clip-rule="evenodd" />
    </svg>
  ),
  cross: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.218.226a1.5 1.5 0 0 1 2.117.596l.002.004l5.5 10.999A1.5 1.5 0 0 1 12.502 14H1.498a1.5 1.5 0 0 1-1.336-2.174v-.001L5.664.826l.002-.004a1.5 1.5 0 0 1 .553-.596ZM7 4.125a.75.75 0 0 1 .75.75v3.25a.75.75 0 0 1-1.5 0v-3.25a.75.75 0 0 1 .75-.75m1 6.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd" />
    </svg>
  ),

  free: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.272 0a.5.5 0 0 0-.46.305l-2.25 5.31l-.002.005A1 1 0 0 0 2.48 7h2.129l-1.818 6.363a.5.5 0 0 0 .825.5l8.59-8.14l.003-.003A1 1 0 0 0 11.53 4H8.582L10.218.724A.5.5 0 0 0 9.773 0z" clip-rule="evenodd" />
    </svg>
  ),
  diamond: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.408 1.04H7.62l1.717 3.69H4.684zM3.304 4.73l1.724-3.69H3.346a1.57 1.57 0 0 0-1.244.67L.285 4.228l-.003.004a1.55 1.55 0 0 0-.234.5h3.256ZM.254 5.98h3.024l1.921 6.161L.365 6.13a1.55 1.55 0 0 1-.111-.148Zm4.333 0h4.847l-2.33 7.503a1.479 1.479 0 0 1-.176.002l-2.34-7.504Zm6.156 0l-1.896 6.103l4.788-5.954a1.55 1.55 0 0 0 .111-.148h-3.003Zm3.208-1.25a1.551 1.551 0 0 0-.233-.499l-.003-.004l-1.817-2.516a1.57 1.57 0 0 0-1.244-.67V1.04H9l1.716 3.69z" clip-rule="evenodd" />
    </svg>
  ),
  feedback: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1.62.051h9.312c.857 0 1.552.695 1.552 1.552v.077L6.276 4.784L.07 1.68v-.077A1.55 1.55 0 0 1 1.62.051M.07 3.078V7.81c0 .857.694 1.552 1.551 1.552h4.927c.257-.292.622-.51 1.094-.592c.516-.09.926-.481 1.04-.991l.022-.095c.431-1.97 3.237-1.983 3.686-.016l.009.04l.016.07c.016.067.036.131.061.193c.006-.053.009-.107.009-.161V3.078L6.556 6.042a.625.625 0 0 1-.56 0zm9.696 4.84c.183-.837 1.373-.842 1.564-.007l.009.04l.018.077a2.394 2.394 0 0 0 1.921 1.812c.873.152.873 1.404 0 1.556a2.395 2.395 0 0 0-1.925 1.827l-.023.103c-.19.834-1.381.83-1.564-.007l-.02-.088a2.38 2.38 0 0 0-1.917-1.836c-.871-.152-.871-1.402 0-1.553a2.38 2.38 0 0 0 1.915-1.827l.014-.064z" clip-rule="evenodd" />
    </svg >
  ),
  pending: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.25 0a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 0 1.5 0v-7.5A2.25 2.25 0 0 0 11.75 0zM9.5 3A1.5 1.5 0 0 1 11 4.5v8A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-8A1.5 1.5 0 0 1 1.5 3zM2.25 8.5A.75.75 0 0 1 3 7.75h1.75V6a.75.75 0 0 1 1.5 0v1.75H8a.75.75 0 0 1 0 1.5H6.25V11a.75.75 0 0 1-1.5 0V9.25H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" />
    </svg>
  ),
  health: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.685 2.422a2.315 2.315 0 1 1 4.63 0a2.315 2.315 0 0 1-4.63 0M2.446 6.214a2.536 2.536 0 0 1 3.492 0l.01.01L7 7.276l1.053-1.052l.01-.01a2.536 2.536 0 0 1 3.49 0a2.378 2.378 0 0 1 .003 3.448l-4.208 4.09a.5.5 0 0 1-.697 0l-4.207-4.09a2.378 2.378 0 0 1 .002-3.447Z" clip-rule="evenodd" />
    </svg>
  ),
  navbarHammer: (props: IconProps) => (


    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 20 20" className=" czNkMi"  {...props}>
      <g style={{
        stroke: "var(--icon-color)",
        fill: "var(--icon-background, none)"
      }} clip-rule="evenodd">
        <path d="M10.28 1.055a1.5 1.5 0 0 1 .918.323l6.863 5.415a1.5 1.5 0 0 1 .528.819l.19.773a1.5 1.5 0 0 1-.279 1.289l-2.49 3.156a1.5 1.5 0 0 1-1.188.57l-.797-.005a1.5 1.5 0 0 1-.918-.322L6.243 7.658a1.5 1.5 0 0 1-.528-.819l-.19-.773a1.5 1.5 0 0 1 .279-1.288L8.295 1.62a1.5 1.5 0 0 1 1.188-.571l.797.005Zm.299 1.108a.5.5 0 0 0-.306-.108l-.797-.005a.5.5 0 0 0-.396.19L6.59 5.397a.5.5 0 0 0-.093.43l.19.773a.5.5 0 0 0 .176.273l6.863 5.416a.5.5 0 0 0 .306.107l.797.006a.5.5 0 0 0 .396-.19l2.491-3.158a.5.5 0 0 0 .093-.43l-.19-.773a.5.5 0 0 0-.176-.273L10.58 2.163ZM8.885 9.751L3.624 16.42a.5.5 0 0 0 .082.702l.785.62a.5.5 0 0 0 .703-.083l5.261-6.668l.785.62l-5.261 6.668a1.5 1.5 0 0 1-2.107.248l-.785-.62a1.5 1.5 0 0 1-.248-2.106L8.1 9.132l.785.62Z" />
        <path d="m13.376 4.06l.93-1.178a.5.5 0 0 1 .702-.082l.785.62a.5.5 0 0 1 .083.701l-.93 1.178l.786.62l.929-1.178a1.5 1.5 0 0 0-.249-2.107l-.785-.62a1.5 1.5 0 0 0-2.106.249l-.93 1.177l.785.62Z" />
      </g>
    </svg>

  ),

  navbarHeart: (props: IconProps) => (

    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" className=" czNkMi"  {...props}>
      <path style={{
        stroke: "var(--icon-color)",
        fill: "var(--icon-background, none)"
      }}
        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 3.5C5.127 3.5 3 5.76 3 8.547C3 14.125 12 20.5 12 20.5s9-6.375 9-11.953C21 5.094 18.873 3.5 16.25 3.5c-1.86 0-3.47 1.136-4.25 2.79c-.78-1.654-2.39-2.79-4.25-2.79Z" />
    </svg>
  ),

  navbarMail: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 32 32" className=" czNkMi"  {...props}>
      <path
        style={{
          stroke: "var(--icon-color)",
          fill: "var(--icon-background, none)"
        }}
        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M29 9v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9m26 0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m26 0l-11.862 8.212a2 2 0 0 1-2.276 0L3 9" />
    </svg>
  ),

  navbarCredit: (props: IconProps) => (

    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" className=" czNkMi"  {...props}>
      <path style={{
        stroke: "var(--icon-color)",
        fill: "var(--icon-background, none)"
      }}
        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 2.25h-11a1 1 0 0 0-1 1v7.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7.5a1 1 0 0 0-1-1m-12 3.5h13m-4 3.5H11" />
    </svg>
  ),
  navbarTiktok: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" className="czNkMi"  {...props}>
      <path
        style={{
          stroke: "var(--icon-color)",
          fill: "var(--icon-background, none)"
        }}
        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  ),
  navbarYoutube: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" className="czNkMi"  {...props}>
      <path style={{
        stroke: "var(--icon-color)",
        fill: "var(--icon-background, none)"
      }}
        d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48a9.55 9.55 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78a2.49 2.49 0 0 0 .61-1a10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54ZM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08Z" />
    </svg>
  ),

  navbarBilling: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" className="czNkMi" {...props}>
      <path fill="currentColor" fill-rule="evenodd" d="M8.605 1.55h-7.05a1.5 1.5 0 0 0-1.5 1.5v2a.5.5 0 0 0 .374.483a1.517 1.517 0 0 1 0 2.933a.5.5 0 0 0-.373.484v1.999a1.5 1.5 0 0 0 1.5 1.5h7.05v-1.715a.625.625 0 1 1 1.25 0v1.715h2.588a1.5 1.5 0 0 0 1.5-1.5V8.946a.5.5 0 0 0-.369-.483a1.517 1.517 0 0 1 0-2.926a.5.5 0 0 0 .37-.483V3.051a1.5 1.5 0 0 0-1.5-1.5h-2.59v1.723a.625.625 0 0 1-1.25 0zm.625 3.816c.346 0 .625.28.625.625v2.016a.625.625 0 0 1-1.25 0V5.991c0-.345.28-.625.625-.625" clip-rule="evenodd" />
    </svg>
  ),
  navbarIntegration: (props: IconProps) => (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className=" czNkMi"  {...props}>
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <circle cx="12" cy="12" r="3" /><circle cx="12" cy="4" r="2" />
        <circle cx="20" cy="12" r="2" /><circle cx="4" cy="12" r="2" />
        <circle cx="12" cy="20" r="2" /><path d="m12 6v3" />
        <path d="m15 12h3" />
        <path d="m12 15v3" /><path d="m9 12h-3" />
      </g>
    </svg>
  ),
  navbarHome: (props: IconProps) => (

    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=" czNkMi"
      {...props}
    >
      <path
        d="M7.91667 9.99994H12.0833M7.91667 13.3333H12.0833M16.535 6.91661L11.535 3.02661C11.0961 2.68523 10.556 2.49988 10 2.49988C9.444 2.49988 8.90386 2.68523 8.465 3.02661L3.465 6.91578C3.16463 7.14943 2.92157 7.44858 2.75434 7.79041C2.58711 8.13224 2.50012 8.50773 2.5 8.88828V14.9999C2.5 15.663 2.76339 16.2989 3.23223 16.7677C3.70107 17.2366 4.33696 17.4999 5 17.4999H15C15.663 17.4999 16.2989 17.2366 16.7678 16.7677C17.2366 16.2989 17.5 15.663 17.5 14.9999V8.88828C17.4998 8.50788 17.4127 8.13254 17.2455 7.79087C17.0783 7.44919 16.8353 7.15018 16.535 6.91661Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{
          stroke: "var(--icon-color)",
          fill: "var(--icon-background, none)"
        }}
        strokeLinejoin="round"

      ></path>
    </svg>
  ),
  navbarPlatform: (props: IconProps) => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=" czNkMi"
    >
      <g className="sc-kOHTFB eNWAHC">
        <path d="M2.5 12.8533L9.98917 16.2075L17.5 12.8533L10.0108 9.5L2.5 12.8533Z"></path>
        <path d="M2.5 8.85333L9.98917 12.2075L17.5 8.85333L10.0108 5.5L2.5 8.85333Z"></path>
      </g>
    </svg>
  )
  ,
  navbarUser: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14" className=" czNkMi"
      {...props}>
      <path fill="currentColor" fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h10.5C13.216 0 14 .783 14 1.75v3.257a9.307 9.307 0 0 1-6.57 8.895a1.45 1.45 0 0 1-.86 0A9.307 9.307 0 0 1 0 5.007zM7 6.5A2.25 2.25 0 1 0 7 2a2.25 2.25 0 0 0 0 4.5m4.152 2.893A5.487 5.487 0 0 0 7 7.5a5.487 5.487 0 0 0-4.152 1.893A7.798 7.798 0 0 0 7 12.465a7.798 7.798 0 0 0 4.152-3.072" clip-rule="evenodd" />
    </svg>

  ),

  rec: (props: IconProps) => (
    <svg width="512" height="512" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.293.19a.587.587 0 0 0-.475.254a.997.997 0 0 0-.125.25c-.043.12-.08.275-.113.412l-.013.049c-.084.346-.166.627-.283.786a.91.91 0 0 1-.261.205a4.313 4.313 0 0 1-.473.231l-.126.054a7.03 7.03 0 0 0-.355.159c-.068.033-.155.08-.23.14a.604.604 0 0 0-.242.47c0 .274.194.43.241.468c.076.06.163.107.23.141c.101.05.232.106.356.159l.126.054c.172.074.334.149.473.23a.91.91 0 0 1 .26.206c.118.159.2.44.284.786l.013.05c.033.135.07.29.113.41a.997.997 0 0 0 .125.25c.06.084.213.254.475.254c.263 0 .416-.17.476-.253a.997.997 0 0 0 .125-.25c.043-.121.08-.276.113-.412l.012-.05c.085-.345.167-.626.284-.785a.91.91 0 0 1 .261-.205a4.31 4.31 0 0 1 .472-.231l.127-.054c.124-.053.255-.109.355-.159c.068-.034.155-.08.23-.14a.604.604 0 0 0 .242-.47a.604.604 0 0 0-.241-.468a1.316 1.316 0 0 0-.231-.141c-.1-.05-.231-.106-.355-.159l-.127-.054a4.31 4.31 0 0 1-.472-.23a.91.91 0 0 1-.26-.206c-.118-.159-.2-.44-.285-.786l-.012-.05a4.54 4.54 0 0 0-.113-.41a.997.997 0 0 0-.125-.251a.587.587 0 0 0-.476-.253Zm.418 7.218a1.75 1.75 0 0 0 1.29-1.319v.001l.005-.019a4.698 4.698 0 0 1 .115-.406a3.674 3.674 0 0 1 .163-.417l.014-.01c.081-.055.194-.12.327-.187a5.623 5.623 0 0 1 .452-.202l.022-.01a1.75 1.75 0 0 0 .942-.83l3.417-.948l.005-.001a1.12 1.12 0 0 1 1.412 1.057v5.827a2.09 2.09 0 1 1-1.5-2.058v-1.45L7.21 7.87v3.937a2.09 2.09 0 1 1-1.5-2.005V7.408ZM1.963 5.899a.75.75 0 0 1 .75.75v.384h.384a.75.75 0 1 1 0 1.5h-.384v.384a.75.75 0 0 1-1.5 0v-.384H.829a.75.75 0 1 1 0-1.5h.384V6.65a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
  ),
  positive1: (props: IconProps) => (<svg width="512" height="512" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"  {...props}>
    <path fill="currentColor" d="M896 1792q277 0 516-113.5t380-334.5q-80-50-240-45t-298 65q-90 39-159 98t-96 113v-449q201-28 332-153t131-326V81q0-34-23.5-57.5T1381 0q-21 10-67.5 56.5t-103 109T1139 243q-13-13-71-80.5t-105.5-115T896 0q-20 0-67.5 47.5t-105 115T653 243q-15-15-71.5-77.5t-103-109T410 0q-33 0-57 23.5T329 81v566q0 102 36.5 187.5T466 979t147 96.5t179 50.5v449q-26-53-95-112.5T538 1364q-138-60-298-65T0 1344q142 221 380.5 334.5T896 1792" />
  </svg>
  ),
  privacy: (props: IconProps) => (
    <svg width="512" height="512" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5V11a1.5 1.5 0 0 0 1.5 1.5v.702a.75.75 0 0 0 1.5 0V12.5h8v.702a.75.75 0 0 0 1.5 0V12.5A1.5 1.5 0 0 0 14 11V1.5A1.5 1.5 0 0 0 12.5 0zm7.25 4.943c-.721 0-1.306.584-1.307 1.304v.006a1.307 1.307 0 1 0 1.307-1.31M8.124 3.77a2.542 2.542 0 0 0-.687.284l-.587-.587a.625.625 0 0 0-.884.884l.587.587a2.542 2.542 0 0 0-.284.687h-.832a.625.625 0 0 0 0 1.25h.832c.061.245.158.476.284.687l-.587.587a.625.625 0 0 0 .884.884l.587-.587c.211.126.442.223.687.284v.832a.625.625 0 1 0 1.25 0V8.73c.245-.061.476-.158.687-.284l.587.587a.625.625 0 0 0 .884-.884l-.587-.587c.126-.211.223-.442.284-.687h.832a.625.625 0 0 0 0-1.25h-.832a2.544 2.544 0 0 0-.284-.687l.587-.587a.625.625 0 1 0-.884-.884l-.587.587a2.543 2.543 0 0 0-.687-.284v-.832a.625.625 0 1 0-1.25 0zm-5.007.364a.625.625 0 0 0-1.25 0v4.232a.625.625 0 1 0 1.25 0z" clip-rule="evenodd" />
    </svg>
  ),
  // moderation: (props: IconProps) => (

  //   <svg width="512" height="512" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"  {...props} >
  //     <path fill="currentColor" fillRule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5V11a1.5 1.5 0 0 0 1.5 1.5v.702a.75.75 0 0 0 1.5 0V12.5h8v.702a.75.75 0 0 0 1.5 0V12.5A1.5 1.5 0 0 0 14 11V1.5A1.5 1.5 0 0 0 12.5 0zm7.25 4.943c-.721 0-1.306.584-1.307 1.304v.006a1.307 1.307 0 1 0 1.307-1.31M8.124 3.77a2.542 2.542 0 0 0-.687.284l-.587-.587a.625.625 0 0 0-.884.884l.587.587a2.542 2.542 0 0 0-.284.687h-.832a.625.625 0 0 0 0 1.25h.832c.061.245.158.476.284.687l-.587.587a.625.625 0 0 0 .884.884l.587-.587c.211.126.442.223.687.284v.832a.625.625 0 1 0 1.25 0V8.73c.245-.061.476-.158.687-.284l.587.587a.625.625 0 0 0 .884-.884l-.587-.587c.126-.211.223-.442.284-.687h.832a.625.625 0 0 0 0-1.25h-.832a2.544 2.544 0 0 0-.284-.687l.587-.587a.625.625 0 1 0-.884-.884l-.587.587a2.543 2.543 0 0 0-.687-.284v-.832a.625.625 0 1 0-1.25 0zm-5.007.364a.625.625 0 0 0-1.25 0v4.232a.625.625 0 1 0 1.25 0z" clip-rule="evenodd" />
  //   </svg>
  // ),
  engagement: (props: IconProps) => (
    <svg width="360.3" height="512" viewBox="0 0 304 432" xmlns="http://www.w3.org/2000/svg" {...props} >
      <path fill="currentColor" d="M256 3q18 0 30.5 12.5T299 45v342q0 17-12.5 29.5T256 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3zM149.5 45q-17.5 0-30 12.5T107 88t12.5 30.5t30 12.5t30-12.5T192 88t-12.5-30.5t-30-12.5m-.5 342q44 0 75.5-31.5T256 280t-31.5-75.5T149 173t-75 31.5T43 280t31 75.5t75 31.5m.5-171q26.5 0 45 18.5T213 280t-18.5 45.5t-45 18.5t-45.5-18.5T85 280t19-45.5t45.5-18.5" />
    </svg>
  ),
  sentiment: (props: IconProps) => (
    <svg width="449" height="512" viewBox="0 0 898 1024" xmlns="http://www.w3.org/2000/svg" {...props} >
      <path fill="currentColor" d="M865 823q-13 7-31 8l-1 1H577v128q0 26-18.5 45t-45.5 19H385q-26 0-45-19t-19-45V832H65q0-1-1-1q-18-1-31-8q-23-13-30-38t7-48l149-225h-30v-2q-19 1-32-7q-23-13-30-38t7-48L394 32q0-1 4-5l5.5-5.5l5.5-5l6.5-5l7-4.5l8-4l8.5-2l10-1l10 1l8.5 2l8 4l7 4.5l6.5 5l5.5 5L500 27l5 5l320 385q13 23 6 48t-30 38q-13 8-32 7v2h-30l150 225q13 23 6 48t-30 38" />
    </svg>
  ),
  anger: (props: IconProps) => (
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props} >
      <path fill="currentColor" d="M394.23 197.56a300.43 300.43 0 0 0-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 0 0-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44m-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78c4.95-10.74 10-21.67 13-33.37a8 8 0 0 1 12.49-4.51A126.48 126.48 0 0 1 275 292c18.17 24 29 52.42 29 76c0 22.24-5.42 39.77-15.67 50.69" />
    </svg>
  ),
  positive5: (props: IconProps) => (
    <svg width="512" height="512" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="currentColor" d="M25.37 7.306a7.252 7.252 0 0 0-7.247-7.08a7.24 7.24 0 0 0-6.208 3.518a4.163 4.163 0 0 0-2.01-.517a4.22 4.22 0 0 0-4.216 4.066a5.987 5.987 0 0 0-4.128 5.686c0 3.31 2.687 6 6 6v-.003h5.27l-2.165 3.398l1.977-.41L10 30.874l9.138-10.102L17 21l2.167-2.023h4.27c3.31 0 6-2.688 6-6a5.995 5.995 0 0 0-4.066-5.67zm-1.934 9.673H7.56a4.01 4.01 0 0 1-4-4.002c-.002-1.982 1.45-3.618 3.35-3.93a.998.998 0 0 0 .657-.415c.155-.223.212-.497.163-.763a2.284 2.284 0 0 1-.045-.424a2.224 2.224 0 0 1 2.22-2.218c.647 0 1.217.278 1.633.73a.997.997 0 0 0 1.675-.32c.75-1.992 2.662-3.412 4.91-3.41a5.258 5.258 0 0 1 5.252 5.25c0 .16-.01.325-.027.496c-.05.517.305.984.815 1.08c1.86.343 3.274 1.965 3.27 3.922a4.005 4.005 0 0 1-3.997 4.003z" />
    </svg>
  ),
  plus: (props: IconProps) => (
    <svg width="512" height="512" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="currentColor" d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z" />
    </svg>
  ),
  minus: (props: IconProps) => (
    <svg width="512" height="512" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"  {...props}>
      <rect width="10" height="1.5" x="3" y="7.25" fill="currentColor" rx=".5" />
    </svg>
  ),

  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: IconProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  aria: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
}