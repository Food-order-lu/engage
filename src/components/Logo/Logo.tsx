'use client';

import styles from './Logo.module.css';

interface LogoProps {
    size?: 'small' | 'medium' | 'large';
    showText?: boolean;
}

const Logo = ({ size = 'medium', showText = true }: LogoProps) => {
    const sizeMap = {
        small: { icon: 32, text: '1.2rem' },
        medium: { icon: 40, text: '1.5rem' },
        large: { icon: 56, text: '2rem' }
    };

    const iconSize = sizeMap[size].icon;

    return (
        <div className={styles.logo}>
            {/* Logo Icon - Stylized "E" with connection concept */}
            <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
            >
                <defs>
                    <linearGradient id="engageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00A651" />
                        <stop offset="100%" stopColor="#1E88E5" />
                    </linearGradient>
                </defs>
                {/* Circle background */}
                <circle cx="24" cy="24" r="22" fill="url(#engageGradient)" />
                {/* Stylized E with connection lines */}
                <path
                    d="M14 14H30M14 24H26M14 34H30M14 14V34"
                    stroke="white"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* Connection dot */}
                <circle cx="32" cy="24" r="4" fill="white" />
            </svg>

            {showText && (
                <span className={styles.text} style={{ fontSize: sizeMap[size].text }}>
                    Engage
                </span>
            )}
        </div>
    );
};

export default Logo;
