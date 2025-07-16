const Spinner = ({
  size = 24,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <style>
      {`
        .spinner {
          transform-origin: center;
          animation: spin-rotate 2s linear infinite;
        }
        .spinner circle {
          stroke-linecap: round;
          animation: spin-stroke 1.5s ease-in-out infinite;
        }
        @keyframes spin-rotate {
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-stroke {
          0% {
            stroke-dasharray: 0 150;
            stroke-dashoffset: 0;
          }
          47.5% {
            stroke-dasharray: 42 150;
            stroke-dashoffset: -16;
          }
          95%, 100% {
            stroke-dasharray: 42 150;
            stroke-dashoffset: -59;
          }
        }
      `}
    </style>
    <g className="spinner">
      <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" />
    </g>
  </svg>
);

export default Spinner;
