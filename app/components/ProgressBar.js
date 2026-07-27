'use client';

import { useState, useEffect } from 'react';

export default function ProgressBar({ readTime = '8 min read' }) {
    const [completion, setCompletion] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [secondsRead, setSecondsRead] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    // 1. Scroll percentage calculation + Completion state
    useEffect(() => {
        const updateScrollProgress = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            
            if (scrollHeight > 0) {
                const percentage = Math.min(
                    100,
                    Math.max(0, Math.round((currentProgress / scrollHeight) * 100))
                );
                setCompletion(percentage);

                if (percentage === 100) {
                    setIsCompleted(true);
                } else {
                    setIsCompleted(false);
                }
            }

            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    // 2. Real-time reader timer
    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsRead((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (totalSeconds) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        if (mins === 0) return `${secs}s`;
        return `${mins}m ${secs}s`;
    };

    return (
        <>
            {/* 1. THICK TOP PROGRESS BAR WITH NEON GLOW */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: `${completion}%`,
                    height: '7px',
                    background: isCompleted
                        ? 'linear-gradient(90deg, #10b981, #f59e0b, #ec4899)'
                        : 'linear-gradient(90deg, #3182ce, #805ad5, #e53e3e)',
                    boxShadow: isCompleted
                        ? '0 0 18px rgba(16, 185, 129, 0.9), 0 0 10px rgba(245, 158, 11, 0.9)'
                        : '0 0 14px rgba(49, 130, 206, 0.9), 0 0 8px rgba(128, 90, 213, 0.8)',
                    zIndex: 1000,
                    transition: 'width 0.1s linear, background 0.4s ease, box-shadow 0.4s ease',
                    borderRadius: '0 4px 4px 0',
                }}
            />

            {/* 2. FLOATING HUD CAPSULE */}
            <div
                style={{
                    position: 'fixed',
                    top: '20px',
                    left: '50%',
                    transform: `translateX(-50%) translateY(${isVisible ? '0' : '-70px'}) scale(${isCompleted ? 1.05 : 1})`,
                    opacity: isVisible ? 1 : 0,
                    transition: 'transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease',
                    zIndex: 999,
                    pointerEvents: isVisible ? 'auto' : 'none',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '10px 22px',
                        backgroundColor: isCompleted ? 'rgba(15, 23, 42, 0.95)' : 'rgba(20, 26, 38, 0.92)',
                        backdropFilter: 'blur(12px)',
                        borderRadius: '40px',
                        border: isCompleted ? '1.5px solid rgba(16, 185, 129, 0.6)' : '1.5px solid rgba(255, 255, 255, 0.18)',
                        boxShadow: isCompleted
                            ? '0 12px 30px -5px rgba(0, 0, 0, 0.4), 0 0 25px rgba(16, 185, 129, 0.4)'
                            : '0 12px 30px -5px rgba(0, 0, 0, 0.35), 0 0 20px rgba(49, 130, 206, 0.25)',
                        color: '#ffffff',
                    }}
                >
                    {/* Time Spent Reading Counter */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.95rem',
                            fontWeight: '600',
                            color: '#e2e8f0',
                        }}
                    >
                        <span style={{ fontSize: '1.1rem' }}>⏱️</span>
                        <span>Read: <strong style={{ color: isCompleted ? '#34d399' : '#63b3ed' }}>{formatTime(secondsRead)}</strong></span>
                        <span style={{ fontSize: '0.8rem', color: '#a0aec0', marginLeft: '2px' }}>
                            ({readTime})
                        </span>
                    </div>

                    <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '1.2rem' }}>|</span>

                    {/* PROGRESS & CELEBRATION BADGE */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {/* CLEAN & SOLID PERCENTAGE TEXT */}
                        <span
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: '800',
                                color: isCompleted ? '#34d399' : '#63b3ed', // Solid clean glowing color (no box bug!)
                                minWidth: '50px',
                                textAlign: 'right',
                                letterSpacing: '0.02em',
                            }}
                        >
                            {completion}%
                        </span>

                        {/* Celebratory Tag OR Dynamic Radial Ring */}
                        {isCompleted ? (
                            <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>🎉 Finished!</span>
                        ) : (
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    borderRadius: '50%',
                                    background: `conic-gradient(#3182ce ${completion * 3.6}deg, rgba(255, 255, 255, 0.15) 0deg)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        width: '14px',
                                        height: '14px',
                                        borderRadius: '50%',
                                        backgroundColor: '#141a26',
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}