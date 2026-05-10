import React from 'react';

const Logo = ({ className = "w-12 h-12", showText = true, textColor = "text-white" }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <svg 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Outer Hexagon with Gold Stroke */}
                <path 
                    d="M50 5L89.4 27.5V72.5L50 95L10.6 72.5V27.5L50 5Z" 
                    stroke="#C6A96B" 
                    strokeWidth="4"
                    strokeLinejoin="round"
                />
                
                {/* Abstract 'S' Shape */}
                <path 
                    d="M35 35C35 35 65 30 65 45C65 60 35 60 35 75C35 90 65 85 65 85" 
                    stroke="#C6A96B" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="animate-pulse"
                />

                {/* Inner Dots for detail */}
                <circle cx="50" cy="50" r="3" fill="#C6A96B" />
            </svg>
            
            {showText && (
                <span className={`text-2xl font-black tracking-tighter uppercase ${textColor}`}>
                    Sagan<span className="text-gold">sa</span>
                </span>
            )}
        </div>
    );
};

export default Logo;
