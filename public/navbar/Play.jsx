const Play = ({ color }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 1.5C16.2459 1.5 20.5 5.75315 20.5 11C20.5 16.2469 16.2459 20.5 11 20.5C5.75315 20.5 1.5 16.2469 1.5 11C1.5 5.75315 5.75315 1.5 11 1.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 10.9951C14 10.184 9.84253 7.58912 9.37091 8.0557C8.8993 8.52228 8.85395 13.424 9.37091 13.9346C9.88788 14.4469 14 11.8063 14 10.9951Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Play;