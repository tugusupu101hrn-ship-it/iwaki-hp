import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    jsonLd?: object;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description = "Film Kは、企業の価値を映像で表現する映像制作会社です。ブランディング、採用、プロモーションなど、目的に合わせた最適な映像をご提案します。",
    url = "https://filmk-video.vercel.app",
    image = "/og-image.jpg",
    jsonLd
}) => {
    const siteTitle = 'Film K | 企業の価値を映し出す';
    const displayTitle = title ? `${title} | Film K` : siteTitle;

    return (
        <Helmet>
            <title>{displayTitle}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={displayTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={displayTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
        </Helmet>
    );
};
