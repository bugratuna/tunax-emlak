import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, canonical, children }) => {
    const { pathname } = useLocation();
    const siteUrl = "https://www.tunax-emlak.com";
    const fullUrl = `${siteUrl}${pathname}`;

    return (
        <Helmet>
            <html lang="tr" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords ? keywords.join(', ') : ''} />
            <link rel="canonical" href={canonical || fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical || fullUrl} />
            <meta property="og:site_name" content="Realty Tunax" />
            <meta property="og:locale" content="tr_TR" />
            {children}
        </Helmet>
    );
};

export default SEO;
