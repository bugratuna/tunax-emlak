const DigitalMarketingIcon = ({ className, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
        <line x1="12" y1="2" x2="12" y2="6"></line>
        <line x1="12" y1="18" x2="12" y2="22"></line>
        <line x1="2" y1="12" x2="6" y2="12"></line>
        <line x1="18" y1="12" x2="22" y2="12"></line>
        <path d="M10 14v-2a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v2"></path>
        <path d="M9 14h6"></path>
        <path d="M8 12l4 -4l4 4"></path>
    </svg>
);

export default DigitalMarketingIcon;