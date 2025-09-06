const PurchaseAndSaleIcon = ({ className, ...props }) => (
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
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M14.12 14.12L19 19"></path>
    </svg>
);

export default PurchaseAndSaleIcon;