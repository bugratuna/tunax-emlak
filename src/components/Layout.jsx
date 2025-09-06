import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Layout() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Realty Tunax",
        "url": "https://www.tunax-emlak.com/",
        "logo": "https://www.tunax-emlak.com/logo.png",
        "telephone": "+90-312-123-4567",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pastel Sokak, No:12/3",
            "addressLocality": "Ankara",
            "addressRegion": "Ankara",
            "postalCode": "06570",
            "addressCountry": "TR"
        },
        "areaServed": { "@type": "City", "name": "Ankara" },
        "description": "Antalya'da satılık ve kiralık daireler, villalar ve ticari mülkler için profesyonel emlak danışmanlığı hizmetleri.",
        "openingHours": "Mo-Fr 09:00-18:00"
    };

    return (
        <div className="relative flex min-h-screen flex-col bg-slate-50 text-gray-800 font-sans antialiased">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;

