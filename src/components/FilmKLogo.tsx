/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FilmKLogoProps {
  className?: string;
  size?: number | string;
  variant?: 'light' | 'dark' | 'footer' | 'sitemap' | 'gold' | 'monochrome';
}

export default function FilmKLogo({ 
  className = '', 
  size = 48, 
  variant = 'gold' 
}: FilmKLogoProps) {
  // Convert numerical sizes to pixel values, or leave strings as-is
  const widthHeight = typeof size === 'number' ? `${size}px` : size;

  // Render the official uploaded Film K logo image
  return (
    <img
      src="https://cdn.phototourl.com/member/2026-06-16-261694f3-b871-4440-abde-e157fe566122.png"
      alt="合同会社 Film K Logo"
      referrerPolicy="no-referrer"
      style={{
        width: widthHeight,
        height: widthHeight,
        objectFit: 'contain',
      }}
      className={`inline-block select-none ${className}`}
    />
  );
}

