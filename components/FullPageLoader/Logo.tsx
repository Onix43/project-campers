export const LogoTT = ({ className }: { className?: string }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="100" rx="20" fill="#101828" />
    <text
      x="50"
      y="50"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="60"
      fontWeight="bold"
      fill="white"
      fontFamily="Arial, sans-serif"
    >
      TT
    </text>
  </svg>
);
