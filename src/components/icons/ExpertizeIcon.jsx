const ExpertizeIcon = ({ className, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        <path
            d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path  stroke="#22c55e" d="m7 15.5 2 2 8-8"></path>
    </svg>
);

export default ExpertizeIcon;