

const SahibindenIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        aria-hidden="true"
        focusable="false"
        {...props}
    >
        {/* SVG filtreleri ve gradient tanımlamaları */}
        <defs>
            {/* Arka plan için sarı gradient */}
            <linearGradient id="sahibindenYellowGradient" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#FFDD47" />
                <stop offset="100%" stopColor="#FFC107" />
            </linearGradient>
        </defs>

        {/* Sarı, yuvarlak köşeli arka plan */}
        <rect
            width="100"
            height="100"
            rx="16"
            fill="url(#sahibindenYellowGradient)"
        />

        {/* 'S' harfi ve gölgesi */}
        <text
            x="50%"
            y="53%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Arial, 'Helvetica Neue', Helvetica, sans-serif"
            fontSize="85"
            fontWeight="900"
            fill="#1A1A1A"
            style={{ filter: 'drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.3))' }}
        >
            S
        </text>
    </svg>
);

export default SahibindenIcon;