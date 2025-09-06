const HomeLiraIcon = ({ className, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        {/* Ev (Dış Çizgi) */}
        <path
            d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        {/* TL Simgesi (FontAwesome'dan alınıp ölçeklendi) */}
        <g transform="translate(7.625 10.5) scale(0.0195)">
            <path
                d="M160 32c17.7 0 32 14.3 32 32l0 43.6 121.4-34.7c12.7-3.6 26 3.7 29.7 16.5s-3.7 26-16.5 29.7l-134.6 38.5 0 46.1 121.4-34.7c12.7-3.6 26 3.7 29.7 16.5s-3.7 26-16.5 29.7l-134.6 38.5 0 162.5 72 0c53 0 96-43 96-96 0-17.7 14.3-32 32-32s32 14.3 32 32c0 88.4-71.6 160-160 160l-104 0c-17.7 0-32-14.3-32-32l0-176.2-25.4 7.3c-12.7 3.6-26-3.7-29.7-16.5s3.7-26 16.5-29.7l38.6-11 0-46.1-25.4 7.3c-12.7 3.6-26-3.7-29.7-16.5s3.7-26 16.5-29.7l38.6-11 0-61.9c0-17.7 14.3-32 32-32z"
                fill="currentColor"
                stroke="none"
            />
        </g>
    </svg>
);

export default HomeLiraIcon;