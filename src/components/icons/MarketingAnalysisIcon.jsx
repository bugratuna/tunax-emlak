const MarketingAnalysisIcon = ({ className, ...props }) => (
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
        {/* Büyüteç */}
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        {/* Büyüteç içindeki çubuk grafik */}
        <line x1="8" y1="14" x2="8" y2="10"></line>
        <line x1="11" y1="14" x2="11" y2="8"></line>
        <line x1="14" y1="14" x2="14" y2="12"></line>
    </svg>
);

export default MarketingAnalysisIcon;